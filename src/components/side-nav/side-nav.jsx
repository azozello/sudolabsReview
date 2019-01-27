import React from 'react';
import './side-nav.scss';
import SideNavLink from "./side-nav-item/side-nav-link";
import {NavLink} from 'react-router-dom';

class SideNav extends React.Component {
    state = {
        links: [
            {
                id: 1,
                link: 'Dashboard'
            },
            {
                id: 2,
                link: 'Campaigns'
            },
            {
                id: 3,
                link: 'Workflows'
            },
            {
                id: 4,
                link: 'Templates'
            },
            {
                id: 5,
                link: 'Stats'
            },
            {
                id: 6,
                link: 'Contacts'
            },
            {
                id: 7,
                link: 'Surveys'
            },
        ]
    };

    render() {
        return (
            <div className="col-1 side-nav pt-3">
                <div className="row">
                    {
                        this.state.links.map(linkItem =>
                            <NavLink key={linkItem.id} className={'side-nav-link'}
                                     activeClassName={'side-nav-active'}
                                     to={'/' + linkItem.link}>
                                <div className={'col-12'}>
                                    <SideNavLink key={linkItem.id} link={linkItem.link}/>
                                </div>
                            </NavLink>
                        )}
                </div>
            </div>
        );
    }
}

export default SideNav