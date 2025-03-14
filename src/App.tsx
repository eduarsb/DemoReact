import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import { store } from "@features/store";
import { Provider } from "react-redux";
import Plantilla from "@layouts/Plantilla";
import Welcome from "@pages/welcome/Welcome";
import Series from "@pages/series/Series";
import Loader from "@components/loader/Loader";
import Movies from "@pages/movies/Movies";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Plantilla />,
			children: [
				{ path: "/", element: <Welcome /> },
				{ path: "/series", element: <Series /> },
				{ path: "/movies", element: <Movies /> },
			],
		},
		{
			path: "*",
			element: <Navigate to="/" />,
		},
	]);

	return (
		<>
			<Provider store={store}>
				<Loader />
				<RouterProvider router={router} />
			</Provider>
		</>
	);
}

export default App;
