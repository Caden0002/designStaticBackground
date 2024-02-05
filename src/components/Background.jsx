// components/Background.jsx

import React from 'react';
import background from '/plantbackground.png';

const Background = ({ children }) => (
    <div className="relative top-0 left-0 w-screen h-screen overflow-y-scroll" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'repeat' }}>
        {/* Content */}
        <div className="relative z-10">
            {children}
        </div>
    </div>
);

export default Background;
