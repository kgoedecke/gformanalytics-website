import { useFela } from 'react-fela';

function Footer() {
  const { css } = useFela();
  return (
    <div className={css({
      background: '#F8F8F8',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '3rem',
    })}
    >
      <div className={css({
        margin: '0 auto',
        width: 1240,
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 2rem',
        '@media (max-width: 640px)': {
          flexDirection: 'column',
        },
      })}
      >
        <p>
        GFormAnalytics
          <br />
        A product by HaveALook UG
          <br />
        Salzaeckerstr. 132B
          <br />
        70567 Stuttgart
          <br />
        Germany
        </p>
        <p>Copyright 2020 - HaveALook UG</p>
      </div>
    </div>
  );
}

export default Footer;
