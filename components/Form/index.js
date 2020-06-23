import { useFela } from 'react-fela';
import { useState } from 'react';
import NumberBlock from '../NumberBlock';

function handleSubmit(event, cb, error) {
  event.preventDefault();
  const formsLink = event.target[0].value;
  const gaSnippet = event.target[1].value;
  const email = event.target[2].value;
  const formId = formsLink && formsLink.match(/\/forms\/d\/(.*?)\//);
  const gaId = gaSnippet && gaSnippet.match(/id=(.*?)"/);
  if (!formId || !gaId) {
    error('Your Google Form Link or Analytics Snippet is invalid.');
  } else if (!email) {
    error('Please enter an Email Address.');
  } else {
    error('');
    const formData = new FormData(); // eslint-disable-line
    formData.append('email', email);
    fetch('https://getform.io/f/22faaf57-83d2-4464-8156-64ec11f4ca62', {
      method: 'post',
      body: formData,
    });
    cb(`https://gformanalytics.com/form.php?ga_id=${gaId.pop()}&form_id=${formId.pop()}`);
  }
}

function Form() {
  const { css } = useFela();
  const [formLink, setFormLink] = useState('');
  const [error, setError] = useState('');
  return (
    <form onSubmit={(event) => handleSubmit(event, setFormLink, setError)}>
      <div className={css({
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 2rem',
        '@media (max-width: 640px)': {
          flexDirection: 'column',
        },
      })}
      >
        <div className={css({
          display: 'flex',
          flexDirection: 'column',
          '@media (max-width: 640px)': {
            marginBottom: '2rem',
          },
        })}
        >
          <NumberBlock
            background="#FAF2CD"
            color="#EDCD37"
            number="1"
            title="Paste your Google Form Link"
            subtitle="Simply paste your Google Forms link into the text box."
          />
          <textarea
            className={css({
              border: '1px solid #E0E0E0',
              borderRadius: '4px',
              height: '150px',
              marginTop: '1rem',
              padding: '1rem',
            })}
            placeholder="e.g. https://docs.google.com/forms/d/e/1FAIpQLSdXYyeM4wkdDpsxQKQgLLCFIp0-YgcyEn0n7PcfUVdpCW2aCA/viewform?usp=sf_link"
          />
        </div>
        <div className={css({
          display: 'flex',
          flexDirection: 'column',
        })}
        >
          <NumberBlock
            background="#F3F0FF"
            color="#A287FF"
            number="2"
            title="Paste your Google Analytics snippet"
            subtitle="Create a new Google Analytics code and paste the snippet here."
          />
          <textarea
            className={css({
              border: '1px solid #E0E0E0',
              borderRadius: '4px',
              height: '150px',
              marginTop: '1rem',
              padding: '1rem',
            })}
            placeholder={`e.g. <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143621851-2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-143621851-2');
        </script>
        `}
          />
        </div>
      </div>
      <div className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
      >
        <h3 className={css({
          marginTop: '2rem',
        })}
        >
        Get your shareable link
        </h3>
        <input
          className={css({
            margin: '0 0 1rem 0',
            minWidth: '280px',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
          })}
          type="email"
          placeholder="Your Email Address"
        />
        {
        error !== '' && (
          <span>{ error }</span>
        )
      }
        <input
          className={css({
            textTransform: 'uppercase',
            background: '#EDCD37',
            borderRadius: '4px',
            fontSize: '18px',
            color: '#000000',
            textAlign: 'center',
            border: 'none',
            padding: '0.5rem 2rem',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
          })}
          type="submit"
          value="Get my shareable link"
        />
        <span className={css({
          display: 'flex',
          marginTop: '1rem',
        })}
        >
          <img
            className={css({
              width: '16px',
              marginRight: '0.25rem',
            })}
            src="./secure-icon.svg"
            alt="Secure"
          />
        We don&apos;t store any data whatsoever.
        </span>
        { formLink && (
        <div className={css({ width: '100%', padding: '0 2rem' })}>
          <h3>
        Your new form link:
          </h3>
          <input
            className={css({
              width: '100%',
              margin: '0 0 1rem 0',
              minWidth: '280px',
              padding: '0.5rem 1rem',
            })}
            type="text"
            readOnly
            value={formLink}
          />
        </div>
        ) }
      </div>
    </form>
  );
}

export default Form;
