import React from 'react';
import GreetingComponent from '../API/GreetingTest';

interface Props {
    isTrue: boolean;
  }

const SearchWidget: React.FC<Props> = ({isTrue}) => {
    return (
        <div className='searchWidget'>
            <p>Hello</p>
            <GreetingComponent isTrue={isTrue} />
        </div>
    );
};

export default SearchWidget;
