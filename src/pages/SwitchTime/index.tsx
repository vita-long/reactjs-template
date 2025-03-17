import * as React from 'react';
import styles from './switch.module.css';

const SwitchTime = () => {

  return (
    <div className={styles.custom}>
      <div>根据时间戳获得当前日期</div>
      <div>根据时间戳(秒)获得当前日期</div>
    </div>
  )
}

export default SwitchTime;