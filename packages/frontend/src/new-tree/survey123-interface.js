import { CLIENT_ID, SURVEY_ITEM_ID } from "../constants/ArcGIS";

export const generateForm = (container, onFormLoad, onFormSubmit, onFormFail, onFormResized) => {
  // eslint-disable-next-line no-undef
  const webform = new Survey123WebForm({
    clientId: CLIENT_ID,
    container: container,
    itemId: SURVEY_ITEM_ID,
    onFormLoaded: (data) => {
      onFormLoad(webform, data);
    },
    onFormSubmitted: (data) => {
      onFormSubmit(webform, data);
    },
    hideElements: ['navbar', 'footer'],
  });

  webform.setOnFormFailed(data => {
    onFormFail(webform, data);
  });

  webform.setOnFormResized(data => {
    onFormResized(data);
  });
};