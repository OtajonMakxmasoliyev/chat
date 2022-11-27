
import React from 'react'
import { Route, Navigate, Routes, Outlet,useNavigation    } from "react-router-dom"
import { CHAT, LOGIN } from './router';
import { privateRoute, publicRoute } from './routes';

export default function AppRouter() {
    

    

    const user = false;
    return user ? (
        <Routes>
            {privateRoute.map(({ path, Component, index }) => (
                    <Route path={path} key={path} element={Component} exact={true} />
                    
            ))
            
            }
              

        </Routes>
    ) : (
        <Routes>
            {publicRoute.map(({ path, Component,index }) => (
                    <Route path={path} key={path} element={Component} exact={true}  />

            ))
            }
            
        </Routes>
    )
}
