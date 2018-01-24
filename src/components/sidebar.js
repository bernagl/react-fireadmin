import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSchemas } from '../actions/firebase'
import { Layout, Menu, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout

class Sidebar extends Component {
  componentDidMount() {
    this.props.getSchemas()
  }

  renderSchemas() {
    return this.props.schema.collection.map((schema, key) => {
      return (
        <Menu.Item key={key}>
          <Link to={`/data/${schema.id}`}>
            <Icon type={schema.icon || ''} />
            <span className="nav-text">{schema.name}</span>
          </Link>
        </Menu.Item>
      )
    })
  }
  
  render() {
    console.log(this.props)
    return (
      <Sider
        breakpoint="sm"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          {this.props.schema && this.renderSchemas()}
        </Menu>
      </Sider>
    )
  }
}

const mapDispatchToProps = ({ schema }) => ({ schema })

export default connect(mapDispatchToProps, { getSchemas })(Sidebar)
