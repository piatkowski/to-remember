import {useState, useCallback, useEffect} from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //useCallback to prevent recreation of function
    const sendRequest = useCallback(async (requestConfig, callback) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            callback(data);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
        // no external dependencies
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;

const {isLoading, error, sendRequest: fetchData} = useHttp();

useEffect(() => {
    const processData = data => {
        //...
    };
    fetchData(
        {url: 'https://...'},
        processData
    );
}, [fetchData]);
