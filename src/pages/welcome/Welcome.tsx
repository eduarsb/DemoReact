import CardMenu from "@components/card-menu/CardMenu";
import TitleBar from "@components/title-bar/TitleBar";
import { ICardMenu } from "src/interfaces/Menus";

const Welcome = () => {

    const options: ICardMenu[] = [{
        title: "Series",
        subtitle: "Popular Series",
        link: "/series"
    }, {
        title: "Movies",
        subtitle: "Popular Movies",
        link: "/movies"
    }]


	return (
		<div>
			<TitleBar title="Popular Titles" />
			<div className="grid py-3 px-5">
				{
                    options.map((item: ICardMenu) => (<CardMenu key={item.title} {...item}/>))
                }
			</div>
		</div>
	);
};

export default Welcome;
