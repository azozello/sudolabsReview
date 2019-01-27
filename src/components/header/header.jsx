import React from 'react';
import './header.scss';

function Header() {
    return (
        <div className="col-12 header">
            <div className="row h-100 align-items-center">
                <div className="col-auto">
                    <p className="mb-0 header-text-disabled">
                        Help
                    </p>
                </div>
                <div className="col-auto">
                    <p className="mb-0 header-text-disabled">
                        Clever store
                    </p>
                </div>
                <div className="col-auto">
                    <p className="mb-0 header-text-disabled">
                        Other
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header