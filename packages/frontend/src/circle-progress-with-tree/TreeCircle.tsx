import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import ProgressProvider from "../util/ProgressProvider";
import "./TreeCircle.scss";

interface IProps {
  delay?: number;
  ratio: number;
  animationDuration: number;
  treeImageSrc: string;
}

export const TreeCircle = ({
  delay, ratio, animationDuration, treeImageSrc,
}: IProps) => {
  return (
    <div className="progress-container">
      <ProgressProvider
        delay={delay}
        valueStart={0}
        valueEnd={ratio * 100}
      >
        {(value: number) => (
          <CircularProgressbarWithChildren
            className="tree-planted-progress-bar"
            value={value}
            styles={buildStyles({
              strokeLinecap: "butt", // flat edges
              pathTransitionDuration: animationDuration,
            })}
          >
            <img
              style={{ width: "95%" }}
              className="tree-outline-CirclePath"
              src={treeImageSrc}
              alt="Tree Outline"
            />
          </CircularProgressbarWithChildren>
        )}
      </ProgressProvider>
    </div>
  );
};
