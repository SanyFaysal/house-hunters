import { Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
const PaginationPart = () => {
  return (
    <div>
      <Stack spacing={2}>
        <Pagination count={2} />
      </Stack>
    </div>
  );
};

export default PaginationPart;
