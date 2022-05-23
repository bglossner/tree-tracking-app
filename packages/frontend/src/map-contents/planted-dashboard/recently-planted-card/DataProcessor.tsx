import { PUBLIC_FIELD_VIEW_ID, PUBLIC_VIEW_URL } from '../../../constants/ArcGIS';
import { IQueryFeaturesResponse, queryFeatures } from '@esri/arcgis-rest-feature-layer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import './RecentlyPlantedCard.scss';


interface ImageInfo {
  src: string;
}

type ImageMap = Record<string, ImageInfo>;

interface ObjectAttachment {
  url: string;
}

let layer: any = null;

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

const CARDS_DISPLAYED = 5;

interface IRetrievedData {
  "img": String,
  "verified_tree_species": String,
  "objectid": number,
  "date_planted": Date,
  "ShowableName": String,
  "show_name": String,
  "field_17": String,
  "Verified": Boolean

};

async function getData() {
  const trees2 = await queryFeatures({
    url: PUBLIC_VIEW_URL,
    resultRecordCount: CARDS_DISPLAYED,
    outFields: ['objectid', 'ShowableName', 'show_name', 'date_planted', 'verified_tree_species', 'field_17', 'Verified' ],
    returnGeometry: false,
    orderByFields: "objectid DESC",
  }) as IQueryFeaturesResponse;

  console.log('the trees');
  console.log(trees2.features);
  return trees2.features;
}

async function getImages(objectIds: number[]): Promise<ImageMap> {
  console.log('the url');
  const idString = `${objectIds[0]},${objectIds[1]},${objectIds[2]},${objectIds[3]},${objectIds[4]}`;
  // const images = fetch(`${PUBLIC_VIEW_URL}/queryAttachments?objectIds=${idString}&f=json`);
  // console.log(`${PUBLIC_VIEW_URL}/queryAttachments`)
  console.log(objectIds);
  objectIds = [13, 14, 15, 16, 17];
  const attachments: Record<string, ObjectAttachment[]> = await getLayer().queryAttachments({
    attachmentTypes: ["image/jpeg", "image/png", "image/jpg"],
    objectIds: objectIds,
  });

  const images: ImageMap = {};

  objectIds.map(o => o.toString()).forEach((objectId) => {
    const objAttachments = attachments[objectId];

    images[objectId] = {
      src: objAttachments?.[0].url ?? 'could not find!',
    };
  });

  return images;
}



function extractObjectIds(data: IQueryFeaturesResponse) {
  // const theFeatures
}

export async function DataProcessor() {
  const dataWithoutImages = await getData();
  const objectIds = dataWithoutImages.map((entry, idx) => (entry.attributes.objectid));
  console.log('here');
  const images = await getImages(objectIds);
  console.log(images);
  // console.log(await images.json());

  return getData();
}