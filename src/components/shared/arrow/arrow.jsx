import React from 'react';
import styled from 'styled-components';


const TopArrow = styled.div`
    position: relative;
    top: -0.25rem;
    display: inline-block;
    width: 0;
    height: 0;
    border-bottom: 5px solid #e365f9;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
`;

const BotArrow = styled.div`
    position: relative;
    display: inline-block;
    top: 0.1rem;
    width: 0;
    height: 0;
    border-bottom: 5px solid transparent;
    border-top: 5px solid #e365f9;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
`;

const Arrow = ({side}) => (
    <React.Fragment>
        {side && side === true ? <TopArrow/> : <BotArrow/>}
    </React.Fragment>
);

export default Arrow