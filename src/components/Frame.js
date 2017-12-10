import React from 'react';

function frame({
    id,
    src,
    className,
    children
}) {
    const frameStyle = {
        backgroundImage: `url(${src})`
    };

    const frameClassName = `frame ${id}${className ? ` ${className}` : ''}`;

    return (
        <div className={frameClassName} style={frameStyle}>
            {children}
        </div>
    );
}

export default frame;
