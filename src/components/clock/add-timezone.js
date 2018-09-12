import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timezone } from '../../../utils/timezone';
import { addTimeDisplay } from '../../actions/index';

class AddTimezone extends React.Component {
  renderDropdownItem() {
    return (
      timezone.map(
        (zone, i) => (
          <div className="light-underline" key={i} onClick={() => { this.props.addTimeDisplay(zone.offset, zone.value); this.props.cback(); }} value={zone.offset}>{zone.text}</div>
        ),
      )
    );
  }
  render() {
    return (
      <div>
        {this.renderDropdownItem()}
      </div>
    );
  }
}

export default connect(null, { addTimeDisplay })(AddTimezone);
