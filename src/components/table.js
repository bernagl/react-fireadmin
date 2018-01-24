import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCollection, getSchemas } from '../actions/firebase'
import { Divider, Icon, Table as Datatable, Popconfirm } from 'antd'

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
      newProps.getCollection(newProps.match.params.id)
  }

  render() {
    const { collection } = this.props.data
    const loading = collection.length > 0 ? false : true

    const actions = {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        console.log(this.props)
        return this.props.data.collection.length > 0 ? (
          <div>
            <span>
              <Link to={`/form/${this.props.match.params.id}/${record.id}`}>
                Edit
              </Link>
            </span>
            <Divider type="vertical" />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => console.log(record)}
            >
              <a>Delete</a>
            </Popconfirm>
          </div>
        ) : null
      }
    }

    const cols = [...columns, actions]
    return (
      <Datatable columns={cols} dataSource={collection} loading={loading} />
    )
  }
}

const mapDispatchToProps = ({ data, schema }) => ({ data, schema })

export default connect(mapDispatchToProps, { getCollection, getSchemas })(Table)
