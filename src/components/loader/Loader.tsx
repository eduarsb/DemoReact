import { useSelector } from "react-redux";
import { RootState } from "@features/store";
import "./loader.scss"
const Loader = () => {
	const appStore = useSelector((state: RootState) => state.app);

	return (
		<>
			{appStore.loading && (
				<div className="loader">
					<div>
						<div className="spinner-border text-light" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Loader;
