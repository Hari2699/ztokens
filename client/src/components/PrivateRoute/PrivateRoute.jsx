import React from 'react'
import {Route, Redirect} from "react-router-dom"


const isAuth = true;

const PrivateRoute = ({childern, ...rest}) => {
    return (
        <React.Fragment>
        
            <Route 
            {...rest}
            render={() => 
            isAuth ? {childern} : <Redirect to="/signin"/>
            }
        />
        </React.Fragment>
          
    )
}

export default PrivateRoute
