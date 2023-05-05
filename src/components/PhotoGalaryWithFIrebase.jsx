import { useEffect, useState } from 'react';
import { CardList } from './CardList';
import { Navbar } from './Navbar';
import UploadForm from './UploadForm';

const data = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200',
];

export const PhotoGalaryWithFirebase = () => {
  const [photos, setPhotos] = useState(data);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [input, setInput] = useState({ title: null, file: null, path: null });
  const [numberOfImages, setNumberOfImages] = useState(0);

  const handleOnChange = (e) => {
    setInput(e.target.value);
    if (e.target.name === 'file') {
      setInput({
        ...input,
        file: e.target.files[0],
        path: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setInput({ ...input, title: e.target.value });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setPhotos([input.path, ...photos]);
    setInput({ title: null, file: null, path: null });
    setIsCollapsed(false);
  };

  useEffect(() => {
    setNumberOfImages(photos.length);
  }, [photos]);

  return (
    <>
      <Navbar />
      <div className='container text-center mt-5'>
        <button
          className='btn btn-success float-end'
          onClick={() => setIsCollapsed((prevState) => !prevState)}
        >
          {isCollapsed ? 'Maybe Later' : 'Add New Photo'}
        </button>
        <div className='clearfix mb-4'></div>
        {isCollapsed && (
          <UploadForm
            input={input}
            isVisible={isCollapsed}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          />
        )}
        <h1>Photo Gallery</h1>
        <p>
          You have {numberOfImages} image{numberOfImages === 1 ? '' : 's'} in
          your gallery
        </p>
        <CardList photos={photos} />
      </div>
    </>
  );
};
