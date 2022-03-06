import './Footer.scss';
import calpolyLogo from '../assets/images/calpoly-logo.png';

export const Footer = () => {
  return (
    <footer>
      <div className="outer-div">
        <div className="inner-div">
          <div className="ufei-container">
            <p>
              Urban Forest Ecosystems Institute<br />
              California Polytechnic State University<br />
              San Luis Obispo, CA 93407<br />
            </p>
            <a id="privacy-notice" href="https://accessibility.calpoly.edu/website-accessibility-statement">
              Privacy Notice and Web Accessibility Statement
            </a>
          </div>
          <div className="logo-container">
            <img id="calpoly-footer-logo" loading='lazy' alt='cal poly logo' height={455} width={1764} src={calpolyLogo} />
          </div>
        </div>
      </div>
      {/* <p>For any questions about a tree or edits to be made, please contact Dr. Jenn Yost at jyost@calpoly.edu or (805)-756-5869</p> */}
    </footer>
  );
};