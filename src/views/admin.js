import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Sidebar } from '../components'
import AdminNavigation from '../router'
const { Header, Content, Footer, Sider } = Layout
class Admin extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sidebar />
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <AdminNavigation />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Admin
