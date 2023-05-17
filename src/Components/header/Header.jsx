import React from 'react';
// context
import { useGlobalContext } from '../../context/context';
// icons
import Logo from "../../assets/img/Logotype.svg";
import hamburger from "../../assets/img/Combined Shape.svg";
import mobileLogo from "../../assets/img/Mobile-LogoType.svg";
import searchIcon from "../../assets/img/Search.svg"
// css
import styles from "./css/header.module.css";

const Header = () => {
    const { setShowSideBar, setSearch } = useGlobalContext();

    const handelShowSideBar = () => {
        setShowSideBar(prev => !prev);
    }

    return (
        <header>
            <div className={styles.logo_part}>
                <button onClick={handelShowSideBar} className={styles.hamburger}>
                    <img src={hamburger} alt='HamburgerIcon' />
                </button>
                <picture>
                    <source media='(max-width:375px)' srcSet={mobileLogo} />
                    <img src={Logo} alt='Logo' />
                </picture>

                <div className={styles.search_box}>
                    <input className={styles.search_text} type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                    <button className={styles.search_btn}>
                        <img src={searchIcon} alt='Search' />
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header;