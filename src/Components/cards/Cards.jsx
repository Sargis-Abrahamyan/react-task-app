import React from 'react';
// context
import { useGlobalContext } from '../../context/context';
// components
import CardItems from './carditems/CardItems';
// css
import styles from "./css/cards.module.css";

const Cards = ({ data }) => {
    const { search, cardIdx, isOpenModal, setIsOpenModal } = useGlobalContext();
    const cardsNewFind = data.find((items, index) => index === cardIdx)

    const hadnelCloseModal = () => {
        setIsOpenModal(false)
    }

    return (
        <section className={styles.cards_wrapper}>
            {
                data.filter((item) => {
                    if (search === "") {
                        return item
                    }
                    else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                        return item
                    }
                }).map((cards, index) => <CardItems key={index} cards={cards} index={index} />)
            }

            {isOpenModal &&
                <div className={styles.modal_container} >
                    <div className={styles.modal_box}>
                        <picture>
                            <source media='(max-width:1160px)' width={300} srcSet={cardsNewFind?.img} />
                            <source media='(max-width:980px)' width={280} srcSet={cardsNewFind?.img} />
                            <img src={cardsNewFind?.img} alt='itemImg' />
                        </picture>
                        <h4 className={styles.cards_title}>{cardsNewFind?.title}</h4>
                        <p className={styles.cards_info_text}>{cardsNewFind?.text}</p>
                        <button onClick={hadnelCloseModal} className={styles.close_modal_btn}>X</button>
                    </div>
                </div>
            }
        </section>
    )
}

export default Cards;