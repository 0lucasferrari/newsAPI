import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'; 
import DropdownItem from '../DropdownItem'

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

export default class DropdownMenu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            menuHeight: null,
            activeMenu: 'main'
        };
    }

    calcHeight = (el) => {
        const height = el.offsetHeight;
        this.setState({ menuHeight: height });
    }

    changeActiveMenu = (goToMenu) => {
        this.setState({activeMenu: goToMenu});
    }

    changeCountry = (country) => {
        this.props.handleCountryChange(country);
    }

    changeCategory = (category) => {
        this.props.handleCategoryChange(category);
    }

    render () {
        return (
        <div className="dropdown" style={{height: this.state.menuHeight}}>
            <CSSTransition 
            in={this.state.activeMenu === 'main'} 
            unmountOnExit 
            timeout={500}
            classNames="menu-primary"
            onEnter={this.calcHeight}>
                <div className="menu">
                    <DropdownItem
                        leftIcon={<RightIcon/>}
                        goToMenu="countries"
                        changeActiveMenu={this.changeActiveMenu}>

                            <span className="ml">Selecione o país</span>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<RightIcon/>}
                        goToMenu="categories"
                        changeActiveMenu={this.changeActiveMenu}>
                            <span className="ml">Selecione o assunto</span>
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
            in={this.state.activeMenu === 'countries'} 
            unmountOnExit 
            timeout={500}
            classNames="menu-secondary"
            onEnter={this.calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<LeftIcon/>} goToMenu="main" changeActiveMenu={this.changeActiveMenu}><span className="ml">Voltar</span></DropdownItem>                    
                    <DropdownItem leftIcon={<BrazilIcon/>} country='br' changeCountry={this.changeCountry}><span className="ml">Brasil</span></DropdownItem>
                    <DropdownItem leftIcon={<USAIcon/>} country='us' changeCountry={this.changeCountry}><span className="ml">Estados Unidos</span></DropdownItem>
                    <DropdownItem leftIcon={<CanadaIcon/>} country='ca' changeCountry={this.changeCountry}><span className="ml">Canadá</span></DropdownItem>
                    <DropdownItem leftIcon={<FranceIcon/>} country='fr' changeCountry={this.changeCountry}><span className="ml">França</span></DropdownItem>
                    <DropdownItem leftIcon={<GermanyIcon/>} country='de' changeCountry={this.changeCountry}><span className="ml">Alemanha</span></DropdownItem>
                    <DropdownItem leftIcon={<ItalyIcon/>} country='it' changeCountry={this.changeCountry}><span className="ml">Itália</span></DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition 
            in={this.state.activeMenu === 'categories'} 
            unmountOnExit 
            timeout={500}
            classNames="menu-secondary"
            onEnter={this.calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<LeftIcon/>} goToMenu="main" changeActiveMenu={this.changeActiveMenu}><span className="ml">Voltar</span></DropdownItem>
                    <DropdownItem leftIcon={<BusinessIcon/>} category="business" changeCategory={this.changeCategory}><span className="ml">Negócios</span></DropdownItem>
                    <DropdownItem leftIcon={<GamesIcon/>} category="entertainment" changeCategory={this.changeCategory}><span className="ml">Entretenimento</span></DropdownItem>
                    <DropdownItem leftIcon={<GeneralIcon/>} category="general" changeCategory={this.changeCategory}><span className="ml">Geral</span></DropdownItem>
                    <DropdownItem leftIcon={<HealthIcon/>} category="health" changeCategory={this.changeCategory}><span className="ml">Saúde</span></DropdownItem>
                    <DropdownItem leftIcon={<ScienceIcon/>} category="science" changeCategory={this.changeCategory}><span className="ml">Ciência</span></DropdownItem>
                    <DropdownItem leftIcon={<SportsIcon/>} category="sports" changeCategory={this.changeCategory}><span className="ml">Esportes</span></DropdownItem>
                    <DropdownItem leftIcon={<TechIcon/>} category="technology" changeCategory={this.changeCategory}><span className="ml">Tecnologia</span></DropdownItem>    
                </div>
            </CSSTransition>
        </div>
        )
    }
}
