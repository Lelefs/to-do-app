import React from 'react';

import If from './if';

export default ({ hide, style, onClick, icon }) => (
  <If test={!hide}>
    <button type="button" className={`btn btn-${style}`} onClick={onClick}>
      <i className={`fa fa-${icon}`} />
    </button>
  </If>
);
