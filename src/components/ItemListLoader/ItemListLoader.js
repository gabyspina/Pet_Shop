import React from 'react'
import ItemDetail from '../../views/ItemDetail/ItemDetail'

const ItemListLoader = () => {
    return (
        <div>
            <div>
                {
                    [...new Array(5)].map((_, i) => (
                        <div key={i}>
                            <ItemDetail item={{
                                id= 0,
                                title = 'Cargando...',
                                thumbnail = 'https://via.placeholder.com/150',
                            }} />
                    )
                }
            </div>


        </div>
    ) 
    }

export default ItemListLoader
