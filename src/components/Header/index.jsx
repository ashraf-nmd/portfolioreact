import React from 'react';
import SelfDetailsMini from './SelfDetailsMini';
import Navigation from './Navigation';
import HeaderBottom from './HeaderBottom';

export default () => {
    return <div id="header">
        <div className='top'>
            <SelfDetailsMini />
            <Navigation />
        </div>
        <HeaderBottom />
    </div>
}