import React from 'react'
import styles from './Card.module.css'

function Card ({deletedItem, list}) {
    const card = list.map(({name, age, address, phone, id, type}) => {
        return(
            <div className={styles.mainCard} key={id}>
                <div className={styles.body}  style={{backgroundColor : type === 'girl' ? 'pink' : 'green'}}>
                    <h1>{name}</h1>
                    <span>{age}</span>
                    <h2>{address}</h2>
                    <h3>{phone}</h3>
                    <div className={styles.btnDelete} onClick={(e) => deletedItem(e, id)}>X</div>
                </div>
            </div>
        )
    })
    return (
        <div>
            {card}
        </div>
    )
}

export default Card