import React from "react";
import img from './img/logo.png';


class Header extends React.Component {
	render() {
		return(
			<header>
				<div className="header__logo">
					<a href="index.html">
						<img src={img} alt="Under22サイト" className="header__logo__img" />
					</a>
				</div>
			</header>
		);
	}
}

export default Header;