import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Image extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    disabled: true,
  }

  state = { disabled: this.props.disabled }

  _hideImage = () => this.setState({ disabled: true })

  _displayImage = () => this.setState({ disabled: false })

  render = () => {
    const { disabled } = this.state

    if (disabled)
      return false

    return (
      <img
        onError={this._hideImage}
        onLoad={this._displayImage}
        {...this.props}
      />
    )
  }
}

export default Image