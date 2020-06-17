import React, { Component } from 'react';
import '../DropdownMenu/styles.css';

export default class DropdownItem extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <a href="#" className="menu-item" 
            onClick={() => 
            {
                if (this.props.goToMenu) {
                    this.props.changeActiveMenu(this.props.goToMenu)
                } else if (this.props.country) {
                    this.props.changeCountry(this.props.country)
                } else if (this.props.category) {
                    this.props.changeCategory(this.props.category)
                }
            }
                }>
                <span className="icon-button">{this.props.leftIcon}</span>
                {this.props.children}

                <span className="icon-right">{this.props.rightIcon}</span>
            </a>
        )
    }
}