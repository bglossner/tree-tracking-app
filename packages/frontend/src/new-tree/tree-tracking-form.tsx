import { useEffect, useRef, useState } from 'react';
import { generateForm } from './survey123-interface';
import './tree-tracking-form.scss';

export interface IAddResult {
  objectId: number;
  uniqueId: number;
  globalId: string;
  success: boolean;
}

export interface ITreeSubmissionResult {
  addResults: IAddResult[];
  attachments: any;
}

export interface ISurveyFeatures {
  attachments: any;
  attributes: any;
  geometry: any;
  objectId: number;
}

export interface ISurveyFeatureSet {
  features: ISurveyFeatures[];
  form: any;
}

export interface ITreeSubmission {
  result: ITreeSubmissionResult[];
  surveyFeatureSet: ISurveyFeatureSet;
}

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

const setHeightBasedOnData = (container: HTMLElement | null, data: any) => {
  if (container?.style && data?.contentHeight) {
    const height = data.contentHeight;
    container.style.height = `${height}px`;
    container.style.paddingBottom = "unset" ;
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
  const divContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onFormSubmission = (_webform: any, data: any) => {
      console.log(data);
      setFormSubmitError(false);
      setFormSubmitted(true);
  
      if (onNewTreeSubmission) {
        onNewTreeSubmission(data);
      }
    };
    
    const formLoadedFn = (_webform: any, data: any) => {
      setHeightBasedOnData(divContainerRef.current, data);

      setFormLoaded(true);
    };

    const onFormResized = (data: any) => {
      setHeightBasedOnData(divContainerRef.current, data);
    };

    // Don't rerender form if it's already on page
    if (!document.getElementById(SURVEY_DIV_CONTAINER)?.querySelector('iframe')) {
      generateForm(
        SURVEY_DIV_CONTAINER,
        onFormLoaded(formLoadedFn),
        onFormSubmitted(onFormSubmission, () => setFormSubmitError(true)),
        onFormFailed(() => setFormFailed(true)),
        onFormResized,
      );
    }
  }, [onNewTreeSubmission]);

  // some change

  return (
    <>
      {!formLoaded && !formFailed && (
        <div className='loading-form-info'>
          <p style={{ fontSize: "2em" }}>The form is still loading. Please wait!</p>
        </div>
      )}
      {formFailed && <p>The form failed to load due to some third party cookie issues. Please enable cookies!</p>}
      <div ref={divContainerRef} id={SURVEY_DIV_CONTAINER} />
    </>
  );
};