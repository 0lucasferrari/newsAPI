import React from 'react';
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'
import DropdownMenu from './components/DropdownMenu';
import Main from './pages/main'
import { ReactComponent as DownArrow } from './assets/images/icons/android/svg/066-down-arrow-2.svg'

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon={<DownArrow />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <Main />
    </>
  );
}

export default App;
