import React from 'react'
import { CSSTransition } from 'react-transition-group'; 
import { useState } from 'react'
// Basic Icons
import { ReactComponent as RightIcon } from "../../assets/images/icons/android/svg/093-right-arrow-2.svg"
import { ReactComponent as LeftIcon } from "../../assets/images/icons/android/svg/170-left-arrow-1.svg"

// Country Icons
import { ReactComponent as BrazilIcon } from "../../assets/images/icons/countries/svg/brazil.svg"
import { ReactComponent as USAIcon } from "../../assets/images/icons/countries/svg/united-states-of-america.svg"
import { ReactComponent as CanadaIcon } from "../../assets/images/icons/countries/svg/canada.svg"
import { ReactComponent as FranceIcon } from "../../assets/images/icons/countries/svg/france.svg"
import { ReactComponent as GermanyIcon } from "../../assets/images/icons/countries/svg/germany.svg"
import { ReactComponent as ItalyIcon } from "../../assets/images/icons/countries/svg/italy.svg"

// Category Icons

import { ReactComponent as BusinessIcon } from "../../assets/images/icons/android/svg/100-businessman.svg"
import { ReactComponent as GamesIcon } from "../../assets/images/icons/android/svg/078-game-control.svg"
import { ReactComponent as GeneralIcon } from "../../assets/images/icons/android/svg/050-empty.svg"
import { ReactComponent as HealthIcon } from "../../assets/images/icons/android/svg/107-first-aid.svg"
import { ReactComponent as ScienceIcon } from "../../assets/images/icons/android/svg/014-electron.svg"
import { ReactComponent as SportsIcon } from "../../assets/images/icons/android/svg/090-soccer.svg"
import { ReactComponent as TechIcon } from "../../assets/images/icons/android/svg/009-plugs.svg"

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
                    <DropdownItem
                        leftIcon={<RightIcon/>}
                        goToMenu="countries">

                            <span className="ml">Selecione o país</span>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<RightIcon/>}
                        goToMenu="categories">
                            <span className="ml">Selecione o assunto</span>
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
            in={activeMenu === 'countries'} 
            unmountOnExit 
            timeout={500}
            classNames="menu-secondary"
            onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<LeftIcon/>} goToMenu="main"><span className="ml">Voltar</span></DropdownItem>                    
                    <DropdownItem leftIcon={<BrazilIcon/>}><span className="ml">Brasil</span></DropdownItem>
                    <DropdownItem leftIcon={<USAIcon/>}><span className="ml">Estados Unidos</span></DropdownItem>
                    <DropdownItem leftIcon={<CanadaIcon/>}><span className="ml">Canadá</span></DropdownItem>
                    <DropdownItem leftIcon={<FranceIcon/>}><span className="ml">França</span></DropdownItem>
                    <DropdownItem leftIcon={<GermanyIcon/>}><span className="ml">Alemanha</span></DropdownItem>
                    <DropdownItem leftIcon={<ItalyIcon/>}><span className="ml">Itália</span></DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
            in={activeMenu === 'categories'} 
            unmountOnExit 
            timeout={500}
            classNames="menu-secondary"
            onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<LeftIcon/>} goToMenu="main"><span className="ml">Voltar</span></DropdownItem>
                    <DropdownItem leftIcon={<BusinessIcon/>}><span className="ml">Negócios</span></DropdownItem>
                    <DropdownItem leftIcon={<GamesIcon/>}><span className="ml">Entretenimento</span></DropdownItem>
                    <DropdownItem leftIcon={<GeneralIcon/>}><span className="ml">Geral</span></DropdownItem>
                    <DropdownItem leftIcon={<HealthIcon/>}><span className="ml">Saúde</span></DropdownItem>
                    <DropdownItem leftIcon={<ScienceIcon/>}><span className="ml">Ciência</span></DropdownItem>
                    <DropdownItem leftIcon={<SportsIcon/>}><span className="ml">Esportes</span></DropdownItem>
                    <DropdownItem leftIcon={<TechIcon/>}><span className="ml">Tecnologia</span></DropdownItem>    
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu;