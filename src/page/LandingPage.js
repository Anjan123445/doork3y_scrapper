import React from "react";
import { Box } from "@mui/material";
import {
  AboutUs,
  Community,
  Contact,
  Entrepreneurs,
  FAQ,
  Footer,
  Header,
  Hero,
  Investors,
  News,
} from "../components";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#e7f1ff", overflowX: "hidden" }}>
      <Header />
      <button onClick={() => navigate("/profile")}>Go to Profile</button>

      <Hero />
      <AboutUs />
      {/* <Investors />
      <Entrepreneurs /> */}
      <Community />
      <News />
      <FAQ />
      <Contact />
      {/* <Footer /> */}
    </Box>
  );
}

export default LandingPage;
