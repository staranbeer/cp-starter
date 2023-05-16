import { useState } from 'react';

/**
 * * A hook to control deployment form state
 *
 * @param defaultValues an object containing default values for the form
 * */

const useDeploymentForm = function <T>(defaultValues: T): {
  getFormValues: () => T;
  setFormField: (field: keyof typeof formState, value: string) => void;
  getFormFieldValue: (field: keyof typeof formState) => T[keyof T];
  resetDynamicFormFields: () => void;
  requiredFieldsNotFilled: (fields: string[]) => boolean;
} {
  const formValues: T = Object.assign(defaultValues || {});
  const [formState, setFormState] = useState(formValues);

  // a function to reset everything except the default fields

  function resetDynamicFormFields() {
    setFormState((prevState: any) => {
      const newObj = Object.assign(prevState);
      Object.keys(newObj).forEach((i: any) => {
        // @ts-ignore
        if (i in defaultValues) {
        } else {
          delete newObj[i];
        }
      });
      return { ...newObj };
    });
  }

  function getFormValues(): typeof formState {
    return formState;
  }

  function setFormField(field: keyof typeof formState, value: string) {
    if (field != undefined) {
      // @ts-ignore
      setFormState((prevState) => {
        return { ...prevState, [field]: value };
      });
    }
  }

  /*
   * A function to check if the user has filled all of the required feilds
   */
  function requiredFieldsNotFilled(fields: string[]) {
    // @ts-ignore
    const result = fields.some((i) => formState[i] === '');
    return result;
  }

  function getFormFieldValue(field: keyof typeof formState) {
    return formState[field];
  }

  return {
    getFormValues,
    setFormField,
    getFormFieldValue,
    resetDynamicFormFields,
    requiredFieldsNotFilled,
  };
};

export default useDeploymentForm;

export type DeploymentFormInstance<T> = ReturnType<typeof useDeploymentForm<T>>;
