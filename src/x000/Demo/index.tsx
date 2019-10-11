/**
 * ```
 * 柯礼钦 <kelq@hugeinfo.com.cn>
 * 10/9/2019, 3:03:31 PM
 * ```
 * doc comment for the file goes here
 */

/** Happy Coding */
import React, { useState, useEffect } from 'react';

import { Spin } from 'antd';
import withPath from '_base/withPath';
//import Component from '_view/Component';
import { getData } from './fetch';

export default withPath('/agent-member/taskmanage', { page: '4' })(
  ({ history, match: { params } }) => {
    const loading = false;

    return (
      <Spin spinning={loading}>
        <div></div>
      </Spin>
    );
  }
);
