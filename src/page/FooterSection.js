import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const FooterSection = () => {
  const footerLinks = [
    { title: "About", items: ["About", "Careers", "Press"] },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms Of Service", "Cookie Policy"],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0c44b8",
        color: "#f6fff4",
        pt: 6,
        pb: 4,
        px: 3,
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {footerLinks.map((column, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 500, fontFamily: "Inter" }}
              >
                {column.title}
              </Typography>
              {column.items.map((item, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  sx={{
                    fontFamily: "Inter-Light, Helvetica",
                    fontWeight: 300,
                    fontSize: "1rem",
                    mb: 1,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        <Stack spacing={2} alignItems="center" sx={{ mt: 5 }}>
          <Typography
            variant="body2"
            sx={{ color: "#f6fff4", fontSize: "14px", textAlign: "center" }}
          >
            © 2023 DoorKey. All rights reserved. Made with{" "}
            <Typography
              component="span"
              sx={{ color: "#ffe599", fontSize: "14px" }}
            >
              ♥
            </Typography>{" "}
            for innovators.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "#f6fff4",
                fontSize: "14px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "#f6fff4",
                fontSize: "14px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterSection;
