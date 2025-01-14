import React from "react";
import Card from "../Card/Card";

function CardList({list, deletedItem}) {
    console.log(list)
    const cards = list.map(({id, ...other}) => <Card key={id} id={id} {...other} deletedItem={deletedItem} />)
    return (
        <div>{cards}</div>
    )
}

export default CardList;