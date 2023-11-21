import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../../redux/cars/cars-selectors";
import { fetchCars } from "../../../redux/cars/cars-operations";

const CarList = () => {
	const items = useSelector(getCars);
	const dispath = useDispatch();

	useEffect(() => {
		dispath(fetchCars());
	}, [dispath]);

	const elements =
		items &&
		items.map(({ id, year, make, model, img, rentalPrice, address }) => (
			<li key={id}>
				<button type="button">heart</button>
				<img src={img} alt={`${make} ${model}`} width="274" height="auto" />
				<div>{address.split(",")[1]}</div>
				<div>{rentalPrice}</div>
				<div>{year}</div>
			</li>
		));
	return (
		<>
			<ul>{elements}</ul>
		</>
	);
};
export default CarList;
