import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDocument, getSchema } from '../actions/firebase'

class Form extends Component {
  constructor(props) {
    super(props)
    this.renderFields = this.renderFields.bind(this)
  }
  componentDidMount() {
    this.getSchemaAndDocument(this.props)
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
    console.log(document)
    return Object.keys(props.document).length > 0 && props.match.params.id
      ? fields.map((field, key) => {
          return (
            <div key={key}>
              <input
                type={field.type}
                placeholder={document[field.key]}
                maxLength={field.max}
                minLength={field.min}
              />
              <span>{field.error}</span>
            </div>
          )
        })
      : fields.map((field, key) => {
          return (
            <div key={key}>
              <input
                type={field.type}
                placeholder={field.name}
                maxLength={field.max}
                minLength={field.min}
              />
              <span>{field.error}</span>
            </div>
          )
        })
  }

  render() {
    const { id, schema } = this.props.match.params
    const { selected } = this.props.schema
    console.log(this.props)
    return Object.keys(selected).length > 0 && id && this.props.document ? (
      <div>
        Form {schema} / {id}
        <form>{this.renderFields()}</form>
      </div>
    ) : Object.keys(selected).length > 0 ? (
      <div>
        <form>{this.renderFields()}</form>
      </div>
    ) : (
      <div>Cargando...</div>
    )
  }
}

const mapDispatchToProps = ({ data: { document }, schema }) => ({
  document,
  schema
})

export default connect(mapDispatchToProps, { getDocument, getSchema })(Form)
