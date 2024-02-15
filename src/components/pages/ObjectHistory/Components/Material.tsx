import doc from 'assets/icons/doc.svg';
import camera from 'assets/icons/camera.svg';
import selfi from 'assets/icons/selfi.svg';
import fold from 'assets/icons/folder.svg';
import { useState } from 'react';
import {
  DivFoldCenter,
  DivFoldMaterial,
  DivFrameCamera,
  DivMaterial,
  DivMaterialMain,
  ImgFoldMaterial,
  InputMaterial,
  PFoldText,
  SpanMaterial,
  StyledButton,
} from './Compinents.styled';

export const Material = () => {
  const sampleText = `Test document`;

  const materialData = [
    { imgUrl: fold, sizeText: '64 Kb', nameText: 'fjhnfd8hb.txt' },
    { imgUrl: fold, sizeText: '64 Kb', nameText: 'fjhnfd8hb.txt' },
    { imgUrl: fold, sizeText: '64 Kb', nameText: 'fjhnfd8hb.txt' },
    { imgUrl: fold, sizeText: '64 Kb', nameText: 'fjhnfd8hb.txt' },
  ];

  const materialDataVideo = [
    {
      videoUrl: 'https://www.youtube.com/watch?v=efFmBpPp70k',
      sizeText: '64 Kb',
      nameText: 'video1.mp4',
    },
    {
      videoUrl: 'https://www.youtube.com/watch?v=efFmBpPp70k',
      sizeText: '64 Kb',
      nameText: 'video2.mp4',
    },
  ];

  const dataUrl = URL.createObjectURL(new Blob([sampleText], { type: 'text/plain' }));
  const imageUrl = URL.createObjectURL(new Blob(['imageData'], { type: 'image/jpeg' }));

  const [showButtons, setShowButtons] = useState<Record<string, boolean>>(
    materialDataVideo.reduce((acc, _, index) => ({ ...acc, [`image_${index}`]: false }), {})
  );

  const handleImageClick = (key: string) => {
    setShowButtons(prevShowButtons => ({
      ...prevShowButtons,
      [key]: !prevShowButtons[key],
    }));
  };

  return (
    <DivMaterialMain>
      <DivMaterial>
        <DivFrameCamera>
          <img src={camera} alt="camera" />
        </DivFrameCamera>
        <SpanMaterial>video about the object</SpanMaterial>
        <DivFoldMaterial style={{ marginTop: '22px' }}>
          {materialDataVideo.map((data, index) => (
            <div>
              <ImgFoldMaterial
                src={fold}
                alt="fold"
                onClick={() => handleImageClick(`image_${index}`)}
              />
              <PFoldText>
                {data.sizeText}
                <br /> {data.nameText}
              </PFoldText>
              {showButtons[`image_${index}`] && (
                <div>
                  <StyledButton
                    type="button"
                    onClick={() => window.open(materialDataVideo[index].videoUrl, '_blank')}
                  >
                    View
                  </StyledButton>
                  <StyledButton
                    type="button"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = materialDataVideo[index].videoUrl;
                      link.download = materialDataVideo[index].nameText;
                      link.click();
                    }}
                  >
                    Download
                  </StyledButton>
                </div>
              )}
            </div>
          ))}
        </DivFoldMaterial>
      </DivMaterial>
      <DivMaterial>
        <div>
          <img src={doc} alt="camera" style={{ marginTop: '20px' }} />
        </div>
        <SpanMaterial>the documents</SpanMaterial>
        <DivFoldCenter>
          {materialData.map((data, index) => (
            <div>
              <a href={dataUrl} download={`documents${index + 1}.txt`}>
                <ImgFoldMaterial src={data.imgUrl} alt="fold" />
                <PFoldText>
                  {data.sizeText}
                  <br />
                  {data.nameText}
                </PFoldText>
              </a>
            </div>
          ))}
        </DivFoldCenter>
        <div>
          <InputMaterial type="text" value="https://www.figma.com/file/v" />
          <InputMaterial type="text" value="https://www.figma.com/file/v" />
        </div>
      </DivMaterial>
      <DivMaterial>
        <div>
          <img src={selfi} alt="camera" />
        </div>
        <SpanMaterial>selfie photo with document</SpanMaterial>
        <DivFoldMaterial>
          <a href={imageUrl} download="image.jpeg">
            <ImgFoldMaterial src={fold} alt="fold" />
            <PFoldText>
              64 Kb
              <br /> fjhnfd8hb.txt
            </PFoldText>
          </a>
          <a href={imageUrl} download="image.jpeg">
            <ImgFoldMaterial src={fold} alt="fold" />
            <PFoldText>
              64 Kb
              <br /> fjhnfd8hb.txt
            </PFoldText>
          </a>
        </DivFoldMaterial>
      </DivMaterial>
    </DivMaterialMain>
  );
};
