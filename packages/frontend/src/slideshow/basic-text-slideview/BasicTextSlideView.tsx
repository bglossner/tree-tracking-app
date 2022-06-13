import './BasicTextSlideView.scss';

interface IProps {
  text: string;
}

/**
 * The basic view can only take a string 'text' as an argument, which is displayed
 * at the bottom of the slide
 */
export const BasicTextSlideView = ({ text }: IProps) => {
  return (
    <div className="slideshow-basic-text">{text}</div>
  );
};
