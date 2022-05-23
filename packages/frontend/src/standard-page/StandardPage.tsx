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
    shouldUnderline: true,
  },
  {
    to: {
      hash: "Plant",
      pathname: "/",
    },
    innerText: "Plant a Tree",
    shouldUnderline: true,
  },
  {
    to: {
      hash: "About",
      pathname: "/",
    },
    innerText: "About",
    shouldUnderline: true,
  },
  {
    to: {
      hash: "Map",
      pathname: "/",
    },
    innerText: "Map",
    shouldUnderline: true,
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