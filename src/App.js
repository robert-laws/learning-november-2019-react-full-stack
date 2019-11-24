import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import { Layout } from 'antd/es';
import { Row, Col } from 'antd/es';

import './App.scss';

const { Content} = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Content style={{ padding: '40px 50px' }}>
          <Row>
            <Col span={12}>
              <Route exact path='/' component={HomePage} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
