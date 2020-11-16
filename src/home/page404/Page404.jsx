import React from "react";
import { useLocation } from "react-router-dom";

function Page404() {
   let location = useLocation();

   return (
      <h1 style={{color: 'red'}}>
         Page 404 <code>{location.pathname}</code>
      </h1>
   );
}

export default Page404