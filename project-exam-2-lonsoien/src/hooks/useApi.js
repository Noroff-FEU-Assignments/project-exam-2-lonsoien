import { useEffect, useState } from "react";

function useApi(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchApi() {
			try {
				const response = await fetch(url);
				const json = await response.json();
				setData(json);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		fetchApi();
	}, [url]);

	return { data, loading, error };
}

export default useApi;