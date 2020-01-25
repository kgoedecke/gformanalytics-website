import { useFela } from 'react-fela';
import Navigation from '../Navigation';
import Tile from '../Tile';

function Header() {
  const { css } = useFela();
  return (
    <header className={css({
      background: `url('./header-background.svg') no-repeat center bottom,
      linear-gradient(24deg, #FF4163 0%, #FF4640 100%)`,
      backgroundSize: '100%',
      minHeight: '400px',
      margin: '0 auto',
      paddingBottom: '15%',

    })}
    >
      <div className={css({
        width: 1240,
        maxWidth: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem',
        '@media (max-width: 640px)': {
          flexDirection: 'column',
          alignItems: 'center',
        },
      })}
      >
        <a
          className={css(
            {
              textDecoration: 'none',
              color: 'white',
              fontSize: '2rem',
            },
          )}
          href="/"
        >
GFormAnalytics
        </a>
        <Navigation items={
        [
          {
            title: 'Support',
            link: 'mailto:support@gformanalytics.com',
          },
        ]
      }
        />
      </div>
      <div className={css({
        width: '1240px',
        margin: '0 auto',
        maxWidth: '100%',
        '@media (max-width: 640px)': {
          justifyContent: 'center',
        },
      })}
      >
        <h1 className={css({
          color: 'white',
          textAlign: 'center',
          padding: '0 2rem',
        })}
        >
Add Google Anaytics to Google Forms with 1 Click!
        </h1>
        <div className={css({
          display: 'flex',
          justifyContent: 'center',
          '@media (max-width: 640px)': {
            flexDirection: 'column',
            alignItems: 'center',
          },
        })}
        >
          <Tile image="./google-forms-logo.svg" alt="Google Forms" />
          <img src="./plus-icon.svg" alt="+" />
          <Tile image="./google-analytics-logo.svg" alt="Google Analytics" />
        </div>
      </div>
    </header>
  );
}

export default Header;
