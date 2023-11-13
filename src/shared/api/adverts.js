import axios from "axios";

const instance = axios.create({
	baseURL: "https://64884dbd0e2469c038fd6fbc.mockapi.io/adverts",
});
export default instance;
