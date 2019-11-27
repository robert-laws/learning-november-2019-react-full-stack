import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainNav from './navigation/MainNav';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Articles from './pages/Articles';
import Article from './pages/Article';
import NotFound from './pages/NotFound';

import { Layout } from 'antd/es';
import { Row, Col } from 'antd/es';

import './App.scss';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <MainNav />
        </Header>
        <Content style={{ padding: '40px 50px' }}>
          <Row>
            <Col span={12}>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={About} />
                <Route path='/articles' component={Articles} />
                <Route path='/article/:name' component={Article} />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
