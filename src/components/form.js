import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getDocument,
  getSchema,
  updateDocument,
  createDocument
} from '../actions/firebase'
import Formsy from 'formsy-react'
import { Button, Col, Divider, Form, Icon, Layout, message, Row } from 'antd'
import { Input } from '../components'
const { Item } = Form
const { Content } = Layout

class FormData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      button: true
    }
    this.submit = this.submit.bind(this)
    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.renderFields = this.renderFields.bind(this)
  }

  componentDidMount() {
    this.getSchemaAndDocument(this.props)
  }

  async submit(model) {
    const { schema, id } = this.props.match.params
    this.setState({ loading: true })
    console.log(model)
    const response = (await id)
      ? this.props.updateDocument(id, model, schema)
      : this.props.createDocument(model, schema)

    response
      ? message.success('Datos guardados correctamente')
      : message.error('Ocurrió un error, por favor vuelve a intentarlo')
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  getSchemaAndDocument(props) {
    const { id, schema } = props.match.params
    props.getSchema(schema)
    id && props.getDocument({ id, schema })
  }

  renderFields() {
    const { fields } = this.props.schema.selected
    const { props } = this
    const { document } = props
    return Object.keys(props.document).length > 0 && props.match.params.id
      ? fields.map((field, key) => {
          return (
            <Input
              placeholder={field.name}
              value={document[field.key]}
              type={field.type}
              name={field.key}
              validations={field.validations}
              validationError={field.error}
              required={field.required}
            />
          )
        })
      : fields.map((field, key) => {
          return (
            <Input
              placeholder={field.name}
              type={field.type}
              name={field.key}
              validations={field.validations}
              validationError={field.error}
              required={field.required}
            />
          )
        })
  }

  render() {
    const { id, schema } = this.props.match.params
    const { selected } = this.props.schema
    return Object.keys(selected).length > 0 ? (
      <div>
        <Formsy
          onValidSubmit={this.submit}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
        >
          <form>{this.renderFields()}</form>
          <Button
            type="primary"
            htmlType="submit"
            loading={this.state.loading}
            disabled={!this.state.canSubmit}
            className="fw"
          >
            Guardar
          </Button>
        </Formsy>
      </div>
    ) : (
      <div>Cargando</div>
    )
  }
}

const mapDispatchToProps = ({ data: { document }, schema }) => ({
  document,
  schema
})

export default connect(mapDispatchToProps, {
  createDocument,
  getDocument,
  getSchema,
  updateDocument
})(FormData)
