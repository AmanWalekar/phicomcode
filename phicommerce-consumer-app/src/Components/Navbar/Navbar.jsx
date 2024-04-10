import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';

export const Navbar = () => {
	const bankTheme = useSelector(state => state.bankTheme);
	return (
		<div>
			<nav className={styles.navbarContainer} style={{ background: bankTheme.primaryColor }}>
				<div className={styles.navbarHeader}>
					<img src={bankTheme.largeLogo} width='150' alt="bank logo"/>
				</div>
				{/* { isAuthenticated && user ? <div><span style={{color: 'white'}}>{userDetails.name}</span>
					<button style={{background: 'transparent', border: '0px', color: 'white', margin: '0 15px'}} onClick={logout}><img src={LogoutIcon} style={{width: '20px', filter: 'invert(1)'}} alt='logout'/></button></div> : <></>} */}
			</nav>
		</div>
	);
};
