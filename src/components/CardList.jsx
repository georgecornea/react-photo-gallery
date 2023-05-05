import { Card } from './Card';

export const CardList = ({ photos }) => {
  return (
    <div className='row'>
      {/* {Array.apply(null, { length: 9 }).map(() => ( */}
      {photos.map((photo) => (
        <div className='col mb-5' key={photo.path}>
          <Card title={photo.title} src={photo.path} />
        </div>
      ))}
    </div>
  );
};
