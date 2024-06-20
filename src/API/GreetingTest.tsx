import React from 'react';

interface Props {
  isTrue: boolean;
}

const GreetingComponent: React.FC<Props> = ({ isTrue }) => {
  return (
    <>
      {isTrue ? <p>hi!</p> : null}
    </>
  );
};

export default GreetingComponent;