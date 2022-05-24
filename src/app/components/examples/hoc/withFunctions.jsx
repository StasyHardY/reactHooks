
import React from "react";
import Card from "../../common/Card";

const withFunctions = (Component) => (props) => {
   const isAuth = localStorage.getItem("user");
   const handleLogin = () => {
         return localStorage.setItem("user", "auth");
   };
   const handleLogOut = () => {
         return localStorage.setItem("user", "");
   };

   return (
       <Card>
           <Component
               onLogin={handleLogin}
               onLogOut={handleLogOut}
               isAuth={isAuth}
               {...props}
           />
       </Card>
   );
};

export default withFunctions;