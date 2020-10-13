import React from 'react'
import { Aside } from './Aside'
import { asideLeftList } from './lists/asideLeftItem'

export const AsideLeft = () => {
    return (
        <Aside list={asideLeftList} asideClass='asideLeft'/>
    )
}
