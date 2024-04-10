import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const URI = 'http://192.168.0.15:8080/locations/'

const CompEditLocation = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
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
        <div className='flex flex-col justify-center items-center min-w-full min-h-screen bg-white text-white'>
            <h1 className="text-neon-blue">EDITAR</h1>
            <form onSubmit={update} className="bg-gray-900 rounded-lg p-8 w-full max-w-md">
                <div className="mb-4 flex flex-col">
                    <label className="text-neon-blue">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none focus:bg-gray-700 w-full"
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="text-neon-blue">Descripción</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none focus:bg-gray-700 w-full"
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="text-neon-blue">Precio</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                        className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none focus:bg-gray-700 w-full"
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="text-neon-blue">Imagen</label>
                    <input
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        type="text"
                        className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none focus:bg-gray-700 w-full"
                    />
                </div>
                <Link to={`/`} className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 hover:text-white min-w-full m-2">Cancelar</Link>
                <button type="submit" className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 hover:text-white m-2">Guardar</button>
            </form>
        </div>
    )
}
export default CompEditLocation
