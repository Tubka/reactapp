import React from 'react'
import { Aside } from './Aside'
import { asideLeftList } from './lists/asideLeftItem'

export const AsideRight = () => {
    return (
        <Aside list={asideLeftList} asideClass='asideRight'/>
    )
}
