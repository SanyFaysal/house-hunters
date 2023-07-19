/* eslint-disable react/prop-types */
import { Stack } from '@mui/material';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import {} from 'react-icons/md';

const ShopPagination = ({ setSort, sort, pageFound, data }) => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);

    setSort({ ...sort, pageNumber: Number(value) });
  };

  return (
    <div className="d-flex justify-content-center ">
      <Stack>
        {/* <Typography sx={{ textAlign: "center" }}>Page: {page}</Typography> */}
        <Pagination count={pageFound} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default ShopPagination;
