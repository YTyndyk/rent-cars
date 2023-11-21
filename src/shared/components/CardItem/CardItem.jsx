const CardItem = ({ ...props }) => {
	const { img, model, year, address, rentalPrice, make } = props;

	return (
		<>
			<li>
				<button type="button">heart</button>

				<img src={img} alt={`${make} ${model}`} width="274" height="auto" />
				<div>{address}</div>
				<div>{rentalPrice}</div>
				<div>{year}</div>
			</li>
		</>
	);
};
export default CardItem;
