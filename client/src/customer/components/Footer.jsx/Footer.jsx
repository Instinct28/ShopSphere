import { Button, Grid, Typography, Box, Link } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", mt: 10, py: 5, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
      <Grid container spacing={27} justifyContent="center" textAlign="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Company
            </Typography>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                About
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Blog
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Press
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Career
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Partners
              </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Solutions
            </Typography>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Marketing
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Analytics
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Commerce
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Insights
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Support
              </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Documentation
            </Typography>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Guides
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                API Status
              </Button>
        </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Legal
            </Typography>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Claim
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Privacy
              </Button>
              <Button
                sx={{ display: 'block', color: 'white', textTransform: 'none', pb: 1 }}
              >
                Terms
              </Button>
          </Grid>
      </Grid>
      <Grid item sx={{mt:10}} xs={12}>
            <Typography variant="body2" component="p" align="center"> &copy; 2023 My Company. All rights reserved.
            </Typography>
            <Typography variant="body2" component="p" align="center">
            Made with love by Me.
            </Typography>
            <Typography variant="body2" component="p" align="center">
            Icons made by{' '}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik 
            </Link>{' '}
            from{' '}
            <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
            </Link>
            </Typography>
        </Grid>
    </Box>
  );
};

export default Footer;