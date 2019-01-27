import React from 'react';
import styled from 'styled-components';


const NewSurveyButtonBtn = styled.button`
  background-image: linear-gradient(to bottom, #e365f9a1 25%, #9f5bffe3 65%);
  color: #eaeaea;
  padding: 0.1rem 1.5rem;
  border-radius: 0.375rem;
  border: 0;
  &:hover {
    background-image: linear-gradient(to bottom, #9f5bffe3 25%, #e365f9a1 65%);
  }
`;

const NewSurveyButton = ({name}) => (
    <NewSurveyButtonBtn>
        {name}
    </NewSurveyButtonBtn>
);

export default NewSurveyButton