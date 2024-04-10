import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const URI = 'http://192.168.0.15:8080/locations/'

const CompShowLocations = () => {
    const [locations, setLocation] = useState([])
    useEffect(() => {
        getLocations()
    }, [])
    const getLocations = async () => {
        const res = await axios.get(URI)
        setLocation(res.data)
    }
    
    const deleteLocation = (id) => {
        Swal.fire({
            title: "¿Estas seguro?",
            text: "!El registro se borrará permanetnemente¡",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, elimínalo",
            cancelButtonText: "Cancelar"
          }).then(async (result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Eliminado!",
                text: "El registro fue eliminado.",
                icon: "success",
                confirmButtonText:"Cerrar"
            });
            await axios.delete(`${URI}${id}`)
            getLocations()
        }
    });
    }
    
    return (
        <div className='flex flex-col justify-center items-center min-w-full min-h-screen bg-white text-white'>
            <Link to={"/create"} className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white mb-4">Crear</Link>
            <div className="overflow-x-auto">
                <table className="w-full rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-4 py-2 text-neon-pink">Title</th>
                            <th className="px-4 py-2 text-neon-blue">Description</th>
                            <th className="px-4 py-2 text-neon-yellow">Price</th>
                            <th className="px-4 py-2 text-neon-orange">Image</th>
                            <th className="px-4 py-2 text-neon-green">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-700">
                        {locations.map((location) => (
                            <tr key={location.id}>
                                <td className="px-4 py-2">{location.title}</td>
                                <td className="px-4 py-2">{location.description}</td>
                                <td className="px-4 py-2">{location.price}</td>
                                <td className="px-4 py-2"><img src={location.img} alt={location.title} className="h-16 w-16 object-cover" /></td>
                                <td className="px-4 py-2">
                                    <Link to={`/edit/${location.id}`} className="bg-green-400 text-white px-3 py-1 rounded-full hover:bg-green-500 hover:text-white">Editar</Link>
                                    <button onClick={() => deleteLocation(location.id)} className="bg-pink-400 text-white px-3 py-1 rounded-full hover:bg-pink-500 hover:text-white mt-2">Borrar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CompShowLocations
