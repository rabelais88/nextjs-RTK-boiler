import React from 'react';
import { connect, useSelector, shallowEqual } from 'react-redux';

import { tick, getUser, tickB } from '../stores/action';

const useUserStore = () => useSelector((state) => state.user, shallowEqual);

const indexPage = ({ dispatch }) => {
  const { light, userId, user } = useUserStore();
  function onClick(e) {
    e.preventDefault();
    dispatch(tick(!light));
  }
  function onGetUser(e) {
    e.preventDefault();
    dispatch(getUser(1));
  }
  function onClickB(e) {
    e.preventDefault();
    dispatch(tickB(!light));
  }
  return (
    <div>
      <h1>hello world!</h1>
      <p>{light.toString()}</p>
      <p>{userId}</p>
      <p>{JSON.stringify(user)}</p>
      <button onClick={onClick}>tick</button>
      <button onClick={onClickB}>tick B</button>
      <button onClick={onGetUser}>getUser</button>
    </div>
  );
};

export default connect((state) => state)(indexPage);
