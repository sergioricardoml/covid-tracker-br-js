import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import styles from './StatePicker.module.css';

const StatePicker = () => {
  
  const history = useHistory();
  
  function handlePageChange(value) {
    if (value) {
      history.push(`/estados`)
    }
    return false;
  }
  
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={e => handlePageChange(e.target.value)}>
        <option value="">Brasil</option>
        <option value="estados">Visualizar por Estados</option>
      </NativeSelect>
    </FormControl>
  )
}

export default StatePicker;