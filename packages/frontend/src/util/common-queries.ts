import { queryFeatures } from "@esri/arcgis-rest-feature-layer";
import { PUBLIC_VIEW_URL } from "../constants/ArcGIS";

interface IReturnCountOnly {
  count: number;
}

export async function getNumberOfTrees(): Promise<number> {
  const trees = await queryFeatures({ url: PUBLIC_VIEW_URL, returnCountOnly: true }) as IReturnCountOnly;

  return trees.count;
}