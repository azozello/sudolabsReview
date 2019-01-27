import React from 'react';
import styled from 'styled-components';
import './dots-extend.scss';

const SurveyTableDot = styled.div`
      position: relative;
      background-color: #3e425a;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.5rem;
      margin: 0.5rem;
      margin-top: ${({First}) => First && '1.2rem'};
      background-color: ${({Selected}) => (Selected) && '#eaeaea'};
`;


const Dots = ({onDotsClick, selected, opened}) => {
    let classAnimationName = '';
    if (opened === 'open') classAnimationName = 'dots-container-down';
    if (opened === 'close') classAnimationName = 'dots-container-up';
    return (
        <div className={'dots-container ' + classAnimationName} onClick={onDotsClick}>
            <SurveyTableDot className={'first'} Selected={selected} First={true}/>
            <SurveyTableDot className={'second'} Selected={selected}/>
            <SurveyTableDot className={'third'} Selected={selected}/>
        </div>
    );
};

export default Dots