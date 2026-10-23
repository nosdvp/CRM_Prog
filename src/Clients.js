import React, { useEffect, useState } from 'react'

const Clients = () => {

    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/client')
            .then(response => response.json())
            .then(data => setClients(data))
    }, [])

  return (
    
    <div>{clients.map((item, index) => (
        <p key={index} style={{color: 'white'}}>{item.name} <span>{item.company}</span></p>
    ))}</div>
  )
}

export default Clients