import { useEffect, useState } from 'react';
import { generateForm } from './survey123-interface';
import './tree-tracking-form.scss';

const SURVEY_DIV_CONTAINER = "survey-container";

type FormDataEventFn = (webform: any, data: any) => void;

const onFormLoaded = (formLoadedCallback: FormDataEventFn) => {
  return (webform: any, data: any) => {
    // taken from https://developers.arcgis.com/survey123/guide/embed-a-survey-using-javascript/
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        webform.setGeopoint({
          x: position.coords.longitude,
          y: position.coords.latitude
        });
      }, () => { console.error('Unable to retrieve your location'); });
    } else {console.error('Geolocation is not supported by your browser'); }
    
    formLoadedCallback(webform, data);
  };
};

const onFormSubmitted = (formSubmittedCallback: FormDataEventFn, formSubmittedFailureCallback: FormDataEventFn) => {
  return (webform: any, data: any) => {
    console.log(data);
    if (data.error?.message) {
      formSubmittedFailureCallback(webform, data);
    } else {
      formSubmittedCallback(webform, data);
    }
  }
};

const onFormFailed = (formFailedCallback: FormDataEventFn) => {
  return (webform: any, data: any) => {
    console.log(data);
    formFailedCallback(webform, data);
  }
};

export interface ITreeTrackingFormProps {
  onNewTreeSubmission?: (data: any) => void;
};

export const TreeTrackingForm = ({ onNewTreeSubmission }: ITreeTrackingFormProps) => {
  const [formLoaded, setFormLoaded] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(false);
  const [formFailed, setFormFailed] = useState(false);

  const onFormSubmission = (_webform: any, data: any) => {
    setFormSubmitError(false);
    setFormSubmitted(true);

    if (onNewTreeSubmission) {
      onNewTreeSubmission(data);
    }
  };

  useEffect(() => {
    // Don't rerender form if it's already on page
    if (!document.getElementById(SURVEY_DIV_CONTAINER)?.querySelector('iframe')) {
      generateForm(
        SURVEY_DIV_CONTAINER,
        onFormLoaded(() => setFormLoaded(true)),
        onFormSubmitted(onFormSubmission, () => setFormSubmitError(true)),
        onFormFailed(() => setFormFailed(true)));
    }
  }, []);

  // some change

  return (
    <>
      {!formLoaded && !formFailed && <p style={{ fontSize: "3em" }}>The form is still loading. Please wait!</p>}
      {formFailed && <p>The form failed to load due to some third party cookie issues. Please enable cookies!</p>}
      <div id={SURVEY_DIV_CONTAINER} />
    </>
  );
};