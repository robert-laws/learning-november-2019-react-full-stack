import React from 'react';

import HomePage from './pages/HomePage';

import { Layout } from 'antd/es';
import { Row, Col } from 'antd/es';

import './App.scss';

const { Content} = Layout;

function App() {
  return (
    <>
      <Layout>
        <Content style={{ padding: '40px 50px' }}>
          <Row>
            <Col span={12}>
              <HomePage />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default App;
