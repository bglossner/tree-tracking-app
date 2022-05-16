import { queryFeatures } from "@esri/arcgis-rest-feature-layer";
import { PUBLIC_VIEW_URL } from "../constants/ArcGIS";

interface IReturnCountOnly {
  objectIds: [number];
}

export async function getNumberOfTrees(): Promise<number> {
  // const trees = await queryFeatures({ url: PUBLIC_VIEW_URL, returnCountOnly: true }) as IReturnCountOnly;
  const trees = await queryFeatures({
    url: PUBLIC_VIEW_URL,
    resultRecordCount: 1,
    returnIdsOnly: true,
    orderByFields: "objectid DESC",
  }) as IReturnCountOnly;

  // return trees.count;
  return trees.objectIds[0];
}