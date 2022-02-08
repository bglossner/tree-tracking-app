import './tree-tracking-form.scss';
import { Controller, useForm } from "react-hook-form";
import * as exifr from "exifr";
import { SyntheticEvent, useEffect, useState } from "react";
import CreatableSelect from 'react-select/creatable';
import { FormField } from '../util/forms/FormField';

type TreeTrackingFormProps = {
};

const isImage = (file: File) => file['type'].includes('image');

type GPSResult = { latitude: number, longitude: number } | undefined;

const getGpsCoords = async (file: File) => new Promise<GPSResult>((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async function () {
    // console.log(reader.result);
    const res = reader.result as string;
    const gpsResults = await exifr.gps(res);
    resolve(gpsResults);
  };
  reader.onerror = function (error) {
    reject(error);
  };
});

const treeSpecies: string[] = [
  "redwood",
  "pine",
  "spruce",
  "sequoia",
  "palm",
  "two words",
];

interface SelectOption {
  value: string;
  label: string;
}

const capitalize = (s: string) => {
  return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const speciesListToSelectOptions = (species: string[]): SelectOption[] => {
  return species.map(s => ({ value: s.toLowerCase(), label: capitalize(s) }))
};

export const TreeTrackingForm: React.FC<TreeTrackingFormProps> = (props) => {
  const { register, control, handleSubmit, getValues, setError, formState: { errors, isSubmitting } } = useForm();
  const [species, setSpecies] = useState<string[]>([]);
  const [speciesAsOptions, setSpeciesAsOptions] = useState<SelectOption[]>([]);

  useEffect(() => {
    setSpecies(treeSpecies);
    setSpeciesAsOptions(speciesListToSelectOptions(treeSpecies));
  }, []);

  const [photoObject, setPhotoObject] = useState<string | undefined>(undefined);

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const onTreeFileUpload = async (e: SyntheticEvent): Promise<void> => {
    const target = e.target as HTMLInputElement;

    if (!target.files) {
      return;
    }

    const treePhoto = target.files[0];

    if (!isImage(treePhoto)) {
      // handle bad image
      setError("treeImage", {
        type: "invalidImage",
        message: "That is not a valid image!"
      });
      return;
    }

    setPhotoObject(URL.createObjectURL(treePhoto));

    const gpsCoords = await getGpsCoords(treePhoto).catch(e => Error(e));
    if (gpsCoords instanceof Error) {
      // handle error here
      return;
    }

    if (!gpsCoords) {
      // handle bad image format
      return;
    }

    const { latitude, longitude } = gpsCoords;
    console.log(latitude, longitude);
  };

  console.log(errors);

  return (
    <form id="new-tree" onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Planter (name of group/person)" errors={errors.planter}>
        <input {...register("planter", { required: true })} type="text" />
      </FormField>
      <FormField errors={errors.treeSpeciesSelector} label="Tree Species">
        <Controller
          control={control}
          name="treeSpeciesSelector"
          rules={{ required: true }}
          render={({
            field: { onChange },
          }) => (
            <CreatableSelect
              isClearable
              onChange={onChange}
              defaultValue={speciesAsOptions?.[0]}
              options={speciesAsOptions}
            />
          )}
        />
      </FormField>
      <br />
      {/* perhaps give a drap/drop too */}
      <FormField label="Photo(s) of Tree" errors={errors.treeImage}>
        <input {...register("treeImage", { onChange: onTreeFileUpload })} type="file" />
      </FormField>
      {
        !!getValues("treeImage") && !errors.treeImage && photoObject ? (
          <img className="tree-photo" src={photoObject} alt="Uploaded tree." />
        ) : null
      }

      <button type="submit">Submit</button>
    </form>
  );
}