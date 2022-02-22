import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import './StandardPage.scss';

export interface IStandardPageProps {
  useTopPadding?: boolean;
  component: JSX.Element;
};

export const StandardPage: React.FC<IStandardPageProps> = ({ component, useTopPadding }) => {
  return (
    <>
      <Header />
      <div className={`standard-page ${useTopPadding ? 'standard-page-top-padding' : ''}`}>
        {component}
      </div>
      <Footer />
    </>
  )
};