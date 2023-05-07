import { useContext, useEffect, useReducer } from 'react';
import { CardList } from './components/CardList';
import { Navbar } from './components/Navbar';
import UploadForm from './components/UploadForm';
import { Context } from './state/context';
// import Firestore from './firebase/firestore.js';
// const { writeDoc, readDocs } = Firestore;

export const PhotoGallery = () => {
  //const value = useContext(Context);
  const { dispatcher, state, loadPhotos } = useContext(Context);

  // useEffect(() => {
  //   readDocs().then((data) => dispatcher({ type: 'addPhotos', payload: data }));
  // }, [state.photos]);

  useEffect(() => {
    loadPhotos();
  });

  const handleOnChange = (e) =>
    dispatcher({ type: 'setInput', payload: { value: e } });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    writeDoc(state.input, 'photos').then(console.log);
    dispatcher({ type: 'addPhoto', payload: state.input });
    dispatcher({ type: 'setIsCollapsed', payload: { bool: false } });
  };

  useEffect(() => {
    dispatcher({ type: 'countImages' });
  }, [state.photos]);

  return (
    <>
      <Navbar />
      <div className='container text-center mt-5'>
        <button
          className='btn btn-success float-end'
          onClick={() =>
            dispatcher({
              type: 'setIsCollapsed',
              payload: { bool: !state.isCollapsed },
            })
          }
        >
          {state.isCollapsed ? 'Maybe Later' : 'Add New Photo'}
        </button>
        <div className='clearfix mb-4'></div>
        {state.isCollapsed && (
          <UploadForm
            input={state.input}
            isVisible={state.isCollapsed}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          />
        )}
        <h1>Photo Gallery</h1>
        <p>
          You have {state.numberOfImages} image
          {state.numberOfImages === 1 ? '' : 's'} in your gallery
        </p>
        <CardList photos={state.photos} />
      </div>
    </>
  );
};
