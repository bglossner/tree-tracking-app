import { PUBLIC_FIELD_VIEW_ID, PUBLIC_VIEW_URL } from '../../../constants/ArcGIS';
import { IFeature, IQueryFeaturesResponse, queryFeatures } from '@esri/arcgis-rest-feature-layer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import imageNotFound from '../../../assets/images/no-image-found.jpg';
import './RecentlyPlantedCard.scss';

interface ImageInfo {
  src: string;
}

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
  show_name: string;
  img: ImageInfo;
};

const CARDS_DISPLAYED = 5;
let layer: FeatureLayer | null = null;

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

async function getData(): Promise<IFeature[]>  {
  const lastTreesPlanted = await queryFeatures({
    url: PUBLIC_VIEW_URL,
    resultRecordCount: CARDS_DISPLAYED,
    outFields: ['objectid', 'show_name', 'date_planted', 'verified_tree_species', 'field_17', 'Verified'],
    returnGeometry: false,
    orderByFields: "objectid DESC",
  }) as IQueryFeaturesResponse;

  return lastTreesPlanted.features;
}

async function getImages(objectIds: number[]): Promise<ImageMap> {
  const attachments: Record<string, ObjectAttachment[]> = await getLayer().queryAttachments({
    attachmentTypes: ["image/jpeg", "image/png", "image/jpg"],
    objectIds: objectIds.sort(),
  });

  const images: ImageMap = {};

  objectIds.map(o => o.toString()).forEach((objectId) => {
    const objAttachments = attachments[objectId];

    images[objectId] = {
      src: objAttachments?.[0].url ?? imageNotFound,
    };
  });

  return images;
}

export async function retrieveRecentlyPlantedData(): Promise<IRetrievedData[]> {
  const dataWithoutImages = await getData();
  const objectIds = dataWithoutImages.map((entry) => (entry.attributes.objectid));
  const images = await getImages(objectIds);

  return dataWithoutImages.map((data) => {
    return {
      verified: data.attributes.Verified as string,
      objectid: +data.attributes.objectid,
      recorded_tree_species: data.attributes.field_17 as string,
      date_planted: data.attributes.date_planted as string,
      verified_tree_species: data.attributes.verified_tree_species as string,
      show_name: data.attributes.show_name as string,
      img: images[data.attributes.objectid],
    };
  });
}