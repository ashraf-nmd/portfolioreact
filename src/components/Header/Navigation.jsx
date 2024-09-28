import React from 'react';

export default () => {
    return <nav id="nav">
        <ul>
            <li><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>
            <li><a href="#skills" id="about-link"><span class="icon solid fa-user">Skills</span></a></li>
            <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Projects</span></a></li>

            {/* <!-- <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li> --> */}
        </ul>
    </nav>
}