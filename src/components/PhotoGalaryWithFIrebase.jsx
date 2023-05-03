import { Card } from './Card';
import { Navbar } from './Navbar';

export const PhotoGalaryWithFirebase = () => {
  return (
    <>
      <Navbar />
      <div className='container text-center mt-5'>
        <h1>Gallery</h1>
        <div className='row'>
          {Array.apply(null, { length: 9 }).map(() => (
            <div className='col mb-5'>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
