import styles from "./cardItem.module.scss";
const CardItem = ({ ...props }) => {
	const {
		id,
		year,
		make,
		model,
		type,
		img,
		functionalities,
		rentalPrice,
		rentalCompany,
		address,
		favorite,
	} = props;

	return (
		<>
			<li className={styles.item}>
				<button type="button">heart</button>

				<img src={img} alt={`${make} ${model}`} width="274" height="268" />
				<div>
					<div>
						<span>{make} </span>
						<span>{model} </span>
						<span>{year}</span>
					</div>
					<div>{rentalPrice}</div>
				</div>
				<ul className={styles.item}>
					<li>{address.split(",")[1]}</li>
					<li>{address.split(",")[2]}</li>
					<li>{rentalCompany}</li>
					<li>Premium</li>
					<li>{type}</li>
					<li>{model}</li>
					<li>{id}</li>
					<li></li>
				</ul>
			</li>
		</>
	);
};
export default CardItem;
