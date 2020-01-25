import { useFela } from 'react-fela';

function ContentWrapper({ children }) {
  const { css } = useFela();
  return (
    <div className={css(
      {
        margin: '0 auto',
      },
    )}
    >
      { children }
    </div>
  );
}

export default ContentWrapper;
