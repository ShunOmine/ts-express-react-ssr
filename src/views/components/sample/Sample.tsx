import React from 'react';

interface SampleProps {
  compiler: string;
  framework: string;
  library: string;
}

export const Sample: React.FC<SampleProps> = props => {
  return (
    <h1>
      Hello from {props.compiler} and {props.framework} and {props.library}
    </h1>
  )
};
