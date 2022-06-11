import { PUBLIC_FIELD_VIEW_ID, PUBLIC_VIEW_URL } from '../../../constants/ArcGIS';
import { IFeature, IQueryFeaturesResponse, queryFeatures } from '@esri/arcgis-rest-feature-layer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import imageNotFound from '../../../assets/images/no-image-found.jpg';
import './RecentlyPlantedCard.scss';

interface ImageInfo {
  /**
   * Url referencing the image
   */
  src: string;
}

/**
 * Mapping between an object ID and the attachment
 */
type ImageMap = Record<string, ImageInfo>;

interface ObjectAttachment {
  url: string;
}

export interface IRetrievedData {
  objectid: number;
  date_planted: string;
  verified_tree_species: string | undefined;
  recorded_tree_species: string | undefined;
  verified: string;
  name_publicly: string;
  img: ImageInfo;
};

// Made global so one instance is made for convenience
let layer: FeatureLayer | null = null;

/**
 * Retrieves the feature layer info from ArcGIS for the JS API to get attachments
 */
function getLayer(): FeatureLayer {
  if (!layer) {
    layer = new FeatureLayer({
      portalItem: {
        id: PUBLIC_FIELD_VIEW_ID,
      },
      outFields: ["objectid"],
    });

    return layer;
  } else {
    return layer;
  }
}

/**
 * Retrieves the tree data from ArcGIS of the next @pageLength trees starting from @page
 * @param page Reference to ArcGIS pagination start
 * @param pageLength Number of trees to retrieve
 */
async function getData(page: number, pageLength: number): Promise<IFeature[]>  {
  const lastTreesPlanted = await queryFeatures({
    url: PUBLIC_VIEW_URL,
    resultOffset: page,
    resultRecordCount: pageLength,
    // Only want these fields
    outFields: ['objectid', 'name_publicly', 'date_planted', 'verified_tree_species', 'tree_species', 'verified'],
    returnGeometry: false,
    orderByFields: "objectid DESC",
  }) as IQueryFeaturesResponse;

  return lastTreesPlanted.features;
}

/**
 * Retrieves the relevant attachment (tree image) for each object ID
 */
async function getImages(objectIds: number[]): Promise<ImageMap> {
  // retrieves images only. MUST sort the objectIds
  const attachments: Record<string, ObjectAttachment[]> = await getLayer().queryAttachments({
    attachmentTypes: ["image/jpeg", "image/png", "image/jpg"],
    objectIds: objectIds.sort(),
  });

  const images: ImageMap = {};

  // Convert to string so key is string for JSON (not needed but would be done implicitly)
  objectIds.map(o => o.toString()).forEach((objectId) => {
    const objAttachments = attachments[objectId];

    images[objectId] = {
      // the source is the first attachment related to that object id or an image that tells the user the
      // tree has no image
      src: objAttachments?.[0].url ?? imageNotFound,
    };
  });

  return images;
}

/**
 * Retrieve the data and images for the @pageLength number of trees starting pagination from @page
 */
export async function retrieveRecentlyPlantedData(page: number, pageLength: number): Promise<IRetrievedData[]> {
  const dataWithoutImages = await getData(page, pageLength);

  if (dataWithoutImages.length === 0) {
    return [];
  }

  const objectIds = dataWithoutImages.map((entry) => (entry.attributes.objectid));
  const images = await getImages(objectIds);

  return dataWithoutImages.map((data) => {
    return {
      verified: data.attributes.verified as string,
      objectid: +data.attributes.objectid,
      recorded_tree_species: data.attributes.tree_species as string,
      date_planted: data.attributes.date_planted as string,
      verified_tree_species: data.attributes.verified_tree_species as string,
      name_publicly: data.attributes.name_publicly as string,
      img: images[data.attributes.objectid],
    };
  });
}