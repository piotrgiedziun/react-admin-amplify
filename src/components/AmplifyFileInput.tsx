import React from "react";
import { FileInput, FileInputProps, InputProps } from "react-admin";
import { useStorageInput } from "../hooks/useStorageInput";
import { AmplifyFileField } from "./AmplifyFileField";

type Props = {
  source: string;
  multiple?: boolean;
  options?: any;
  storageOptions?: any;
  fileFieldProps?: any;
} & FileInputProps &
  InputProps;

export const AmplifyFileInput: React.FC<Props> = ({
  options = {},
  storageOptions = {},
  fileFieldProps = {},
  ...props
}) => {
  const { onDropAccepted } = useStorageInput({
    source: props.source,
    multiple: props.multiple,
    onDropAcceptedCallback: options.onDropAccepted,
    storageOptions,
  });

  return (
    <FileInput {...props} options={{ ...options, onDropAccepted }}>
      <AmplifyFileField storageOptions={storageOptions} {...fileFieldProps} />
    </FileInput>
  );
};
