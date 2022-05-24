import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current.clientWidth);
    inputRef.current.focus();
  };
  const handleClickWidth = () => {
    inputRef.current.style.width = "";
            inputRef.current.style.height = "";
  };
  const handleClickChangeText = () => {
    inputRef.current.value = "text";
    inputRef.current.style.width = "80px";
    inputRef.current.style.height = "150px";
  };
  return (
    <CardWrapper>
      <SmallTitle className="card-title">
        Программируемые действия и свойства
      </SmallTitle>
      <Divider />
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        ref={inputRef}
        type="email"
        className="form-control"
        id="email"
      />
      <button className="btn btn-primary" onClick={handleClick}>
        Фокус input
      </button>
      <button className="btn btn-secondary" onClick={handleClickWidth}>
        Изменить ширину объекта
      </button>
      <button className="btn btn-secondary" onClick={handleClickChangeText}>
        Изменить содержимое блока
      </button>
    </CardWrapper>
  );
};

export default ProgrammableActionsExample;