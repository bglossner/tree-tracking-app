import React from "react";

interface IProps {
  valueStart: number;
  valueEnd: number;
  delay?: number;
  children: any;
}

// Taken from https://codesandbox.io/s/0zk372m7l?file=/ProgressProvider.js:0-434
const ProgressProvider = ({ valueStart, valueEnd, delay, children }: IProps) => {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    let timeout: NodeJS.Timeout | null;

    if (delay) {
      timeout = setTimeout(() => {
        console.log('timeout done');
        setValue(valueEnd);
      }, delay * 1000);
    } else {
      setValue(valueEnd);
    }

    return () => { timeout && clearTimeout(timeout) };
  }, [valueEnd, delay]);

  return children(value);
};
export default ProgressProvider;
