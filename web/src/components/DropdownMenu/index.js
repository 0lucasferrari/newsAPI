import React from 'react'
import { CSSTransition } from 'react-transition-group'; 
import { useState } from 'react'
import { ReactComponent as RightIcon } from "../../assets/images/icons/android/svg/093-right-arrow-2.svg"
import { ReactComponent as LeftIcon } from "../../assets/images/icons/android/svg/170-left-arrow-1.svg"
import { ReactComponent as SteeringIcon } from "../../assets/images/icons/android/svg/089-steering.svg"
import './styles.css'

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{height: menuHeight}}>
            <CSSTransition 
            in={activeMenu === 'main'} 
            unmountOnExit 
            timeout={500}
            classNames="menu-primary"
            onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                        <DropdownItem
                            leftIcon={<RightIcon/>}
                            rightIcon={<SteeringIcon/>}
                            goToMenu="settings">
                                First Menu
                    </DropdownItem>
                    <DropdownItem
                            leftIcon={<RightIcon/>}
                            rightIcon={<SteeringIcon/>}
                            goToMenu="animals">Second Menu</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
            in={activeMenu === 'settings'} 
            unmountOnExit 
            timeout={500}
            classNames="menu-secondary"
            onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<LeftIcon/>} goToMenu="main">Voltar</DropdownItem>
                    <DropdownItem>This is the first menu</DropdownItem>
                    <DropdownItem>First Menu</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
            in={activeMenu === 'animals'} 
            unmountOnExit 
            timeout={500}
            classNames="menu-secondary"
            onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<LeftIcon/>} goToMenu="main">Voltar</DropdownItem>
                    <DropdownItem>This is the second menu</DropdownItem>
                    <DropdownItem>Second Menu</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu;