import { Card } from './Card';

export const CardList = ({ photos }) => {
  return (
    <div className='row'>
      {/* {Array.apply(null, { length: 9 }).map(() => ( */}
      {photos.map((src) => (
        <div className='col mb-5'>
          <Card src={src} />
        </div>
      ))}
    </div>
  );
};
