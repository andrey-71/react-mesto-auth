import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <Routes>
      <Route>
        {
          () => props.loggedIn ? <Component {...props} /> : console.log(`<Navigate to='./sign-in'`)
        }

      </Route>
    </Routes>

  )
}

export default ProtectedRoute;