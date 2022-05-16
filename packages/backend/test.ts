import { ApplicationSession } from "@esri/arcgis-rest-auth";
import { request } from "@esri/arcgis-rest-request";
import * as dotenv from 'dotenv';

dotenv.config();

const authentication = new ApplicationSession({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// url not accessible to anonymous users
const url = `https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World`;

const fl = new FeatureLayer({
  portalItem: {  // autocasts as esri/portal/PortalItem
    id: "8444e275037549c1acab02d2626daaee"
  }
});

// token will be appended by rest-js
request(url, {
  authentication,
});