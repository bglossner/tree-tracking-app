import { CLIENT_ID, SURVEY_ITEM_ID } from "../constants/ArcGIS";

const mappingEdits = {
  "name_visibility": (stateData, value) => {
    if (value.toLowerCase() === 'yes') {
      stateData.shouldShow = true;
    } else {
      stateData.shouldShow = false;
    }
  },
  "record_your_initials": (stateData, value) => {
    stateData.name = value;
  },
};

const fieldsToListenTo = new Set(Object.keys(mappingEdits));

const determineShowName = ({ name, shouldShow }) => {
  if (!shouldShow) {
    return 'Anonymous';
  } else {
    return name;
  }
};

export const generateForm = (container, onFormLoad, onFormSubmit, onFormFail, onFormResized) => {
  const stateData = {
    name: '',
    shouldShow: false,
  };

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

  webform.setOnQuestionValueChanged((change) => {
    if (fieldsToListenTo.has(change.field)) {
      mappingEdits[change.field](stateData, change.value);
      webform.setQuestionValue({
        show_name: determineShowName(stateData),
      });
    }
  });

  webform.setOnFormResized(data => {
    onFormResized(data);
  });
};