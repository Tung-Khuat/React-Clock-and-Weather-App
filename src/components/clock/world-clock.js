import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeDisplay from './time-display';
import AddTimezone from './add-timezone';
import { removeTimeDisplay, clearAllDisplay } from '../../actions/index';

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAdding: false, isEditing: false };

    this.handleOnAddClick = this.handleOnAddClick.bind(this);
    this.handleOnEditClick = this.handleOnEditClick.bind(this);
  }
  renderTimeDisplay() {
    const displayList = this.props.ClockStores.displayList;
    if (this.state.isAdding) {
      return <AddTimezone cback={() => { this.setState({ ...this.state, isAdding: !this.state.isAdding }); }} />;
    }
    return (
      displayList.map(
        (item, i) => (
          <div key={i} className="time-display">
            <span className={`lh3 ${this.state.isEditing ? '' : 'hidden'}`} onClick={() => this.props.removeTimeDisplay(i)}>
              <i className="fa fa-times-circle d-icon" />
            </span>
            <span className="absorbing">
              <strong>{item.textDisplay}</strong>
              <p className="light-text">{item.offset} Hours offset</p>
            </span>
            <span>
              <TimeDisplay offset={item.offset} />
            </span>
          </div>
        ),
      )
    );
  }
  handleOnAddClick() {
    this.setState({ ...this.state, isAdding: !this.state.isAdding });
  }
  handleOnEditClick() {
    this.setState({ ...this.state, isEditing: !this.state.isEditing });
  }
  render() {
    return (
      <div className="card-display">
        <button className={`sd-btn tk-btn m5 ${this.state.isEditing ? 'hidden' : ''}`} onClick={this.handleOnAddClick}>{this.state.isAdding ? 'Cancel' : 'Add'}</button>
        <button className={`sd-btn btn-danger m5 ${this.state.isEditing ? '' : 'hidden'}`} onClick={this.props.clearAllDisplay}>Clear All</button>
        <button className={`sd-btn tk-btn m5 ${this.state.isAdding ? 'hidden' : ''}`} onClick={this.handleOnEditClick}>{this.state.isEditing ? 'Done' : 'Edit'}</button>
        {this.renderTimeDisplay()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ClockStores: state.ClockStores };
}

export default connect(mapStateToProps, { removeTimeDisplay, clearAllDisplay })(WorldClock);
