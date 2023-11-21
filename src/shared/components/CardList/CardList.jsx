import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../CardItem/CardItem";
import { getCars } from "../../../redux/cars/cars-selectors";
import { fetchCars } from "../../../redux/cars/cars-operations";

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
			<ul>{elements}</ul>
		</>
	);
};
export default CarList;
