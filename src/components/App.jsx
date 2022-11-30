import React from 'react';

import { Section } from './Section/Section';

import { Profile } from './Profile/Profile';
import user from './data/user.json';

import { Statistics } from './Statistics/Statistics';
import statistics from './data/statistics.json';

import { FriendList } from './FriendList/FriendList';
import friends from './data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

const { username, tag, location, avatar, stats } = user;
const { followers, likes, views } = stats;

export const App = () => {
  return (
    <Section>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        likes={likes}
        views={views}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Section>
  );
};
