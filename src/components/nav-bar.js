import React from 'react';

import './nav-bar.css';

export default function NavBar(props) {
     const link = props.links.map((link, index) => (
        <li key={index}>
           <a href={link.href}>
           		{link.text}
           	</a>
           </li>
          ));
     console.log(props);
        return (
            <div className="navBar">
                <h1>{props.title}</h1>
        		<nav className='navigation-bar-nav'>
        			<ul>
                		{link}
                	</ul>
                </nav>
            </div>
        );
}