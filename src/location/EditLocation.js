import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8080/locations/'


const CompEditLocation = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [img, setImg] = useState('')

    const navigate = useNavigate()

    const {id} = useParams()

    const update = async (e) =>{
        e.preventDefault()
        await axios.put(URI+id, {title: title, description: description, price: price, img: img})
        navigate('/')
    }

    useEffect ( () => {
        getLocationById()
    },[])

    const getLocationById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setDescription(res.data.description)
        setPrice(res.data.price)
        setImg(res.data.img)
    }

    return(
        <div>
            <h1>EDITAR</h1>
            <form onSubmit={update}>
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
export default CompEditLocation