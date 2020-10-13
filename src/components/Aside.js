import React from 'react';
import { Button } from './atoms/Button'
export const Aside = ({title, asideClass, list}) => {
    // console.log(list.map(el => {<li key={el.id} className=''>{el}</li>);
    const handButtonClick = (clickedItem) => {
        console.log(clickedItem);
    }

    return (
        <aside className={asideClass}>
            <h2 className={asideClass +'__title'}>{title}</h2>
            <ul className={asideClass +'__list'}>
                {list.map(el => 
                <li key={el.id} className={asideClass +'__item'}>
                    <p className={asideClass +'__name'}>{el.name}</p>
                    <p className={asideClass +'__cost'}>{el.cost}zł</p>
                    <Button buttonClass={asideClass +'__btn'} handButtonClick={()=> handButtonClick(el.id)} text='Zobacz więcej' />
                </li>)}
            </ul>
        </aside>
    )
}
