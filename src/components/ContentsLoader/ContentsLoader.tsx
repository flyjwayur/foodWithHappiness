import React from 'react';
import ContentLoader from 'react-content-loader';

const ContentsLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="48" y="8" rx="3" ry="3" width="400" height="3200" />
  </ContentLoader>
);

export default ContentsLoader;
