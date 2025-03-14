import React from "react";
import { IEntry } from "src/interfaces/Items";
import "./popup.scss";

interface PopupProps {
	item: IEntry;
	onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ item, onClose }) => {
	return (
		<div className="popup">
			<div className="popup-content">
				<button className="popup-close" onClick={onClose}>
					X
				</button>
				<h2>{item.title}</h2>
				<p>{item.description}</p>
			</div>
		</div>
	);
};

export default Popup;
