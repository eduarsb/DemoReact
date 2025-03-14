import axios, {
	AxiosError,
	AxiosHeaderValue,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";
import { useDispatch } from "react-redux";
import { setLoading } from "@features/app/appSlice";


interface IRequest {
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
	route: string;
	body?: any; // Allow any type for the body
	headers?: { [key: string]: AxiosHeaderValue };
	params?: { [key: string]: any };
	withoutToken?: boolean;
	useLoader?: boolean;
}

const useHttpClient = () => {
	const dispatch = useDispatch();

	const axiosConfig: AxiosRequestConfig = {
		headers: {
			"Content-Type": "application/json;charset=UTF-8",
			"Access-Control-Allow-Origin": "*",
			Accept: "application/json",
		},
		withCredentials: false,
		responseType: "json",
		maxContentLength: 2000,
		maxBodyLength: 2000,
		maxRedirects: 0,
		socketPath: null,
		timeout: 10000,
		method: "",
		data: null,
	};

	const axiosInstance: AxiosInstance = axios.create(axiosConfig);

	axiosInstance.interceptors.request.use(
		async (config: InternalAxiosRequestConfig) => {
			dispatch(setLoading(true));
			return config;
		},
		(error: AxiosError) => {
			return Promise.reject(error);
		}
	);

	axiosInstance.interceptors.response.use(
		(response: AxiosResponse) => {
			dispatch(setLoading(false));
			return response;
		},
		(error: AxiosError) => {
			dispatch(setLoading(false));
			return Promise.reject(error);
		}
	);


	const httpClient = async (objectRequest: IRequest): Promise<any> => {

		try {
			let response: any;
			switch (objectRequest.method) {
				case "GET":
					response = await axiosInstance.get(objectRequest.route, {
						headers: { ...objectRequest.headers },
						params: { ...objectRequest.params },
					});
					break;
			}
			return Promise.resolve(response.data);
		} catch (errorAxios: any) {
			return Promise.reject(errorAxios);
		}
	};

	return { httpClient };
};

export default useHttpClient;
