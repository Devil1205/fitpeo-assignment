import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Shahrukh 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Orders"
            growth="↑ 37.8%"
            type
            title2="this month"
            total={198000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" style={{background: "#b2fcb2",padding: "20px",borderRadius: "50px",width: "60px",height: "65px"}}/>}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            growth="↓ 37.8%"
            type={false}
            title2="this month"
            total={2400}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" style={{background: "rgb(234 210 255)",padding: "20px",borderRadius: "50px",width: "60px",height: "65px"}}/>}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Balance"
            growth="↓ 37.8%"
            type={false}
            title2="this month"
            total={2400}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" style={{background: "rgb(178 252 241)",padding: "20px",borderRadius: "50px",width: "60px",height: "65px"}}/>}
          />
        </Grid>
        
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Sales"
            growth="↑ 37.8%"
            type
            title2="this week"
            total={89000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" style={{background: "rgb(252 178 202)",padding: "20px",borderRadius: "50px",width: "60px",height: "65px"}}/>}
          />
        </Grid>


        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Overview"
            subheader="Monthly Earning"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Earning',
                  type: 'column',
                  fill: 'solid',
                  data: [23000, 11000, 22000, 27000, 13000, 22000, 37000, 21000, 44000, 22000, 30000, 26000],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Customers"
            subheader="Customers that buy products"
            chart={{
              series: [
                { label: 'Old Customers', value: 35 },
                { label: 'New Customers', value: 65 },
              ],
            }}
          />
        </Grid>

      </Grid>
    </Container>
  );
}
