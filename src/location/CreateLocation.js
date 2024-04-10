import axios from "axios";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const URI = 'http://192.168.18.20:8080/locations/'

const CompCreateLocation = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState('')

    const navigate = useNavigate()

    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {title: title, description: description, price: price, img: img})
        navigate('/')
    }

    return(
        <div className='flex flex-col justify-center items-center min-w-full min-h-screen bg-white text-white'>
            <h1 className="text-neon-blue">CREAR</h1>
            <form onSubmit={store} className="bg-gray-900 rounded-lg p-8 w-full max-w-md">
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
                <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white m-2">Guardar</button>
            </form>
        </div>
    )
}
export default CompCreateLocation
