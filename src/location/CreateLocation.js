import axios from "axios";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8080/locations/'

const CompCreateLocation = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [img, setImg] = useState('')

    const navigate = useNavigate()

    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {title: title, description: description, price: price, img: img})
        navigate('/')
    }

    return(
        <div>
            <h1>CREAR</h1>
            <form onSubmit={store}>
                <div>
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                    />
                    <label>Descripción</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                    />
                    <label>Precio</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                    />
                    <label>Imagen</label>
                    <input
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        type="text"
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}
export default CompCreateLocation