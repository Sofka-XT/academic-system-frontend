import React from 'react';
import { appSdk8 } from '../../../../config/firebase/firebase.config';
import { useFormContext } from 'react-hook-form';

export const FileUploadComponent = ({ indexCategory, indexRule }) => {
  const { setValue } = useFormContext();
  const fileHandler = async (e) => {
    const file = e.target.files[0];
    const storageRef = appSdk8.storage().ref();
    const filePath = storageRef.child(file.name);
    await filePath.put(file);
    const enlaceUrl = await filePath.getDownloadURL();
    setValue(
      `categories[${indexCategory}].rules[${indexRule}].feedback.uri`,
      enlaceUrl
    );
  };

  return (
    <>
      <input
        className="form-control form-control-sm "
        type="file"
        onChange={fileHandler}
      />
    </>
  );
};
