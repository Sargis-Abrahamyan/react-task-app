import { useState } from 'react';
// context
import { useGlobalContext } from '../../../context/context';
// icons
import arrowDown from "../../../assets/img/ArrowDown.svg";
import arrowRightIcon from "../../../assets/img/ArrowRightIcon.svg";
// css
import styles from "./css/navitems.module.css";

const NavItems = ({ items: { title, children }, index }) => {
    const [dropDownMenu, setDropDownMenu] = useState(false)
    const { handelShowBar } = useGlobalContext();

    return (
        <>
            <li className={styles.navitems_dekstop}>
                <div
                    className={styles.navitems}
                    onMouseOver={() => setDropDownMenu(true)}
                    onMouseOut={() => setDropDownMenu(false)}
                >
                    <span>{title}</span>
                    {title !== 'Buy Now' && <img src={arrowDown} alt='ArroDownIcon' />}

                    {children.length !== 0 ? (
                        dropDownMenu && <ul className={styles.dropdown_menu}>
                            {
                                children.map(({ id, title }, index) => (
                                    <li className={`${styles.dropdown_items}`}
                                        style={{ borderBottom: index !== children.length - 1 && '1px solid rgba(233, 233, 233, 1)' }}
                                        key={id}
                                        onClick={() => setDropDownMenu(!dropDownMenu)}
                                    >
                                        <a href="#" className={styles.link}>
                                            {title}
                                        </a>
                                        <img src={arrowRightIcon} alt='ArrowRightIcon' />
                                    </li>)
                                )
                            }
                        </ul>
                    ) : null}
                </div>
            </li >

            <li className={styles.navitems_mobile}>
                <div
                    className={
                        `${styles.navitems}
                         ${title === "Demos" && styles.navitems_frstChild}
                       `
                    }
                    onMouseOver={() => setDropDownMenu(true)} onMouseOut={() => setDropDownMenu(false)}
                >
                    <span>{title}</span>
                    {title !== 'Buy Now' && <img src={arrowDown} alt='ArroDownIcon' />}

                    {children.length !== 0 ? (
                        dropDownMenu && <ul className={styles.dropdown_menu}>
                            {
                                children.map(({ id, title }, index) => (
                                    <li className={`${styles.dropdown_items}`}
                                        style={{ borderBottom: index !== children.length - 1 && '1px solid rgba(233, 233, 233, 1)' }}
                                        key={id}
                                        onClick={handelShowBar}
                                    >
                                        <a href="#" className={styles.link}>
                                            {title}
                                        </a>
                                        <img src={arrowRightIcon} alt='ArrowRightIcon' />
                                    </li>)
                                )
                            }
                        </ul>
                    ) : null}
                </div>
            </li>

        </>
    )
}

export default NavItems;

