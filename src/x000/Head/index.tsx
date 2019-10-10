/**
 * ```
 * 李鸿章 <poodll@163.com>
 * 7/2/2019, 11:09:49 AM
 * ```
 * doc comment for the file goes here
 */

/** Happy Coding */
import React, { useState, useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Layout, Menu, Dropdown, Icon, Row, Col } from 'antd';
import withPath from '_base/withPath';
//import Component from '_view/Component';
import { context } from '_base/Context';
import { userLogout } from '_fetch/auth';

import { getData } from './fetch';
const { SubMenu } = Menu;

export default withPath('/x000/head', {})(function Head({
  history,
  match: { params },
}) {
  const loading = true;
  const { setContextState } = useContext(context);

  useEffect(() => {
    document.title = 'Title';
  }, []);

  function userLogoutFun() {
    userLogout().then(a => {
      setContextState({
        userflag: 0,
      });
    });
  }

  return (
    <Layout.Header
      className="-glob-box-shadow"
      style={{
        height: '85px',
        display: 'flex',
        padding: '0',
        backgroundColor: 'white',
      }}>
      <Row type="flex" align="middle" justify="end" style={{ width: '100%' }}>
        <Col>
          <span
            style={{ padding: '0 20px', cursor: 'pointer' }}
            onClick={userLogoutFun}>
            退出
          </span>
        </Col>
      </Row>
    </Layout.Header>
  );
});
