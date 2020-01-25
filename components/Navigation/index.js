import { useFela } from 'react-fela';

function Navigation({ items }) {
  const { css } = useFela();
  return (
    <nav>
      <ul className={css(
        {
          display: 'flex',
          listStyle: 'none',
          margin: '0',
          padding: '0',
        },
      )}
      >
        {
        items.map((element) => (
          <li className={css(
            {
              ':not(:last-child)': {
                marginRight: '1rem',
              },
            },
          )}
          >
            <a
              className={css(
                {
                  color: 'white',
                  textDecoration: 'none',
                },
              )}
              href={element.link}
            >
              { element.title }
            </a>
          </li>
        ))
      }
      </ul>
    </nav>
  );
}

export default Navigation;
