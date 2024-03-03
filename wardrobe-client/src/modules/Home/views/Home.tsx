import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
	const count = useSelector((state: any) => state.counter.count);
	return <div>{count ?? -69}</div>;
};

export default Home;
