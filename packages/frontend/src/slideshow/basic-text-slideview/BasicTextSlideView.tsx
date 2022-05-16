import './BasicTextSlideView.scss';

interface IProps {
  text: string;
}

export const BasicTextSlideView = ({ text }: IProps) => {
  return (
    <div className="slideshow-basic-text">{text}</div>
  );
};
