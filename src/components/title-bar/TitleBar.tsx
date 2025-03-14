import './title-bar.scss';

interface TitleBarProps {
	title: string;
}
const TitleBar = ({ title }: TitleBarProps) => {
	return (
		<div className="title-bar">
			<h1>{title}</h1>
		</div>
	);
};

export default TitleBar;
