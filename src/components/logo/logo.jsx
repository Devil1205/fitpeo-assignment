import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

function Logo() {

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents'}}>
      <Stack direction="row" alignItems="center" spacing={1} padding="0px 16px" width="fit-content" marginTop="10px">
        <img src="/assets/images/dashLogo.png" alt="dashLogo" width={30} style={{filter: "invert(1)",marginLeft: "20px"}}/>
        <h3 style={{ width: "fit-content"}}>Dashboard</h3>
      </Stack>
    </Link>
  )
};

export default Logo;