import { getLayer, queryFeatures, queryRelated } from "@esri/arcgis-rest-feature-layer";
import { useEffect, useState } from "react";
import { IUserSessionInfo } from "../standard-page/arcgis-admin/ArcGISAdminPage";
import { getTreesNotInVerifiedTable } from "./update-verification-table/helpers";

interface IProps extends IUserSessionInfo {};

export interface ITreeRecord {

};

export function AdminVerification({ error, userSession, loading }: IProps) {
  const [unverifiedRecords, setUnverifiedRecords] = useState<ITreeRecord[]>([]);
  const [loadingRecords, setLoadingRecords] = useState(true);
  
  useEffect(() => {
    if (userSession) {
      queryFeatures({
        url: featureServerUrl,
        outFields: ["globalid"],
        authentication: userSession,
      }).then((x: any) => {
        console.log(x);
      });

      // queryFeatures({
      //   url: featureServerUrl,
      //   where: "globalid not in ('1', '2')",
      //   authentication: userSession,
      // }).then(x => {
      //   console.log(x);
      // })
      getTreesNotInVerifiedTable(userSession);
    }
  }, [userSession]);

  if (error) {
    return <p>An error occurred while loading the page</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userSession) {
    alert('Unexpected error... error, loading, and userSession are all falsy.');
    return null;
  }

  return (
    <p>Successfully loaded user: { userSession.username } with password { userSession.password } </p>
  );
}