/**
 * ```
 * 李鸿章 <poodll@163.com>
 * 7/1/2019, 4:13:34 PM
 * ```
 * doc comment for the file goes here
 */

/** Happy Coding */
import React, { createContext, PureComponent, ReactNode } from 'react';
import { userContext } from '_fetch/auth';
import fetch from './fetch';
import { message } from 'antd';
export enum Userflag {
  LOADING = -1,
  UNKNOWN = 0,
  KONOWN = 1,
}

export interface Fetch {
  userflag: Userflag;
  userName: string;
  username: string;
  avatar: string;
}

// ##################### start
interface Model extends Fetch {
  popupView: ReactNode;
}
const defaultContextModel: Model = {
  popupView: null,
  userflag: -1,
  userName: '',
  username: '',
  avatar: '',
};
// ##################### end

interface Props {
  children(context: ContextState): React.ReactNode;
}

export interface ContextState extends Model {
  setContextState: PureComponent<Props, Model>['setState'];
}

export const context = createContext<ContextState>(
  defaultContextModel as ContextState
);

const { Provider } = context;

export default class Context extends PureComponent<Props, ContextState> {
  constructor(props) {
    super(props);
    this.state = {
      setContextState: this.setState.bind(this),
      ...defaultContextModel,
    };
  }
  componentDidMount() {
    // 此处做登录状态的判断
    userContext()
      .then(context => {
        this.setState({ userflag: Userflag.KONOWN });
      })
      .catch(err => {
        console.log(err);
        this.setState({ userflag: Userflag.UNKNOWN });
      });
  }
  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children(this.state)}</Provider>;
  }
}
