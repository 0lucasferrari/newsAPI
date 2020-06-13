import React from 'react';
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'
import DropdownMenu from './components/DropdownMenu';
import { ReactComponent as TickIcon } from './assets/images/icons/android/svg/022-tick-1.svg'
import { ReactComponent as DownArrow } from './assets/images/icons/android/svg/066-down-arrow-2.svg'
import { ReactComponent as ChatBallon } from './assets/images/icons/android/svg/123-chat-balloon.svg'

function App() {
  return (
    <Navbar>
      <NavItem icon={<TickIcon />}>

      </NavItem>
      <NavItem icon={<ChatBallon />}>

      </NavItem>
      <NavItem icon={<DownArrow />}>
        <DropdownMenu>

        </DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

export default App;
