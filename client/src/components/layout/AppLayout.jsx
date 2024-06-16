/* eslint-disable react/display-name */
// import React from "react";

const AppLayout = () => (MyComponent) => {
  return (props) => {
    return (
      <div>
        <div>Header</div>
        <MyComponent {...props} />
        <div>Footer</div>
      </div>
    );
  };
};

export default AppLayout;

// function AppLayout(){
//     return function(Component){
//         return function(props){
//             return(
//                 <div>
//                     <Component {...props}/>
//                 </div>
//             )
//         }
//     }
// }
