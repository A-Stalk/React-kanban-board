import React from 'react';
import css from './layout.module.scss';

const Layout = props => {
  return <div className={css.layout}>{props.children}</div>;
};

export default Layout;
