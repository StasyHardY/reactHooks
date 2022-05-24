/*eslint-disable*/
import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
import { useState } from 'react';


const ListComponent = ({children}) => {
    return React.Children.map(children,(child, number) => {
      const config = {
        ...child.props,
        value: number + 1
      }
      console.log( config.value)
      
      return React.cloneElement(child, config)
    })
}
const Component = ({ value}) => {
  return <li> Компонент списка {value} </li>;
};
const ReactChildrenExample = () => {
  
  return (
    <CardWrapper>
      <SmallTitle>Clone form and add props</SmallTitle>
      <Divider />
      <ListComponent>
         
            <Component/>
            <Component/>
            <Component/>
          
      </ListComponent>
    </CardWrapper>
  );
  
};

export default ReactChildrenExample;