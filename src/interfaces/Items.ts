export interface IResponse {
	total: number;
	entries: IEntry[];
}

export interface IEntry {
	title: string;
	images: IImages;
	description: string;
	programType: string;
	releaseYear: number;
}

interface IImages {
	"Poster Art": IPosterArt;
}

interface IPosterArt {
	url: string;
	width: number;
	height: number;
}
