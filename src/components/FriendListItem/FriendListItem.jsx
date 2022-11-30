import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li className={styles.itemFriend} key={id}>
      <span
        className={isOnline ? styles.statusOnline : styles.statusOffline}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
