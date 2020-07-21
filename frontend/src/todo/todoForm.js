import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default ({
  handleAdd,
  description,
  handleChange,
  handleSearch,
  handleClear,
}) => {
  const keyHandler = e => {
    if (e.key === 'Enter') {
      e.shiftKey ? handleSearch() : handleAdd();
    } else if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onChange={handleChange}
          onKeyUp={keyHandler}
          value={description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton style="primary" icon="plus" onClick={handleAdd} />
        <IconButton style="info" icon="search" onClick={handleSearch} />
        <IconButton style="default" icon="close" onClick={handleClear} />
      </Grid>
    </div>
  );
};
