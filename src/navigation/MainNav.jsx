import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const MainNav = () => {
  return (
    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
      <Menu.Item key='1'>
        <Link to='/'>
          Home Page
        </Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/about'>
          About
        </Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link to='/articles'>
          Articles
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default MainNav;