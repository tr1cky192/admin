// import iconFolder from 'assets/icons/folder.svg';
import iconPlus from 'assets/icons/plus.svg';
// import { VerificationModal } from './VerificationModal';
import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Wrapper, Button, Svg } from './VerificationDocuments.styled';
import { DocumentsVerify } from './VerificationModal/DocumentsVerify';

export const VerificationDocuments = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [disabled, setDisabled] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      setFiles(prevState => [...prevState, file]);
    });
  }, []);

  useEffect(() => {
    if (files.length >= 6) {
      setDisabled(true);
    }
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled,
    maxFiles: 1,
    accept: {
      'text/html': ['.html', '.htm', '.pdf'],
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    // accept: 'image/jpeg, image/png',
  });

  return (
    <Wrapper>
      <Button>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p> add selfie photo with document, verifier documents</p>
          )}
          <Svg src={iconPlus} alt="plus" />
        </div>
      </Button>
      <DocumentsVerify files={files} />
    </Wrapper>
  );
};

// type Evt = {
//     evt: string[];
// }
// type Target = {
//     evt: {
//         target: string;
//     }
// }

// type Files = {
//     evt: {
//         target: {

//             files: string;

//         }
//         // target: {

//         // files: string;

//         // }
//     }
// }
// const fileChangedHandler = ({evt: {target}}: Files) => {
//     const file = target.files[0];
//     console.log(file);

// };

// reader.onload = () => {
//   setFiles((prevState: any) => [...prevState, file]);
// }
// reader.readAsDataURL(file)
