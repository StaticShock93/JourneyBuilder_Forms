// App.tsx
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import useFetch from './useFetch';
import './App.css';
import Forms from './Forms';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Forms />
		</QueryClientProvider>
	);
}

export default App;



// function UserProfile() {
// 	type User = {
// 		id: number;
// 		name: string;
// 		username: string;
// 		email: string;
// 		address: {
// 			street: string;
// 			suite: string;
// 			city: string;
// 			zipcode: string;
// 			geo: {
// 				lat: string;
// 				lng: string;
// 			};
// 		};
// 	};

// 	const {
// 		data: users,
// 		error,
// 		isLoading,
// 		isError,
// 	} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

// 	if (isLoading) return <div>Loading users...</div>;

// 	if (isError) return <div>Error: {error?.message}</div>;

// 	return (
// 		<>
// 			{users?.map((user: User) => (
// 				<h1 key={user.id}>Hello, {user.name}</h1>
// 			))}
// 		</>
// 	);
// }
