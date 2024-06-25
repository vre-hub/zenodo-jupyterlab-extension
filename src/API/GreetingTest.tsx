import React, { useState } from 'react';

interface Props {
  isTrue: boolean;
}

const GreetingComponent: React.FC<Props> = ({ isTrue }) => {
  const [paragraphContent, setParagraphContent] = useState<string>("");
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  
  const Greet = (value: boolean) => {
    setParagraphContent(String(process.env.KEY));
    setButtonClicked(true);
    isTrue = !isTrue;
    console.log("Value changed to " + String(isTrue));
    return void 0;
  }

  return (
    <div>
      {isTrue ? <p>hi!</p> : null}
      <button onClick={() => Greet(isTrue)}>Update Paragraph</button>
      {buttonClicked && ( // Render paragraph if buttonClicked is true
        <p>{paragraphContent}</p>
     )}
    </div>
  );
};

export default GreetingComponent;