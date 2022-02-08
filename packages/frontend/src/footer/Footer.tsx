import './Footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className='logos'>
        <img alt='cal poly logo' height={44} width={158} src='/calpoly-logo.png' />
        <img alt='city of slo logo' height={100} width={100} src='/city-of-slo-logo.png' />
        <img alt='UFEI logo' height={41} width={175} src='/ufei-logo.png' />
      </div>
      <div id='left-white-border'></div>
      <p>For any questions about a tree or edits to be made, please contact Dr. Jenn Yost at jyost@calpoly.edu or (805)-756-5869</p>
    </footer>
  );
};