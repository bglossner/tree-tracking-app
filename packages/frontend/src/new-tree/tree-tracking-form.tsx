import { useForm } from "react-hook-form";
import * as exifr from "exifr";
import { SyntheticEvent, useState } from "react";

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

export const TreeTrackingForm: React.FC<TreeTrackingFormProps> = (props) => {
  const { register, handleSubmit, getValues, setError, formState: { errors, isSubmitting } } = useForm();

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("treeSpecies", { required: false })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      {/* perhaps give a drap/drop too */}
      <input {...register("treeImage", { onChange: onTreeFileUpload })} type="file" />
      {
        !!getValues("treeImage") && !errors.treeImage && photoObject ? (
          <img src={photoObject} alt="Uploaded tree." />
        ) : null
      }

      <button type="submit">Submit</button>
    </form>
  );
}