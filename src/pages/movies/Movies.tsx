import TitleBar from "@components/title-bar/TitleBar";
import { useEffect } from "react";
import useHttpClient from "@hooks/useHttpClient";
import { IEntry, IResponse } from "src/interfaces/Items";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "@features/app/appSlice";
import { RootState } from "@features/store";
import CardItem from "@components/card-item/CardItem";

const Movies = () => {
	const { httpClient } = useHttpClient();
	const dispatch = useDispatch();
	const movies = useSelector((state: RootState) => state.app.movies);

	useEffect(() => {
		httpClient({
			method: "GET",
			route: "https://api.npoint.io/546fd85e8651aa8e648a",
		}).then((response: IResponse) => {
			const movies = response.entries.filter(
				(entry: IEntry) =>
					entry.programType === "movie" && entry.releaseYear >= 2010
			);
			dispatch(setMovies(movies));
		});
	}, []);

	return (
		<div>
			<TitleBar title="Popular Movies" />
			<div className="grid py-3 px-5">
				{movies.map((serie: IEntry) => (
					<CardItem key={serie.title} {...serie} />
				))}
			</div>
		</div>
	);
};

export default Movies;
