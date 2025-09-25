import Face from "@mui/icons-material/Face";
import Link from "@mui/icons-material/Link";
import LocationOn from "@mui/icons-material/LocationOn";
import Psychology from "@mui/icons-material/Psychology";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import Send from "@mui/icons-material/Send";
import WorkHistory from "@mui/icons-material/WorkHistory";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  CardMedia,
} from "@mui/material";
import React from "react";
import { investors, entrepreneurs } from "../components";

// Data for statistics
const statsData = [
  { value: "2", label: "STARTUPS FOUNDED" },
  { value: "10+", label: "YEARS EXPERIENCE" },
  { value: "50+", label: "TEAM MEMBERS LED" },
];

// Data for skills
const skillsData = [
  "Artificial Intelligence",
  "SaaS Development",
  "Product Management",
  "Startup Growth",
  "Strategic Planning",
  "Team Leadership",
  "Sustainable Technology",
  "EdTech",
  "Venture Capital",
];

// Data for experience
const experienceData = [
  {
    title: "Co-founder & CEO, Innovatech Solutions",
    period: "2018 - Present",
    description:
      "Led the development and launch of an AI-powered analytics platform, securing Series A funding and growing the team from 3 to 50 employees.",
  },
  {
    title: "Product Lead, TechGen Inc.",
    period: "2015 - 2018",
    description:
      "Managed the product lifecycle for a suite of enterprise software, significantly increasing user engagement and revenue.",
  },
];

