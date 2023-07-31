import React from 'react';
import PostList from "components/PostList";
import AppLayout from "../components/AppLayout";

function Home() {
	return (
		<AppLayout>
			<PostList/>
		</AppLayout>
	);
}

export default Home;