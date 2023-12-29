// import React, { useState } from "react";
// function AddProduct({ getData }) {
//     const [newItems, setItems] = useState('');
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Here added data post method in this link
//             const resp = await fetch('http://localhost:5000/api/todos', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ items: newItems }),
//               });
//             if (resp.status === 201) {   
//                 getData();
//                 setItems('');
//             }
//         } catch (error) {
//             console.error('Error adding task:', error);
//         }
//     }
//     return (
//         // Here given items data through input tag and task added node persist
//         <div>
//             <h3 className="text-center todo">To Do List App</h3>
//             <form className="col-md-12  " id="shoeb">
//                 <div className="input-group mb-3">
//                     <span className="input-group-text">Enter the task:</span>
//                     <input type="text"  className="form-control" placeholder="Enter the task"  value={newItems} onChange={(e) => setItems(e.target.value)}/>
//                     <button className="btn btn-success" onClick={handleSubmit}>Add product</button>
//                 </div>
//             </form>
            
//         </div>
//     )

// }
// export default AddProduct;