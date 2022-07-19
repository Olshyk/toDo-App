import React from 'react';
import PropTypes from 'prop-types';

import './task-filter.css';

function TaskFilter({ filter, name, label, onFilterChange }) {
  TaskFilter.defaultProps = {
    filter: 'all',
    name: 'all',
    label: 'All',
    onFilterChange: () => {},
  };

  TaskFilter.propTypes = {
    filter: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onFilterChange: PropTypes.func,
  };

  return (
    <li>
      <button type="button" className={filter === name ? 'selected' : null} onClick={onFilterChange}>
        {label}
      </button>
    </li>
  );
}

export default TaskFilter;
