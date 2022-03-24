import ItemCount from "./ItemCount";

const ItemList = ({ nombre, precio, stock, img }) => {


    const initial = 1;
    const cart = []

    const onAdd = (cantidad) => {
        cart.push({ nombre, cantidad, precio })
        localStorage.setItem('carrito', JSON.stringify(cart))
    }



    return (

        <div className='m-1 bg-dark pt-3' style={{ width: '200px', }}>
            <img src={img} alt="" width={50} height={50} />
            <p className='text-light'>{nombre}</p>
            <p className='text-light'>{precio}</p>
            <p className='text-light'>{stock}</p>
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        </div>

    )
}

export default ItemList