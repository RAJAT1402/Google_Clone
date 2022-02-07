import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import {Results} from './Results';

function MyRoutes() {
    return <div className='p-4'>
        <Routes>
            <Route path='/' element={<Navigate replace to="/search" />}/>
            <Route path='/search' element={<Results />}/>
            <Route path='/images' element={<Results />}/>
            <Route path='/news' element={<Results />}/>
            <Route path='/videos' element={<Results />}/>
            {/* <Route path={['/search', '/images', '/news', 'videos']} element={<Results />}/>/ */}
        </Routes>
    </div>;
  }
  
export default MyRoutes;