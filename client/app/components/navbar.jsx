import React from 'react';

//onKeyPress should invoke search function


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    },
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  
  
  handleKeyUp(e) {
    if (e.keyCode === 13) { 
      this.props.search(this.state.searchText); 
    }
  }
  
  handleChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }
  
  render() {
    return (<nav>
      <a href="/">KUYiK</a>
      <input onKeyUp={this.handleKeyUp}
        onChange={this.handleChange}
        value="Search">
      </input>
      <a href="#">Sign In </a>
      <a href="#">Sign Up</a>
    </nav>);
  }
  
}

export default NavBar;