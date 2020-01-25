import { useFela } from 'react-fela';

function Tile({ image, alt }) {
  const { css } = useFela();
  return (
    <div className={css({
      background: '#FFFFFF',
      boxShadow: '0 2px 15px 0 rgba(0,0,0,0.16)',
      borderRadius: '20px',
      margin: '1rem 2rem',
      width: '200px',
      height: '220px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    })}
    >
      <img src={image} alt={alt} />
    </div>
  );
}

export default Tile;
