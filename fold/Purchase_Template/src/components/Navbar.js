import React from 'react';
import { Layout, Dropdown, Button, Badge } from 'antd';
import { BellOutlined, DownOutlined } from '@ant-design/icons';
import '../App.css';

const { Header } = Layout;

const Navbar = () => {
  // Menu items for Fintech dropdown
  const fintechMenuItems = [
    { key: '1', label: 'Profile' },
    { key: '2', label: 'Settings' },
    { key: '3', label: 'Help' },
  ];

  // Menu items for language dropdown
  const languageMenuItems = [
    { key: 'en', label: 'English' },
    { key: 'es', label: 'Spanish' },
    { key: 'fr', label: 'French' },
  ];

  // Menu items for logout dropdown
  const logoutMenuItems = [
    { key: 'logout', label: 'Logout' },
  ];

  return (
    <Header className="navbar">
      <div className="navbar-left">
        <p className="bill-description">
          <strong>Purchases</strong> A Bill is a document that indicates the amount you owe your vendors.
        </p>
      </div>

      <div className="navbar-right">
        {/* Fintech Company Dropdown */}
        <Dropdown menu={{ items: fintechMenuItems }} trigger={['click']}>
          <a onClick={e => e.preventDefault()} className="company-name">
            Fintech Company <DownOutlined />
          </a>
        </Dropdown>

        {/* Language Dropdown */}
        <Dropdown menu={{ items: languageMenuItems }} trigger={['click']}>
          <a onClick={e => e.preventDefault()} className="language-dropdown">
            English <DownOutlined />
          </a>
        </Dropdown>

        {/* Notifications Bell */}
        <Badge count={3} offset={[0, 0]}>
          <Button
            shape="circle"
            icon={<BellOutlined />}
            className="navbar-btn"
          />
        </Badge>

        {/* Logout Dropdown */}
        <Dropdown menu={{ items: logoutMenuItems }} trigger={['click']}>
          <a onClick={e => e.preventDefault()} className="logout-dropdown">
            Logout <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
