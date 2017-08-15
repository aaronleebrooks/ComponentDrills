import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav-bar'
import AddressBook from './components/address-book';

import './index.css';

const links = [{
        text: 'Courses',
        href: 'http://www.thinkful.com/courses/'
    }, {
        text: 'Mentorship',
        href: 'http://www.thinkful.com/mentorship/'
    }];

ReactDOM.render(
  // <NavBar title="Thinkful" links={links} />,
  <AddressBook />,
  document.getElementById('root')
);
