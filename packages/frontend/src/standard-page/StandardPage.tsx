import { Footer } from '../footer/Footer';
import { Header, ILinkComponentProps, INavLinkInfo } from '../header/Header';
import './StandardPage.scss';

export interface IStandardPageProps {
  useTopPadding?: boolean;
  component: JSX.Element;
};

const HomeNavLinks: INavLinkInfo<ILinkComponentProps>[] = [
  {
    to: "/#top",
    innerText: "Get Involved",
  },
  {
    to: {
      hash: "About",
      pathname: "/",
    },
    innerText: "About",
  },
  {
    to: {
      hash: "Map",
      pathname: "/",
    },
    innerText: "Map",
  },
];

export const StandardPage: React.FC<IStandardPageProps> = ({ component, useTopPadding }) => {
  return (
    <>
      <Header navbarLinks={HomeNavLinks} />
      <div className={`standard-page ${useTopPadding ? 'standard-page-top-padding' : ''}`}>
        {component}
      </div>
      <Footer />
    </>
  )
};