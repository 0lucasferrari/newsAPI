import React, { Component } from 'react';
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'
import DropdownMenu from './components/DropdownMenu';
import Main from './pages/main'
import { ReactComponent as DownArrow } from './assets/images/icons/android/svg/066-down-arrow-2.svg'

export default class App extends Component {

  constructor () {
    super();
    this.state = {
      country: 'br',
      category: 'general'
    };
  }

  handleCountryChange = (country) => {
    this.setState({country: country}, () => console.log(this.state));
  }

  handleCategoryChange = (category) => {
    this.setState({category: category}, () => console.log(this.state));
  }

  render () {
    return (
      <>
        <Navbar>
          <NavItem icon={<DownArrow />}>
            <DropdownMenu handleCountryChange={this.handleCountryChange} handleCategoryChange={this.handleCategoryChange} />
          </NavItem>
        </Navbar>
        <Main country={this.state.country} category={this.state.category} />
      </>
    );
  }
  
}