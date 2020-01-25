import { useFela } from 'react-fela';

function NumberBlock({
  number, background, color, title, subtitle,
}) {
  const { css } = useFela();
  return (
    <div className={css({
      display: 'flex',
    })}
    >
      <div className={css({
        background,
        borderRadius: '19px',
        fontSize: '36px',
        color,
        letterSpacing: '1px',
        textAlign: 'center',
        padding: '1rem 1.75rem',
        fontFamily: 'Roboto',
      })}
      >
        { number }
      </div>
      <div className={css({
        display: 'flex',
        flexDirection: 'column',
        margin: '0 0 0 1rem',
        justifyContent: 'center',
      })}
      >
        <h3 className={css({
          margin: '0 0 0.25rem',
        })}
        >
          { title }
        </h3>
        <p>{ subtitle }</p>
      </div>
    </div>
  );
}

export default NumberBlock;
