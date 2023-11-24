import { FiHeart } from "react-icons/fi";
import Delimiter from "../Delimiter/Delimiter";
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
				<button className={styles.heartBtn} type="button">
					<FiHeart size={18} className={styles.heartIcon} />
				</button>

				<img className={styles.img} src={img} alt={`${make} ${model}`} />
				<div className={styles.titleCard}>
					<div>
						<span>{make} </span>
						<span className={styles.model}>{model}</span>
						<span>, {year}</span>
					</div>
					<div className={styles.price}>{rentalPrice}</div>
				</div>
				<ul className={styles.listInfo}>
					<li>
						{address.split(",")[1]}
						<Delimiter />
					</li>
					<li>
						{address.split(",")[2]}
						<Delimiter />
					</li>
					<li>
						{rentalCompany}
						<Delimiter />
					</li>
					<li>
						Premium
						<Delimiter />
					</li>
					<li>
						{type}
						<Delimiter />
					</li>
					<li>
						{model}
						<Delimiter />
					</li>
					<li>{id}</li>
					<li></li>
				</ul>
			</li>
		</>
	);
};
export default CardItem;
