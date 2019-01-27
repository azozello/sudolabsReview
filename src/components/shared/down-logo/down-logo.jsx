import React from 'react';
import './down-logo.scss';

const DownLogo = ({logo}) => (
    <div className="down-logo">
        <img src={logo} alt={'Down logo'} className="img-fluid rounded-circle"/>
    </div>
);

export default DownLogo