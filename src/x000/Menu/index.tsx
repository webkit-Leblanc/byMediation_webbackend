/**
 * ```
 * 李鸿章 <poodll@163.com>
 * 7/2/2019, 11:09:45 AM
 * ```
 * doc comment for the file goes here
 */

/** Happy Coding */
import React, { useState, useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Spin, Layout, Menu, Icon } from 'antd';
import MenView from '_view/MenuView';
import withPath from '_base/withPath';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function MenuView({
  history,
  location: { pathname },
}: RouteComponentProps) {
  const [collapsed, setcollapsed] = useState(false);
  useEffect(() => {
    document.title = 'Title';
  }, []);

  return (
    <Sider
      collapsed={collapsed}
      onCollapse={c => {
        setcollapsed(c);
      }}
      width={200}
      className="sider-light"
      breakpoint="lg"
      style={{ background: '#fff' }}
      collapsible>
      <MenView
        history={history}
        pathname={pathname}
        menudata={[
          {
            key: 'RC01001000',
            name: '商机管理',
            // icon: 'setting',
            children: [
              {
                key: 'RC01001000',
                name: '任务管理',
                // icon: 'setting',
                path: '/agent-member/taskmanage',
              },
              {
                key: 'RC01001200',
                name: '呼叫中心',
                // icon: 'setting',
                path: '/agent-member/callcenter',
              },
              {
                key: 'RC01001300',
                name: '在线咨询',
                // icon: 'setting',
                path: '/agent-member/online-im',
              },
              {
                key: 'RC01001400',
                name: '我的客户',
                // icon: 'setting',
                path: '/agent-member/mykefu',
              },
              {
                key: 'RC01001500',
                name: '我的服务单',
                // icon: 'setting',
                path: '/agent-member/servicemanage',
              },
            ],
          },
          {
            key: 'RC01002000',
            name: '商机调度',
            // icon: 'setting',
            children: [
              {
                key: 'RC01002100',
                name: '调度中心',
                // icon: 'setting',
                path: '/agent-member/dispatchcenter',
              },
              {
                key: 'RC01002200',
                name: '调度设置',
                // icon: 'setting',
                path: '/agent-member/dispatchsetting',
              },
              {
                key: 'RC01002300',
                name: '商机总览',
                path: '/agent-member/businessOverview',
              },
            ],
          },
        ]}
      />
    </Sider>
  );
}
