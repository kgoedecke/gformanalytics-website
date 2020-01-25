import { useFela } from 'react-fela';
import Header from '../components/Header';
import ContentWrapper from '../components/ContentWrapper';
import Form from '../components/Form';
import Footer from '../components/Footer';

function HomePage() {
  const { css } = useFela();

  return (
    <ContentWrapper>
      <Header />
      <div className={css({
        margin: '0 auto',
        width: 1240,
        maxWidth: '100%',
        marginTop: '-8%',
      })}
      >
        <Form submitUrl="/" />
      </div>
      <div className={css({
        margin: '0 auto',
        width: 1240,
        maxWidth: '100%',
        padding: '0 2rem',
      })}
      />
      <Footer />
    </ContentWrapper>
  );
}

export default HomePage;
