import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Require
data: [{name, id}]
handleOnClick: function()
active: id
*/

const menuTabs = 'sd-btn tk-btn';
const activeButton = ' tk-active';

export default class TabButtons extends React.Component {
  constructor(props) {
    super(props);

    this.renderButtons = this.renderButtons.bind(this);
  }
  addClassName(id) {
    // check active button
    let active = '';
    this.props.active == id ? active = activeButton : active = '';
    return menuTabs + active;
  }
  calcButtonLength() {
    const width = 100 / this.props.data.length;
    return { width: `${width}%` };
  }
  renderButtons(data) {
    this.calcButtonLength();
    return (
      <button key={data.id} className={this.addClassName(data.id)} onClick={() => this.props.handleOnClick(data.id, this.props.data)} style={this.calcButtonLength()}>{data.name}</button>
    );
  }

  render() {
    return (
      <div>
        {this.props.data.map(this.renderButtons)}
      </div>
    );
  }
}
