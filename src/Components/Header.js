import React from 'react';

export const Header = ()=>{
    const props ={title : "Expense tracker"}
    return(
        <h2>
          {props.title}  
        </h2>
    )
}
