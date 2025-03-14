import { ICardMenu } from "src/interfaces/Menus";
import "./card-menu.scss";

const CardMenu = ({ ...item }: ICardMenu) => {
	return (
		<div className="g-col-2">
			<a className="nolink" href={item.link}>
				<div className="app-card-menu">
					<div className="app-card-menu__image">
						<h3>{item.title}</h3>
					</div>
					<p>{item.subtitle}</p>
				</div>
			</a>
		</div>
	);
};

export default CardMenu;
