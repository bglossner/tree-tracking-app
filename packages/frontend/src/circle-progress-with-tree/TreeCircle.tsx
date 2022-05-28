import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import ProgressProvider from "../util/ProgressProvider";
import "./TreeCircle.scss";

interface IProps {
  /**
   * Delay before animation starts in milliseconds
   */
  delay?: number;
  /**
   * Percent of circle to fill in (must be between 0 and 1)
   */
  ratio: number;
  /**
   * Duration of animation to complete filling the circle up to @ratio
   */
  animationDuration: number;
  /**
   * Source (either URL or base64 string) to for the inner tree image
   */
  treeImageSrc: string;
}

/**
 * Component for displaying circular progress bar with a tree inside of it
 */
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
