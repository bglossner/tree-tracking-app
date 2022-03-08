import fetch from "node-fetch";
import FormData from "isomorphic-form-data";
import { setDefaultRequestOptions, request } from "@esri/arcgis-rest-request";
import { ApplicationSession } from "@esri/arcgis-rest-auth";
import * as dotenv from "dotenv";
import * as path from "path";

console.log(__dirname);

dotenv.config({
  path: path.join(__dirname, '..', '.env'),
});

// @ts-ignore -- this is for fetch
setDefaultRequestOptions({ fetch, FormData });

const ARCGIS_AUTH = new ApplicationSession({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// url not accessible to anonymous users
const url = ``

// token will be appended by rest-js
request(url, {
  authentication: ARCGIS_AUTH,
});