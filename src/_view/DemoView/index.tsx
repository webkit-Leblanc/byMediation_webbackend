/**
 * ```
 * 柯礼钦 <kelq@hugeinfo.com.cn>
 * 10/9/2019, 3:00:26 PM
 * ```
 * doc comment for the file goes here
 */

/** Happy Coding */
import React, { ReactNode, ReactEventHandler } from 'react';
// import { Link } from 'react-router-dom';
// import { Icon } from 'antd';
// import chunk from 'lodash/chunk';
// import { tree } from '_util';

import './style.scss';

export interface DemoViewProps {
  children: ReactNode;
  onClick: ReactEventHandler<HTMLDivElement>;
}

export default function DemoView({ children, onClick }: DemoViewProps) {
  return (
    <div className="demo-view-main" onClick={onClick}>
      {children}
    </div>
  );
}
