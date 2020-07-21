import React from 'react';
import IconButton from '../template/iconButton';

export default ({
  list,
  handleRemove,
  handleMarkAsDone,
  handleMarkAsPending,
}) => {
  const listRender = list;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>
        {listRender.map(todo => (
          <tr key={todo._id}>
            <td className={todo.done ? 'markedAsDone' : ''}>
              {todo.description}
            </td>
            <td>
              <IconButton
                hide={todo.done}
                style="success"
                icon="check"
                onClick={() => handleMarkAsDone(todo)}
              />
              <IconButton
                hide={!todo.done}
                style="warning"
                icon="undo"
                onClick={() => handleMarkAsPending(todo)}
              />
              <IconButton
                hide={!todo.done}
                style="danger"
                icon="trash-o"
                onClick={() => handleRemove(todo)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
