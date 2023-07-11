import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/message/greetingSlice';

const Greeting = () => {
  const {
    greeting, isFetched, isLoading, hasError,
  } = useSelector((store) => store.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchGreeting());
    }
  }, [dispatch, isFetched]);

  if (isLoading) return <h1 className="blue">... Is Loading</h1>;
  if (hasError) return <h1 className="red">An error has ocured</h1>;

  return <h1 className="green">{greeting}</h1>;
};

export default Greeting;
