import { useRef, useCallback, useEffect } from 'react';
// context
import { useGlobalContext } from '../../context/context';
// iconst
import Logo from "../../assets/img/Logotype.svg";
import closeIcon from "../../assets/img/CloseIcon.svg"
import mobileLogo from "../../assets/img/Mobile-LogoType.svg";
// components
import NavItems from './navitems/NavItems';
// css
import styles from "./css/navbar.module.css";

const NavBar = () => {
    const { menuItems, showSideBar, handelShowBar } = useGlobalContext();
    const prevScrollPositionRef = useRef(window.pageYOffset);
    const navBarRef = useRef(null);

    const onScrollOut = useCallback(() => {
        let currentScrollpos = window.pageYOffset;
        if (navBarRef.current) {
            if (window.pageYOffset < 200) {
                navBarRef.current.style.top = '0';
            } else if (prevScrollPositionRef.current > currentScrollpos) {
                navBarRef.current.style.top = '0';
            } else {
                navBarRef.current.style.top = '-100px';
            }
            prevScrollPositionRef.current = currentScrollpos;
        }
    }, [navBarRef]);


    useEffect(() => {
        window.addEventListener('scroll', onScrollOut)
        return () => window.removeEventListener('scroll', onScrollOut)
    }, [onScrollOut]);

    return (
        <nav ref={navBarRef} >
            <ul className={`${styles.navbar_items_block}`}>
                {menuItems.map((items, index) => <NavItems key={items.id} items={items} index={index} />)}
            </ul>

            <div className={`${showSideBar ? styles.show : styles.hide} ${styles.hidden}`}>
                <div className={styles.mobile_logo_picture}>
                    <picture>
                        <source media='(max-width:375px)' srcSet={mobileLogo} />
                        <img src={Logo} alt='Logo' />
                    </picture>
                    <button onClick={handelShowBar} className={styles.hamburger}>
                        <img src={closeIcon} alt='HamburgerIcon' />
                    </button>
                </div>
                <ul className={`${styles.navbar_items_block}`}>
                    {menuItems.map((items) => <NavItems key={items.id} items={items} />)}
                </ul>
            </div>

        </nav>
    )
}

export default NavBar;