import './FormField.scss';
import { Alert, FormLabel } from "@mui/material";

export type FormFieldProps = {
  label: string | JSX.Element;
  errors: { type: string, message: string } | undefined;
};

export const FormField: React.FC<FormFieldProps> = ({children, label, errors}) => {
  return (
    <div className="form-field">
      <FormLabel component="label">{label}</FormLabel>
      {children}
      {errors &&
        <Alert className='error-alert-box' severity="error">
          {errors.type === 'required' ? `The ${label} field is required` : errors.message}
        </Alert>}
    </div>
  );
};