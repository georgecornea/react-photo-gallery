import { PhotoGallery } from './PhotoGallery';
import Provider from './state/context';

export const PhotoGalleryProject = () => {
  return (
    <>
      <Provider>
        <PhotoGallery />
      </Provider>
    </>
  );
};
