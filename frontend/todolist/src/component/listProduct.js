// import React, { useEffect, useState } from "react";
// import AddProduct from "./addProduct";

// function Listproduct() {
//     const [list, setlist] = useState([]);
//     const getData = async () => {
//         try {
//             // Here fetch all data which is available inside the node persist
//             const resp = await fetch('http://localhost:5000/api/todos')
//             const data = await resp.json();
//             setlist(data.reverse());
//             // console.log(data)
//         } catch (error) {
//             console.log(error);


//         }
//     }
//     useEffect(() => {
//         getData();
//     }, [])

//     return (
//         // Here display all data added  in node persisit through table tag

//         <div className="container-fluid listproductcss">
//             <AddProduct getData={getData} />
//             <div className="tablecss">
//                 <table className="table table-secondary">
//                     <tbody>
//                         {
//                             list.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>{item.items}</td>
//                                 </tr>
//                             ))}
//                     </tbody>
//                 </table>
//             </div>
            
//         </div>
//     )



// }
// export default Listproduct;