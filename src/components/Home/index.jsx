import React from 'react'
import Header from '../Header'
import CoverPage from './CoverPage'
import Skills from '../Skills'
import Projects from '../Projects'

export default () => {
    return <div className='is-preload'>
        <Header />
        <div id='main'>
            <CoverPage />
            <Skills />
            <Projects />

        </div>
    </div>
}