import TitleBar from "@components/title-bar/TitleBar";
import { useEffect } from "react";
import useHttpClient from "@hooks/useHttpClient";
import { IEntry, IResponse } from "src/interfaces/Items";
import { useDispatch, useSelector } from "react-redux";
import { setSeries } from "@features/app/appSlice";
import { RootState } from "@features/store";
import CardItem from "@components/card-item/CardItem";

const Series = () => {
	const { httpClient } = useHttpClient();
	const dispatch = useDispatch();
	const series = useSelector((state: RootState) => state.app.series);

	useEffect(() => {
		httpClient({
			method: "GET",
			route: "https://api.npoint.io/546fd85e8651aa8e648a",
		}).then((response: IResponse) => {
			const series = response.entries.filter(
				(entry: IEntry) =>
					entry.programType === "series" && entry.releaseYear >= 2010
			);
			dispatch(setSeries(series));
		});
	}, []);

	return (
		<div>
			<TitleBar title="Popular Series" />
			<div className="grid py-3 px-5">
				{series.map((serie: IEntry) => (
					<CardItem key={serie.title} {...serie} />
				))}
			</div>
		</div>
	);
};

export default Series;
