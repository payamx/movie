// import React from "react";


// const PouyaPagination = ({ totalPages, currentPage, onPageChenged }) => {
//   const pageNumbers = [];
//   const onNumberClicked = (number) => {
//     onPageChenged(number)
//   }
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <>
//       <div>
//         <nav aria-label="Page navigation example">
//           <ul class="pagination justify-content-center">
//             <li class="page-item disabled">
//               <a
//                 class="page-link"
//                 href="!#"
//                 onClick={() => onNumberClicked(currentPage - 1)}
//               >
//                 Previous
//               </a>
//             </li>
//             {pageNumbers?.map((number) => (
//               <>
//                 <li class="page-item" onClick={onNumberClicked(number)}>
//                   <a class="page-link" className={()=>number === currentPage ? 'page-link active' : 'page-link'} href="!#">
//                     {number}
//                   </a>
//                 </li>
//               </>
//             ))}

//             <li class="page-item">
//               <a
//                 class="page-link"
//                 href="!#"
//                 onClick={() => onNumberClicked(currentPage + 1)}
//               >
//                 Next
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default PouyaPagination;
