/**
 *  Card Component - Created by Olivier Pham Dang
 */

import React from 'react';

function card ({children}) {
    return (
        <div className="card">
            <div className="card-content">
                {children}
            </div>
        </div>
    );
}

export default card;

