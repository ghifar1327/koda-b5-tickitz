import React from 'react'
import { useHistory } from '../contexts/HistoryContex'

export default function Profile() {
    const {history} = useHistory()
  return (
    <div>
      {history.map((item, index) => (
        <div key={index}>
          <h3>{item.movie}</h3>
          <p>{item.cinema}</p>
          <p>{item.seats.join(', ')}</p>
          <p>Total: ${item.subtotal}</p>
          <p>date: {item.createdAt}</p>
        </div>
      ))}
    </div>
  )
}
