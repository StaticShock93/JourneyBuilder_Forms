import {useQuery} from '@tanstack/react-query';

export default function useFetch<T>(url: string) {
	const fetchData = async (): Promise<T> => {
		const res = await fetch(url, {
			headers: {
				Authorization: 'Bearer dummy-token', // or leave empty if specified
			},
		});
		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}
		return res.json();
	};
	return useQuery<T, Error>({queryKey: [url], queryFn: fetchData});
}
