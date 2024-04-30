import React, { useState } from 'react'
import Card from './Card'
import DropIndicator from './DropIndicator'
import AddCard from './AddCard'

const Column = ({title, headingColor, column, cards, setCards}) => {
    const [active, setActive] = useState(false)

    const handleDragStart = (e, card) => {
        e.dataTransfer.setData("cardId",card.id)
    }

    if(cards===undefined){
        cards = []
    }

    const filteredCards = cards.filter((c)=>
        c.column === column
    )

  return (
    <div className='w-56 shrink-0'>
        <div className='mb-3 flex items-center justify-between'>
            <h3 className={`font-medium ${headingColor}`}>{title}</h3>
            <span className='rounded text-sm text-neutral-400'>{filteredCards.length}</span>
        </div>
        <div className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50":"bg-neutral-800/0"}`}>
            {filteredCards.map((c)=>{
                return <Card key={c.id} {...c}
                handleDragStart={handleDragStart}/>
            })}
            <DropIndicator beforeId="-1" column={column}/>
            <AddCard column={column} setCards={setCards}/>
        </div>
    </div>
  )
}

export default Column