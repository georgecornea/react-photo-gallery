export const Card = ({ title, src }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={src} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        {/* <p className='card-text'>{title}</p> */}
      </div>
    </div>
  );
};
