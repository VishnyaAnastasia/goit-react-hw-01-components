import React from 'react';
import PropTypes from 'prop-types';

import styles from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="User avatar" className={styles.avatar} />
          <div className={styles.infobox}>
            <p className={styles.name}>{username}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
          </div>
        </div>

        <ul className={styles.stats}>
          <li className={styles.item}>
            <span className={styles.label}>Followers:</span>
            <span className={styles.quantity}>{followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Views:</span>
            <span className={styles.quantity}>{views}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Likes:</span>
            <span className={styles.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
