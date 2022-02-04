import { Footer } from '../footer/Footer';
import './StandardPage.scss';

export const StandardPage: React.FC = ({children}) => {
  return (
    <>
      <div className="standard-page">
        {children}
      </div>
      <Footer />
    </>
  )
};