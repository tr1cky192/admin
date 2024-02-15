import React, { useState } from 'react';
import {
  ButtonGallery,
  DivGallery,
  DivGalleryMain,
  ImgGallery,
  ImgGallerySelected,
} from './Components.styled';

type GalleryComponentProps = {
  photos: string[];
  hasCard: boolean;
};
export const GalleryComponent: React.FC<GalleryComponentProps> = ({ photos, hasCard }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string>(photos[0]);

  const handleClick = (photo: string) => {
    setSelectedPhoto(photo);
  };

  return (
    <DivGalleryMain hasCard={hasCard}>
      <DivGallery hasCard={hasCard}>
        {photos.map(photo => (
          <ButtonGallery
            hasCard={hasCard}
            key={photo}
            type="button"
            onClick={() => handleClick(photo)}
          >
            <ImgGallery
              src={photo}
              alt=" "
              style={{
                position: 'relative',
                zIndex: selectedPhoto === photo ? 1 : 0,
                transition: 'transform 0.3s',
              }}
            />
          </ButtonGallery>
        ))}
      </DivGallery>
      {selectedPhoto && (
        <div>
          <ImgGallerySelected src={selectedPhoto} alt="" />
        </div>
      )}
    </DivGalleryMain>
  );
};
