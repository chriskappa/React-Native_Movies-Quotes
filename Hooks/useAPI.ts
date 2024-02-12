import axiosRetry from 'axios-retry';
import { useState, useCallback } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { API_URL } from '../utils/constants';

enum Response {
    SUCCESS = 201
}


// Retry mechanism for the requests
axiosRetry(axios, {
    retries: 5,
    retryCondition: (error) => axiosRetry.isNetworkOrIdempotentRequestError(error) || (error.response?.status ?? 0) >= 500,
});

const useAPI = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const QuoteAPI = axios.create({
        baseURL: API_URL,
        timeout: 5000,
    });

    const addQuoteToDB = useCallback(async (id: string, user: string, quote: string): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try {
            const response = await QuoteAPI.post('', { uID: id, user, quote });
            return response.status === Response.SUCCESS;
        } catch (error) {
            setError('Failed to add quote');
            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchQuotes = useCallback(async (cancelToken?: CancelTokenSource): Promise<any> => {
        setLoading(true);
        setError(null);
        try {
            const response = await QuoteAPI.get('', { cancelToken: cancelToken?.token });
            return response.data?.reverse(); // To keep same order for the quotes
        } catch (error) {
            if (axios.isCancel(error)) {
                setError('Request canceled');
            } else {
                setError('Failed to fetch quotes');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return { addQuoteToDB, fetchQuotes, loading, error };
};

export default useAPI;
