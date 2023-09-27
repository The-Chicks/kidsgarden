import { useEffect, useState } from "react";

import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
	timeout: 3000,
	withCredentials: true,
});

const errorHandler = (e: AxiosError) => Promise.reject(e);

axiosInstance.interceptors.request.use(
	(config) => {
		const accessToken = "token";
		if (accessToken) {
			config.headers.Authorization = accessToken;
		}
		return config;
	},
	(error) => errorHandler(error),
);

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => errorHandler(error),
);

export const useAxios = (axiosParams: AxiosRequestConfig) => {
	const [response, setResponse] = useState<AxiosResponse>();
	const [error, setError] = useState<AxiosError | unknown>();
	const [isLoading, setIsLoading] = useState(false);
	const [trigger, setTrigger] = useState(0);

	const refetch = () => {
		setResponse(response);
		setError(error);
		setIsLoading(true);
		setTrigger(Date.now());
	};

	const axiosData = async (params: AxiosRequestConfig) => {
		try {
			setIsLoading(true);
			const result = await axiosInstance.request({ ...params });
			setResponse(result);
		} catch (error: AxiosError | unknown) {
			setError(error);
			setIsLoading(false);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		axiosData(axiosParams);
	}, [trigger]);

	return {
		response,
		error,
		isLoading,
		refetch,
	};
};
