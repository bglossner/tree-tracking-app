import fetch from "node-fetch";
import FormData from "isomorphic-form-data";
import { setDefaultRequestOptions } from "@esri/arcgis-rest-request";
import { queryFeatures } from "@esri/arcgis-rest-feature-layer"
import { ApplicationSession } from "@esri/arcgis-rest-auth";

// @ts-ignore -- this is for fetch
setDefaultRequestOptions({ fetch, FormData });

const ARCGIS_AUTH = new ApplicationSession({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// url not accessible to anonymous users
const featureLayerUrl = `https://services1.arcgis.com/0j6vZbECadDEXdAS/arcgis/rest/services/survey123_ac2cf4bda3fb49e7bf4860b23850ec86_stakeholder/FeatureServer/0`;

export function getTotalTrees() {
  return queryFeatures({
    url: featureLayerUrl,
    returnCountOnly: true,
  });
}

export function getAllTrees() {
  return queryFeatures({
    url: featureLayerUrl,
    outFields: [
      "objectid",
      "globalid",
      "CreationDate",
      "Creator",
      "EditDate",
      "Editor",
      "date_planted",
      "contact_email",
      "tree_species",
      "tree_species_other",
      "record_your_initials"
    ],
  });
}
