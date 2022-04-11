import { UserSession } from "@esri/arcgis-rest-auth";
import { queryFeatures } from "@esri/arcgis-rest-feature-layer";
import { VERIFICATION_VIEW_URL } from "../../constants/ArcGIS";

export const MAX_ALLOWED_RECORDS = 100;

type GlobalId = string;
type UnverifiedTrees = GlobalId[];

export interface IUnverifiedResults {
  count: number;
  results: UnverifiedTrees;
}

interface IObjectIdResponse {
  objectIdFieldName: string;
  objectIds: number[];
}

function range(size: number, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}

export const getTreesNotInVerifiedTable = async (authentication: UserSession): Promise<IUnverifiedResults> => {
  const objectIds = await queryFeatures({
    url: VERIFICATION_VIEW_URL,
    returnIdsOnly: true,
    authentication,
  }) as IObjectIdResponse;

  for (let i = 0; i < MAX_ALLOWED_RECORDS; i++) {
    
    range(MAX_ALLOWED_RECORDS, i)
  }

  return {
    count: 0,
    results: ['h'],
  };
};