import React from 'react';
import styled from 'styled-components';


const SideNavLinkText = styled.p`
        margin-top: 0.7rem;
        margin-bottom: 0.8rem;
`;

class App extends React.Component {
    render() {
        return (
            <SideNavLinkText>
                {this.props.link}
            </SideNavLinkText>
        )
    }
}

export default App