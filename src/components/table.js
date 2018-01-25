import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  deleteDocument,
  getCollection,
  getSchema,
  getSchemas
} from '../actions/firebase'
import { Divider, Icon, Table as Datatable, message, Popconfirm } from 'antd'

const { Column, ColumnGroup } = Datatable

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre'
  },
  {
    title: 'Apellido',
    dataIndex: 'apellido',
    key: 'apellido'
  },
  {
    title: 'Edad',
    dataIndex: 'edad',
    key: 'edad'
  }
]

class Table extends Component {
  componentDidMount() {
    this.props.getCollection(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps) {
    newProps.match.params.id !== this.props.match.params.id &&
      (newProps.getCollection(newProps.match.params.id),
      newProps.getSchema(newProps.match.params.id))
  }

  deleteDocument = async id => {
    const response = await this.props.deleteDocument(
      this.props.match.params.id,
      id
    )
    response
      ? message.success('Registro eliminado correctamente')
      : message.error('Ocurrio un error, por favor vuelva a intentarlo')
  }

  render() {
    const { collection } = this.props.data
    const loading = collection.length > 0 ? false : true
    const { params } = this.props.match
    const fields = this.props.schema.selected.fields || null
    console.log(this.props)
    const actions = {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        return this.props.data.collection.length > 0 ? (
          <div>
            <span>
              <Link to={`/form/${params.id}/${record.id}`}>Edit</Link>
            </span>
            <Divider type="vertical" />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.deleteDocument(record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          </div>
        ) : null
      }
    }

    const cols = [...columns, actions]
    return fields ? (
      <Datatable
        columns={fields.map(field => ({
          title: field.name,
          dataIndex: field.key,
          key: field.key
        }))}
        dataSource={collection}
        loading={loading}
      />
    ) : (
      <div>Cargando</div>
    )
  }
}

const mapDispatchToProps = ({ data, schema }) => ({ data, schema })

export default connect(mapDispatchToProps, {
  deleteDocument,
  getCollection,
  getSchema,
  getSchemas
})(Table)
