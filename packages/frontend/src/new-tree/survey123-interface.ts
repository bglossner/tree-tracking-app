/**
 * This file contains Survey123 helper functions for retrieving
 * the form and setting up connections to listen to form changes
 */

import { CLIENT_ID, SURVEY_ITEM_ID } from "../constants/ArcGIS";

// Form resizing, submission, loading, failure, etc
export type FormDataEventFn = (webform: any, data: any) => void;

interface FormWatchStateData {
  name: string;
  shouldShowName: boolean;
}

type MappingEditFn<T> = (
  stateData: FormWatchStateData,
  newFieldValue: T
) => void;

type FormWatchStateDataMap = Record<string, MappingEditFn<any>>;

// Contains mappings from an ArcGIS field name to a function that manages the FormWatchStateData
const mappingEdits: FormWatchStateDataMap = {
  name_visibility: (stateData, value: string) => {
    if (value.toLowerCase() === "yes") {
      stateData.shouldShowName = true;
    } else {
      stateData.shouldShowName = false;
    }
  },
  name_or_group: (stateData, value: string) => {
    stateData.name = value;
  },
};

// When a question changes, check if field is one of these
const fieldsToListenTo = new Set(Object.keys(mappingEdits));

const determineShowName = ({
  name,
  shouldShowName,
}: FormWatchStateData): string => {
  if (!shouldShowName) {
    return "Anonymous";
  } else {
    return name;
  }
};

/**
 * Call to Survey123 JS API to generate the form and we attach listeners to form
 *
 * @param container string indicating the DOM element ID of where to place the form within
 * @param onFormLoad function to be called when form is loaded
 * @param onFormSubmit function to be called when form is submitted
 * @param onFormFail function to be called when form fails to be loaded
 * @param onFormResized function to be called when form is resized
 */
export const generateForm = (
  container: string,
  onFormLoad: (webform: any, data: any) => void,
  onFormSubmit: (webform: any, data: any) => void,
  onFormFail: (webform: any, data: any) => void,
  onFormResized: (data: any) => void
) => {
  const stateData: FormWatchStateData = {
    name: "",
    shouldShowName: false,
  };

  // @ts-ignore
  const webform = new Survey123WebForm({
    clientId: CLIENT_ID,
    container: container,
    itemId: SURVEY_ITEM_ID,
    onFormLoaded: (data: any) => {
      onFormLoad(webform, data);
    },
    onFormSubmitted: (data: any) => {
      onFormSubmit(webform, data);
    },
    hideElements: ["navbar", "footer"],
  });

  webform.setOnFormFailed((data: any) => {
    onFormFail(webform, data);
  });

  // Listen to form changes and if it's a question that we want to listen to,
  // take appropriate action to change FormWatchStateData
  // NOTE: The name_publicly field in form is set programmatically based on the FormWatchStateData
  webform.setOnQuestionValueChanged((change: any) => {
    if (fieldsToListenTo.has(change.field)) {
      mappingEdits[change.field](stateData, change.value);
      webform.setQuestionValue({
        name_publicly: determineShowName(stateData),
      });
    }
  });

  webform.setOnFormResized((data: any) => {
    onFormResized(data);
  });
};
