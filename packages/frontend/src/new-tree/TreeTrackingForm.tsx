import { useEffect, useRef, useState } from 'react';
import { FormDataEventFn, generateForm } from './survey123-interface';
import './tree-tracking-form.scss';

export interface IAddResult {
  /**
   * Tree number (ArcGIS object id)
   */
  objectId: number;
  /**
   * Unique ID for tree. NOT USED. Same as global id
   */
  uniqueId: number;
  /**
   * ArcGIS global id for tree
   */
  globalId: string;
  /**
   * Whether the trees was successful in submitting
   */
  success: boolean;
}

export interface ITreeSubmissionResult {
  /**
   * Only length 1 for this application.
   */
  addResults: IAddResult[];
  /**
   * Any related uploaded attachments. NOT USED
   */
  attachments: any;
}

export interface ISurveyFeatures {
  /**
   * Any related uploaded attachments. NOT USED
   */
  attachments: any;
  /**
   * Object containing info about fields and such from form. NOT USED
   */
  attributes: any;
  /**
   * Longitude/Latitude coordinates object of tree. NOT USED
   */
  geometry: any;
  /**
   * Tree number (ArcGIS object id)
   */
  objectId: number;
}

export interface ISurveyFeatureSet {
  /**
   * Features for survey. General object containing info about survey/form features
   * 
   * Not related to actual submission
   */
  features: ISurveyFeatures[];
  /**
   * Actual form object
   */
  form: any;
}

export interface ITreeSubmission {
  /**
   * See @ITreeSubmissionResult
   */
  result: ITreeSubmissionResult[];
  /**
   * See @ISurveyFeatureSet
   */
  surveyFeatureSet: ISurveyFeatureSet;
}

// DOM element ID for container for survey to go in
const SURVEY_DIV_CONTAINER = "survey-container";

// Sets the survey's default location for map question for where tree is planted
// to user's current location
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

// Form submission can be successful or not. Take appropriate action
const onFormSubmitted = (formSubmittedCallback: FormDataEventFn, formSubmittedFailureCallback: FormDataEventFn) => {
  return (webform: any, data: any) => {
    if (data.error?.message) {
      formSubmittedFailureCallback(webform, data);
    } else {
      formSubmittedCallback(webform, data);
    }
  }
};

const onFormFailed = (formFailedCallback: FormDataEventFn) => {
  return (webform: any, data: any) => {
    formFailedCallback(webform, data);
  }
};

// Used to help with form resizing and initial container height.
// Makes container the size of the form so that there is no overflow/scrollbar for form
const setHeightBasedOnData = (container: HTMLElement | null, data: any) => {
  if (container?.style && data?.contentHeight) {
    const height = data.contentHeight;
    container.style.height = `${height}px`;
    container.style.paddingBottom = "unset" ;
  }
};

export interface ITreeTrackingFormProps {
  /**
   * Callback for what to do when there is a tree submitted
   */
  onNewTreeSubmission?: (data: any) => void;
};

/**
 * Component for the Survey123 form for submitting a tree planted
 */
export const TreeTrackingForm = ({ onNewTreeSubmission }: ITreeTrackingFormProps) => {
  const [formLoaded, setFormLoaded] = useState(false);
  // Not used but may be used later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_formSubmitted, setFormSubmitted] = useState(false);
  // Not used but may be used later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_formSubmitError, setFormSubmitError] = useState(false);
  const [formFailed, setFormFailed] = useState(false);
  const divContainerRef = useRef<HTMLDivElement | null>(null);
  
  // Inject survey on component load
  useEffect(() => {
    const onFormSubmission = (_webform: any, data: any) => {
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