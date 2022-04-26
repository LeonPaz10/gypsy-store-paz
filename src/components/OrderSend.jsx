import React from 'react'
import { Link } from 'react-router-dom'

const OrderSend = (orderId) => {
  return (
    
        <div className="contenedor">
             <div className="oe">
            <h1 className="text-center">Tu orden ha sido enviada</h1>
            <p className="text-center">Número de orden: {orderId}</p>
            <p className="text-center">En breve recibirás un correo con los detalles de tu orden</p>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
             </div>

            
        </div>
  )
}

export default OrderSend