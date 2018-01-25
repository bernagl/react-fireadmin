import React, { Component } from 'react'
import { withFormsy } from 'formsy-react'
import { Form, Icon, Input as Field } from 'antd'
const { Item } = Form

class Input extends Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    this.props.setValue(event.currentTarget.value)
  }

  render() {
    const isValid = this.props.getErrorMessage()
    const { icon, placeholder, type } = this.props
    return (
      <Item
        validateStatus={isValid ? 'error' : ''}
        help={isValid ? isValid : ''}
      >
        <Field
          placeholder={placeholder}
          type={type || 'text'}
          value={this.props.getValue()}
          onChange={this.handleInput}
          prefix={
            icon ? (
              <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
            ) : (
              ''
            )
          }
        />
      </Item>
    )
  }
}

export default withFormsy(Input)
