/* eslint-disable */
export const generateForm = (container, onFormLoad, onFormSubmit, onFormFail, onFormResized) => {
  const webform = new Survey123WebForm({
    clientId: "YUnfvUenRS5bzPOW",
    container: container,
    itemId: "ac2cf4bda3fb49e7bf4860b23850ec86",
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