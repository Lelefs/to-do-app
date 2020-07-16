import React from 'react';

import If from './if';

export default ({ hide, style, onClick, icon }) => (
  <If test={!hide}>
    <button className={`btn btn-${style}`} onClick={onClick}>
      <i className={`fa fa-${icon}`}></i>
    </button>
  </If>
);
