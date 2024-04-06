import { getByRole } from '@testing-library/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8080/locations/'

const CompShowLocations = () => {
    const [locations, setLocation] = useState([])
    useEffect( () => {
        getLocations()
    },[])
    const getLocations = async () =>{
        const res = await axios.get(URI)
        setLocation(res.data)
    }

    const deleteLocation = async(id) => {
        await axios.delete(`${URI}${id}`)
        getLocations()
    }
    return(
        <div className='flex-col justify-center items-center min-w-full min-h-screen'>
            <Link to={"/create"}>Crear</Link>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        locations.map ( (location) => (
                            <tr key={location.id}>
                                <td>{location.title}</td>
                                <td>{location.description}</td>
                                <td>{location.price}</td>
                                <td><img src={location.img} /></td>
                                <td>
                                    <Link to={`/edit/${location.id}`}>Editar</Link>
                                    <button onClick={()=>deleteLocation(location.id)}>Borrar</button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CompShowLocations
