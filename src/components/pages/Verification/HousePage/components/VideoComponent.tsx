import React from 'react';

const size = { width: '462px', height: '256px' };

type VideoComponentProps = {
  videoId: string;
};

export const VideoComponent: React.FC<VideoComponentProps> = ({ videoId }) => {
  const srcVideo = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div style={{ position: 'relative', marginLeft: '59%', top: '-130px' }}>
      {' '}
      <iframe
        {...size}
        src={srcVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
