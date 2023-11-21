import axios from "axios";

const carInstance = axios.create({
	baseURL: "https://64884dbd0e2469c038fd6fbc.mockapi.io/adverts",
});
export const getCars = async () => {
	const { data } = await carInstance.get("/");
	return data;
};

// export const deleteCar = (id) => {
// 	return carInstance.delete(`/${id}`);
// };
