import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './StandardPage.scss';

export const StandardPage: React.FC = ({children}) => {
  return (
    <>
      <Header />
      <div className="standard-page">
        {children}
      </div>
      <Footer />
    </>
  )
};