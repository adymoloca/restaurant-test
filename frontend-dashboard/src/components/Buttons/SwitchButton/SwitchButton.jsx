import React from 'react';
import './SwitchButton.css';

class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: null,
    };
  }

  componentWillMount() {
    this.setState({ isChecked: this.props.isChecked });
  }

  render() {
    return (
        <label>
          <input
            ref="switch"
            checked={this.state.isChecked}
            onChange={this._handleChange}
            className="switch"
            type="checkbox"
          />
          <div>
            <div></div>
          </div>
        </label>
    );
  }

  _handleChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }
}

export default Switch;
