import React from 'react';
import { Todo } from '../../types/Todo';
import classNames from 'classnames';

type Props = {
  todos: Todo[];
  selected: Todo | '';
  onSelect: (todo: Todo | '') => void;
};

export const TodoList: React.FC<Props> = ({ todos, selected, onSelect }) => {
  const handleSelect = (todo: Todo) => () => {
    onSelect(todo);
  };

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => {
          const { completed, id, title } = todo;

          return (
            <tr data-cy="todo" className="" key={id}>
              <td className="is-vcentered">{id}</td>
              <td className="is-vcentered">
                {completed && (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )}
              </td>
              <td className="is-vcentered is-expanded">
                <p
                  className={classNames({
                    'has-text-danger': !completed,
                    'has-text-success': completed,
                  })}
                >
                  {title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={handleSelect(todo)}
                >
                  <span className="icon">
                    {selected && selected.id === id && (
                      <i className="far fa-eye-slash" />
                    )}

                    {selected &&
                      typeof selected !== 'string' &&
                      selected.id !== id && <i className="far fa-eye" />}

                    {!selected && <i className="far fa-eye" />}
                  </span>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
