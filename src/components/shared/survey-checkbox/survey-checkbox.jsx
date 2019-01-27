import React from 'react';
import styled from 'styled-components';


const SurveyCheckboxCheck = styled.div`
    background-color: ${({Checked}) => Checked && '#9f5bff'};
    border-radius: 0.1rem;
    height: 100%;
    width: 100%;
`;

const SurveyCheckboxDiv = styled.div`
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 0.25rem;
      border: 1px dashed #9f5bff;
      padding: 0.25rem;
      margin-top: ${({Margin}) => Margin && '1.8rem'};
      margin-right: 0.75rem;
      margin-left: auto;
`;

const SurveyCheckbox = ({margin, checked, onCheckboxSelect}) => (
    <div>
        <SurveyCheckboxDiv onClick={onCheckboxSelect} Margin={margin}>
            <SurveyCheckboxCheck Checked={checked}/>
        </SurveyCheckboxDiv>
    </div>
);

export default SurveyCheckbox