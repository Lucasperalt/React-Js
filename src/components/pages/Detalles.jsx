import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../Details/ItemDetailContainer'

const Detalles = () => {
    const { id } = useParams ()
    console.log (id)
  return (
    <div>
        <ItemDetailContainer id={id}/>
    </div>
  )
}

export default Detalles