import React from 'react';
import { appSdk8 } from '../../../../config/firebase/firebase.config';

import { MessageErrorFormComponent } from './../messageErrorFormComponent/MessageErrorFormComponent';

export const FileUploadComponent = ({
  register,
  indexCategory,
  indexRule,
  errors,
  setValue,
}) => {
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
    <div>
      <input type="file" onChange={fileHandler} />
      {errors.categories &&
        errors.categories[indexCategory]?.rules[indexRule]?.feedback?.url && (
          <MessageErrorFormComponent message={'debe subir un archivo '} />
        )}
    </div>
  );
};
