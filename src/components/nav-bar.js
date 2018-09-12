import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Navigations = [
  { displayName: 'Clock', path: '/clock' },
  { displayName: 'Weather', path: '/weather' },
];

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { condition: true };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ condition: !this.state.condition });
  }

  render() {
    console.log(this.props.currentPath);
    return (
      <nav className="navbar tk-navbar navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={this.handleClick} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="navbar-brand">RCnW</div>
          </div>
          <div className={this.state.condition ? 'navbar-collapsed' : ''}>
            <ul className="nav navbar-nav navbar-left">
              {
                Navigations.map(
                  (nav, i) => (
                    <li key={i}>
                      <Link to={nav.path} className={nav.path == this.props.currentPath ? 'tk-nav-active' : ''}>{nav.displayName}</Link>
                    </li>
                  ),
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
