import React from 'react';
import styled from 'styled-components';

const CircleIconWrapper = styled.div`
        margin-top: 0.65rem;
        margin-left: 1.5rem;
        max-width: 2.5rem;
        border-radius: 1.25rem;
        padding: 2px;
        border: 2px solid #03f3ff;
`;

const CircleIcon = ({icon}) => (
    <div>
        <CircleIconWrapper>
            <img src={icon} alt={'Alternative text'} className="img-fluid rounded-circle"/>
        </CircleIconWrapper>
    </div>
);


export default CircleIcon