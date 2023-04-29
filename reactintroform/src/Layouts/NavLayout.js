import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";



const NavLayout = () => {
	return (
		<div className="Nav-layout">
			<NavBar/>
			<Outlet/>
		</div>
	)
}

export default NavLayout