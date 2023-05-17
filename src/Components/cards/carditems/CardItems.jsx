import React from 'react';
// css
import styles from "./css/carditems.module.css"
import { useGlobalContext } from '../../../context/context';

const CardItems = ({ cards: { img, autor, tags, title, date, views, text }, index }) => {
    const { setCardIdx, setIsOpenModal } = useGlobalContext();

    const handelModal = (index) => {
        setIsOpenModal((prev) => !prev)
        setCardIdx(index)
    }

    return (
        <div className={styles.cards_block} onClick={() => handelModal(index)}>
            <picture>
                <source media='(max-width:1160px)' width={300} srcSet={img} />
                <source media='(max-width:980px)' width={280} srcSet={img} />
                <img src={img} alt='itemImg' />
            </picture>
            <div className={styles.cards_content}>
                <h3 className={styles.cards_tags}>{tags}</h3>
                <h4 className={styles.cards_title}>{title}</h4>
                <div className={styles.cards_info}>
                    <h5 className={styles.cards_autor}>{autor}</h5>
                    <ul className={styles.cards_list}>
                        <li>{date}</li>
                        <li>{views}</li>
                    </ul>
                </div>
                <p className={styles.cards_info_text}>
                    {text}
                </p>
            </div>

        </div>
    )
}

export default CardItems;