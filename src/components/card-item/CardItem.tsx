import { IEntry } from "src/interfaces/Items";
import "./card-item.scss";
import Popup from "@components/popup/Popup";
import { useState } from "react";

const CardItem = ({ ...item }: IEntry) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleCardClick = () => {
		setIsPopupOpen(true);
	};

	const handleClosePopup = () => {
		setIsPopupOpen(false);
	};

	return (
		<div className="g-col-2">
			<div className="app-card-item" onClick={handleCardClick}>
				<div className="app-card-item__image">
					<img src={item.images["Poster Art"].url} alt={item.title} />
				</div>
				<p>{item.title}</p>
			</div>
			{isPopupOpen && <Popup item={item} onClose={handleClosePopup} />}
		</div>
	);
};

export default CardItem;
