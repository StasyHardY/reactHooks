/*eslint-disable*/
import React from 'react'

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
   return isAuth == '' ? (
       <button className="btn btn-primary" onClick={onLogin}>
           Войти
       </button>
   ) : (
       <button className="btn btn-danger" onClick={onLogOut}>
           Выйти из системы
       </button>
   );
};
 
export default SimpleComponent;