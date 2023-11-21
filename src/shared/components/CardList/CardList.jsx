import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../CardItem/CardItem";
import { getCars } from "../../../redux/cars/cars-selectors";
import { fetchCars } from "../../../redux/cars/cars-operations";

import styles from "./cardList.module.scss";

const CarList = () => {
	const items = useSelector(getCars);
	const dispath = useDispatch();

	useEffect(() => {
		dispath(fetchCars());
	}, [dispath]);

	const elements = items.map(({ id, ...props }) => (
		<CardItem key={id} {...props} />
	));
	return (
		<>
			<ul className={styles.list}>{elements}</ul>
		</>
	);
};
export default CarList;
