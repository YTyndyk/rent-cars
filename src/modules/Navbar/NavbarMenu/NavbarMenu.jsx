import { NavLink } from "react-router-dom";
import styles from "./navbarMenu.module.scss";

const NavbarMenu = ({ items }) => {
	const elements = items.map(({ id, link, text }) => {
		return (
			<li key={id}>
				<NavLink to={link} className={styles.link}>
					{text}
				</NavLink>
			</li>
		);
	});

	return <ul className={styles.menu}>{elements}</ul>;
};

export default NavbarMenu;
