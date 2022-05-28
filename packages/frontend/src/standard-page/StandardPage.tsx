import { Footer } from '../footer/Footer';
import { Header, ILinkComponentProps, INavLinkInfo } from '../header/Header';
import './StandardPage.scss';

export interface IStandardPageProps {
  /**
   * Whether to put padding between header and main content
   */
  useTopPadding?: boolean;
  /**
   * Component representing main content
   */
  component: JSX.Element;
};

const HomeNavLinks: INavLinkInfo<ILinkComponentProps>[] = [
  {
    to: "/#top",
    innerText: "Register a Tree",
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

/**
 * Component for a standard looking page on site (header, main content, footer)
 */
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