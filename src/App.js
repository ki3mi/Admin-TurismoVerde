import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CompShowLocations from './location/ShowLocations';
import CompCreateLocation from './location/CreateLocation';
import CompEditLocation from './location/EditLocation';

const LocationList = () => {
  return(
    <div className='flex min-w-full min-h-screen justify-center items-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowLocations/>}/>
          <Route path='/create' element={<CompCreateLocation/>}/>
          <Route path='/edit/:id' element={<CompEditLocation/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default LocationList;