const ProfileSection = () => {
  return (
   <Box
  sx={{
    width: "100%",
    minHeight: "100vh",
    position: "relative",
    bgcolor: "#f6fff4",
    backgroundImage: "url(/profile_bg.svg)",
    backgroundSize: "cover", // or "100% auto" if you want full width
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    pt: 3,
  }}
>


      {/* Navigation Header */}
      <Box sx={{ p: 3, display: "flex", alignItems: "center", gap: 4 }}>
        <Box
          component="img"
          src="/doorkey-logo.png"
          alt="Doorkey Logo"
          sx={{ width: 60, height: 60, mr: 2 }}
        />
        <Stack direction="row" spacing={4}>
          <Typography
            variant="h6"
            sx={{
              color: "#f6fff4",
              fontWeight: 300,
              cursor: "pointer",
            }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#f6fff4",
              fontWeight: 300,
              cursor: "pointer",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#f6fff4",
              fontWeight: 300,
              cursor: "pointer",
            }}
          >
            Contact
          </Typography>
        </Stack>
      </Box>
      {/* Main Profile Card */}
      <Container maxWidth="lg" sx={{ mt: 5}}>
        <Card
          sx={{
            borderRadius: 4,
            border: "3px solid #d1d5db",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          {/* Profile Header with Gradient */}
          <Box
            sx={{
              background:
                "linear-gradient(188deg, rgba(75,85,99,1) 10%, rgba(6,48,136,1) 30%)",
              borderRadius: "16px 16px 0 0",
              p: 4,
              position: "relative",
              height: 350,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#f5fff3",
                fontWeight: "bold",
                textAlign: "left",
                mb: 2,
                mt: 25,
              }}
            >
              Aria Kristenhoff
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#f5fff3",
                textAlign: "left",
                fontWeight: 400,
                mb: 2,
              }}
            >
              Visionary Entrepreneur & Innovator
            </Typography>
            <Avatar
              src="logo512.png"
              sx={{
                width: 230,
                height: 230,
                position: "absolute",
                right: 70,
                top: 230,
                border: "4px solid #f6fff4",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
              }}
            />
          </Box>
          {/* Profile Content */}
          <CardContent sx={{ bgcolor: "#eff6ff", p: 4 }}>
            {/* Location and Website */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOn sx={{ color: "primary.main", fontSize: 18 }} />
                <Typography variant="h6" color="text.secondary">
                  San Francisco, CA
                </Typography>
              </Stack>
              <Typography color="text.disabled">|</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Link sx={{ color: "primary.main", fontSize: 18 }} />
                <Typography variant="h6" color="primary.main">
                  ariamontgomery.io
                </Typography>
              </Stack>
            </Stack>
            {/* About Me Section */}

            <Box sx={{ mb: 4 }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 3 }}
              >
                <Face sx={{ color: "primary.main", fontSize: 32 }} />
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  About Me
                </Typography>
              </Stack>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ lineHeight: 1.4, maxWidth: 800 }}
              >
                Hello! I'm Aria, a passionate entrepreneur dedicated to building
                solutions that address real-world problems through innovative
                technology. With over 10 years of experience in the tech
                industry, I've co-founded two successful startups, focusing on
                AI-driven SaaS platforms. My expertise lies in product
                development, strategic growth, and fostering collaborative team
                environments.
              </Typography>
            </Box>
            {/* Statistics */}

            <Box
              sx={{
                py: 3,
                borderTop: 1,
                borderBottom: 1,
                borderColor: "grey.100",
                mb: 4,
              }}
            >
              <Grid container spacing={2} justifyContent="center">
                {statsData.map((stat, index) => (
                  <Grid item key={index}>
                    <Card
                      sx={{
                        bgcolor: "#f8fafc",
                        border: "1px solid #e5e7eb",
                        width: 255,
                        height: 99,
                      }}
                    >
                      <CardContent sx={{ textAlign: "center", p: 2 }}>
                        <Typography
                          variant="h4"
                          fontWeight="bold"
                          color="primary.main"
                          sx={{ mb: 1 }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ letterSpacing: 1.2 }}
                        >
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* Action Buttons */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <Button
                variant="contained"
                startIcon={<Send />}
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: 16,
                }}
              >
                Connect
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: 16,
                  borderWidth: 2,
                }}
              >
                Follow
              </Button>
            </Stack>
            {/* Skills & Interests */}
            <Box sx={{ mb: 4 }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 3 }}
              >
                <Psychology sx={{ color: "primary.main", fontSize: 32 }} />
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  Skills & Interests
                </Typography>
              </Stack>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {skillsData.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    variant="outlined"
                    sx={{
                      bgcolor: "#eff6ff",
                      borderColor: "primary.main",
                      color: "primary.main",
                      fontSize: 16,
                      height: 35,
                      "& .MuiChip-label": {
                        px: 2,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
            {/* Experience */}
            <Box sx={{ mb: 4 }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 3 }}
              >
                <WorkHistory sx={{ color: "primary.main", fontSize: 32 }} />
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  Experience
                </Typography>
              </Stack>
              <Stack spacing={2}>
                {experienceData.map((exp, index) => (
                  <Card
                    key={index}
                    sx={{
                      bgcolor: "#eff6ff",
                      border: "3px solid #0c44b8",
                      borderRadius: 2,
                      p: 2,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="#042671"
                        sx={{ mb: 1 }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography variant="h6" color="#0c44b8" sx={{ mb: 2 }}>
                        {exp.period}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ lineHeight: 1.2 }}
                      >
                        {exp.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Box>
            {/* Current Ventures */}
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 3 }}
              >
                <RocketLaunch sx={{ color: "primary.main", fontSize: 32 }} />
                <Typography variant="h4" fontWeight="bold" color="text.primary">
                  Current Ventures
                </Typography>
              </Stack>
              <Grid container spacing={4} justifyContent="center">
                <Grid item>
                  <Box
                    sx={{
                      width: 441,
                      height: 611,
                      bgcolor: "grey.100",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography color="text.secondary">Venture 1</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      width: 441,
                      height: 611,
                      bgcolor: "grey.100",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography color="text.secondary">Venture 2</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
      {/* Other Entrepreneurs Section */}
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography
          variant="h1"
          fontWeight="bold"
          color="#063088"
          sx={{ mb: 4 }}
        >
          Other entrepreneurs
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {entrepreneurs.map((ent, idx) => (
            <Grid item key={idx}>
              <Card
                sx={{
                  width: 500,
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#003087", mb: 1 }}
                >
                  {ent.name}
                </Typography>
                {ent.image && (
                  <CardMedia
                    component="img"
                    image={ent.image}
                    alt={ent.name}
                    sx={{
                      width: 250,
                      height: 300,
                      objectFit: "cover",
                      mb: 2,
                      border: "1px solid #003087",
                    }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1, p: 0 }}>
                  {ent.details.map((item, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: "#003087",
                        fontWeight: i === 0 ? "bold" : "normal",
                        mb: 0.5,
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Other Investors Section */}
      <Box sx={{ mt: 8, textAlign: "center", pb: 10}}>
        <Typography
          variant="h1"
          fontWeight="bold"
          color="#063088"
          sx={{ mb: 4 }}
        >
          Other Investors
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {investors.map((inv, idx) => (
            <Grid item key={idx}>
              <Card
                sx={{
                  width: 500,
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "#003087", mb: 1 }}
                >
                  {inv.name}
                </Typography>
                {inv.image && (
                  <CardMedia
                    component="img"
                    image={inv.image}
                    alt={inv.name}
                    sx={{
                      width: 250,
                      height: 300,
                      objectFit: "cover",
                      mb: 2,
                      border: "1px solid #003087",
                    }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1, p: 0 }}>
                  {inv.details.map((item, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: "#003087",
                        fontWeight: i === 0 ? "bold" : "normal",
                        mb: 0.5,
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileSection;
