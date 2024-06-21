import React from 'react';
//import GreetingComponent from '../API/GreetingTest';

interface Props {
    isTrue: boolean;
  }

const SearchWidget: React.FC<Props> = ({isTrue}) => {
    return (
        <div className='searchWidget'>
            <p>This is the Search Panel!!</p>
            
        </div>
    );
};
//<GreetingComponent isTrue={isTrue} />
export default SearchWidget;
