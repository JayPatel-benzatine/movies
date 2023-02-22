import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}>

      <Stack spacing={2}>
        <Pagination className='btn_page'
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color='primary'

        />
      </Stack>

    </div>
  )
}

export default CustomPagination

// import React from "react";
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { createMuiTheme } from "@material-ui/core";

// function CustomPagination({ setPage, numOfPages = 10 }) {
//   // Scroll to top when page changes
//   const handlePageChange = (page) => {
//     setPage(page);
//     window.scroll(0, 0);
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         marginTop: 10,
//       }}
//     >

//       <Stack spacing={2}>
//         <Pagination
//           onChange={(e) => handlePageChange(e.target.textContent)}
//           count={numOfPages}
//           color="primary"
//           hideNextButton
//           hidePrevButton
//         />
//       </Stack>

//     </div>
//   );
// }

// export default CustomPagination;