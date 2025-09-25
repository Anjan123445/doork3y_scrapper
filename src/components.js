import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@mui/system";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import Masonry from './ReactBits/Components/Masonry/Masonry';
import ScrollReveal from './ReactBits/TextAnimations/ScrollReveal/ScrollReveal';



const investors = [
  {
    name: "Shah Rukh Khan",
    image:
      "https://i.pinimg.com/236x/26/e6/5a/26e65ae26c57c8660640ced6952d94e4.jpg", // No image shown in design
    details: ["Industry", "Typical venture", "Etc", "Etc"],
  },
  {
    name: "Apoorva",
    image:
      "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-46552,resizemode-75,msid-120091614/news/new-updates/apoorva-makhija-aka-rebel-kid-makes-instagram-comeback-posting-hundreds-of-rape-threats-after-latent-row.jpg",
    details: ["Industry", "Typical venture", "Etc", "Etc"],
  },
  {
    name: "Old Yt Man",
    image:
      "https://t3.ftcdn.net/jpg/06/16/55/08/360_F_616550819_rnEcH9vVVcep0dZgvAd3k8nn840uAueP.jpg",
    details: ["Industry", "Typical venture", "Etc", "Etc"],
  },
];

const entrepreneurs = [
  {
    name: "Elon Musk",
    image:
      "https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg", // No image shown in design
    details: ["Industry", "Typical venture", "Etc", "Etc"],
  },
  {
    name: "Mark Zuckerberg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlT3lrGX4jdkZEOPL6sgmOFSfhI1NOELMssQ&s",
    details: ["Industry", "Typical venture", "Etc", "Etc"],
  },
  {
    name: "Jeff Bezos",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/67531eb2b5f7c9e191f632d7/0x0.jpg?format=jpg&crop=711,713,x316,y125,safe&height=416&width=416&fit=bounds",
    details: ["Industry", "Typical venture", "Etc", "Etc"],
  },
];

const faqs = [
  {
    question: "How does the platform ensure secure communications?",
    answer:
      "We use end-to-end encryption and secure authentication protocols to ensure your data is protected.",
  },
  {
    question: "What are the criteria for startup eligibility?",
    answer:
      "Startups must have a minimum viable product and clear business model. Other factors may apply based on industry.",
  },
  {
    question: "How can investors verify startup credentials?",
    answer:
      "We perform due diligence and offer verified profiles. Investors also have access to pitch decks and financial data.",
  },
  {
    question: "I am writing Random Words here?",
    answer:
      "This is a placeholder answer. You can update this content anytime to suit your actual FAQs.",
  },
];

const GradientBackground = styled(Box)({
  background: "linear-gradient(180deg, #000a2c 0%, #0040ff 100%)",
  color: "#ffffff",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
});

// Simple section header component
export const SectionHeader = ({
  title,
  color = "#0c43b6",
  bgColor = "#0c44b8",
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
      <Typography
        variant="h4"
        sx={{
          color: color,
          fontFamily: "'Inter-Regular', Helvetica",
          fontWeight: 400,
          fontSize: "2.25rem",
          textAlign: "center",
          ...(color === "#0c43b6" && { WebkitTextStroke: "1px #0c44b8" }),
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ flexGrow: 1, ml: 4, bgcolor: bgColor }} />
    </Box>
  );
};

// Simple section title component
export const SectionTitle = ({ children, color = "#063088" }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        color,
        fontFamily: "'Inter-Bold', Helvetica",
        fontWeight: 700,
        fontSize: "4rem",
        textAlign: "center",
        my: 4,
      }}
    >
      {children}
    </Typography>
  );
};

// Header component
export const Header = () => {
  const navItems = ["Home", "Browse", "Contact"];
  const navigate = useNavigate();
  const goToSignup = () => navigate("/signup");
  const goToLogin = () => navigate("/login");

  const handleNavClick = (item) => {
    if (item === "Browse") navigate("/browse");
    else if (item === "Contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#030F27",
        boxShadow: 0,
        height: 80,
        display: "flex",
        alignItems: "center",
        px: 3,
      }}
    >
      <Box
        component="img"
        src="/doorkey-logo.png"
        alt="Doorkey Logo"
        sx={{ width: 50, height: 50, mr: 2 }}
      />

      <Stack direction="row" spacing={5}>
        {navItems.map((item) => (
          <Typography
            key={item}
            variant="h6"
            onClick={() => handleNavClick(item)}
            sx={{
              color: "#f6fff4",
              cursor: "pointer",
              fontFamily: "'Hanken_Grotesk-Light', Helvetica",
              fontWeight: 300,
              fontSize: "1.2rem",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>

      <Box sx={{ flexGrow: 1 }} />

      <Button
        variant="text"
        onClick={goToLogin}
        sx={{
          borderRadius: "18.5px",
          width: 180,
          height: 45,
          fontFamily: "'Hanken_Grotesk-Light', Helvetica",
          fontWeight: 300,
          fontSize: "1.2rem",
          textTransform: "none",
        }}
      >
        Log in
      </Button>

      <Button
        variant="contained"
        onClick={goToSignup}
        sx={{
          bgcolor: "#0c44b8",
          borderRadius: "18.5px",
          width: 180,
          height: 45,
          fontFamily: "'Hanken_Grotesk-Light', Helvetica",
          fontWeight: 300,
          fontSize: "1.2rem",
          textTransform: "none",
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

// Hero component
export const Hero = () => {
  return (
    <GradientBackground>
      <Box
        component="img"
        src="/door-bg.png"
        alt="Decorative"
        sx={{
          position: "absolute",
          right: 20,
          bottom: 0,
          width: { xs: 600, md: 1000 },
          opacity: 1,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          pt: 10,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Chip
            label="Investment Network"
            variant="outlined"
            sx={{
              mb: 3,
              borderRadius: "12px",
              fontWeight: "bold",
              color: "#fff",
              borderColor: "#fff",
              backgroundColor: "transparent",
              zIndex: 1,
              position: "relative",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            fontWeight="500"
            gutterBottom
            sx={{ position: "relative", zIndex: 1 }}
          >
            Connect your <br />
            <Box component="span" fontWeight="bold">
              groundbreaking startup
            </Box>{" "}
            to <br />
            <Box component="span" fontWeight="bold">
              visionary investors
            </Box>{" "}
            today.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Box
            mt={4}
            mb={2}
            display="flex"
            gap={4}
            flexWrap="wrap"
            sx={{ position: "relative", zIndex: 1 }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body1">Register in minutes</Typography>
              <Box
                sx={{
                  height: "1px",
                  width: "40px",
                  backgroundColor: "#1976d2",
                  borderRadius: "1px",
                }}
              />
              <Typography variant="body1">Explore 40+ sectors</Typography>
              <Box
                sx={{
                  height: "1px",
                  width: "40px",
                  backgroundColor: "#1976d2",
                  borderRadius: "1px",
                }}
              />
              <Typography variant="body1">Track your investments</Typography>
              <Box
                sx={{
                  position: "relative",
                  width: "100px",
                  height: "2px",
                  backgroundColor: "#ccc",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 0,
                    height: 0,
                    borderTop: "6px solid transparent",
                    borderBottom: "6px solid transparent",
                    borderLeft: "10px solid #ccc",
                  },
                }}
              />
            </Box>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button
            component={Link}
            href="/signup"
            variant="contained"
            size="large"
            sx={{
              borderRadius: "999px",
              fontWeight: "bold",
              backgroundColor: "#000",
              color: "#fff",
              px: 4,
              position: "relative",
              zIndex: 1,
            }}
          >
            GET STARTED
          </Button>
        </motion.div>
      </Container>
    </GradientBackground>
  );
};

// AboutUs component

export const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f6fdf7",
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Heading with underline */}
      <ScrollReveal>
        <Box display="flex" alignItems="center" mb={3}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              fontSize: "1.7rem",
              color: "#003087",
              mr: 2,
            }}
          >
            About Us
          </Typography>
          <Box flexGrow={1} sx={{ height: "1px", backgroundColor: "#003087" }} />
        </Box>
      </ScrollReveal>

      {/* Paragraphs */}
      <ScrollReveal>
        <Typography
          variant="body1"
          sx={{ color: "#003087", fontSize: "1.4rem", mb: 3, maxWidth: "800px" }}
        >
          In the fast-moving startup world, too many great ideas stall — not from
          lack of vision, but from lack of the right connections. Doorkey is here
          to change that.
        </Typography>
      </ScrollReveal>

      <ScrollReveal>
        <Typography
          variant="body1"
          sx={{ color: "#003087", fontSize: "1.4rem", mb: 6, maxWidth: "800px" }}
        >
          We've built a platform that instantly connects startups with a global
          network of angel investors, offering seed funding, mentorship, and
          strategic partnerships to fuel your growth.
        </Typography>
      </ScrollReveal>

      {/* Highlighted Bottom Heading */}
      <ScrollReveal>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: "2.5rem",
            color: "#003087",
            maxWidth: "700px",
          }}
        >
          Big Ideas Meet the Right <br />
          Opportunities here
        </Typography>
      </ScrollReveal>
    </Box>
  );
};

// // Investors component
// export const Investors = () => {
//   return (
//     <Box sx={{ bgcolor: "#f5fff3", py: 10, px: 3 }}>
//       <Container maxWidth="xl">
//         <SectionHeader title="Investors" />
//         <SectionTitle>Meet Our Community</SectionTitle>
//       </Container>
//     </Box>
//   );
// };

// // Entrepreneurs component
// export const Entrepreneurs = () => {
//   return (
//     <Box sx={{ bgcolor: "#f5fff3", py: 10, px: 3 }}>
//       <Container maxWidth="xl">
//         <SectionHeader title="Entrepreneurs" />
//       </Container>
//     </Box>
//   );
// };

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-95%); }
`;

// Scrolling cards component
// INTERNAL SCROLLING CARDS COMPONENT
const SCROLL_AMOUNT = 320;

const ScrollingCards = ({ data }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const halfScrollWidth = el.scrollWidth / 2;
      if (el.scrollLeft >= halfScrollWidth) {
        el.scrollLeft -= halfScrollWidth;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += halfScrollWidth;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ position: "relative", width: "100%", py: 4 }}>
      <IconButton
        onClick={() => handleScroll("left")}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          backgroundColor: "#fff",
          boxShadow: 2,
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={() => handleScroll("right")}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          backgroundColor: "#fff",
          boxShadow: 2,
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 4,
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {[...data, ...data].map((inv, idx) => (
          <Card
            key={idx}
            elevation={0}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              height: 400,
              width: 300,
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
              p: 2,
              backgroundColor: "#fff",
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
                  width: 150,
                  height: 200,
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

            <Button
              variant="contained"
              sx={{
                mt: 2,
                borderRadius: "999px",
                px: 4,
                backgroundColor: "#003087",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Connect
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

// MAIN EXPORT — DO NOT CHANGE NAME
export const Community = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f6fdf7",
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#003087", mb: 4 }}
      >
        Meet Our Community
      </Typography>

      {/* Investors Section */}
      <Box display="flex" alignItems="center" mb={3}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            fontSize: "1.7rem",
            color: "#003087",
            mr: 2,
          }}
        >
          Investors
        </Typography>
        <Box flexGrow={1} sx={{ height: "1px", backgroundColor: "#003087" }} />
      </Box>

      <ScrollingCards data={investors} />

      {/* Entrepreneurs Section */}
      <Box display="flex" alignItems="center" mt={8} mb={3}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            fontSize: "1.7rem",
            color: "#003087",
            mr: 2,
          }}
        >
          Entrepreneurs
        </Typography>
        <Box flexGrow={1} sx={{ height: "1px", backgroundColor: "#003087" }} />
      </Box>

      <ScrollingCards data={entrepreneurs} />
    </Box>
  );
};

// News component
export const News = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Replace '/api/news' with your actual backend endpoint
    fetch("http://127.0.0.1:5000/api/news") // Use full URL if frontend and backend are on different ports
      .then((res) => res.json())
      .then((data) => {
        // Optionally, map data to ensure it matches the expected structure
        setItems(
          data.map((item, idx) => ({
            id: item.id || idx.toString(),
            img: item.img, // should be the image URL from the news website
            url: item.url,
            headline: item.headline,
            height: item.height || 500, // fallback height if not provided
          }))
        );
      })
      .catch((err) => {
        // Optionally handle error
        setItems([]);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#0033ad",
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
        minHeight: "80vh",
      }}
    >
      {/* Section Title */}
      <Box display="flex" alignItems="center" mb={4}>
        <Typography
          variant="h6"
          sx={{ color: "white", fontSize: "1.7rem", fontWeight: "bold", mr: 2 }}
        >
          NEWS
        </Typography>
        <Box sx={{ flexGrow: 1, height: "1px", backgroundColor: "#ccc" }} />
      </Box>

      {/* Animated News Grid */}
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </Box>
  );
};


// FAQ component
export const FAQ = () => {
  const faqItems = [
    "How does the platform ensure secure communications?",
    "What are the criteria for startup eligibility?",
    "How can investors verify startup credentials?",
    "I am writing Random Words here?",
  ];

  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
        backgroundColor: "#f6fdf7",
      }}
    >
      <Box display="flex" alignItems="center" mb={3}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            fontSize: "1.7rem",
            color: "#003087",
            mr: 2,
          }}
        >
          FAQ
        </Typography>
        <Box flexGrow={1} sx={{ height: "1px", backgroundColor: "#003087" }} />
      </Box>

      <Container maxWidth="lg">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              boxShadow: "none",
              borderTop: index === 0 ? "1px solid #222" : "none",
              borderBottom: "1px solid #222",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: 16 }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

// Contact component
export const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        background: "linear-gradient(to bottom, #0346c3, #011e60)",
        color: "#fff",
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Contact Section */}
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ fontWeight: 300, mb: 2 }}>
            CONTACT US
          </Typography>
          <Typography variant="body2" sx={{ mb: 4, color: "#dbe5f1" }}>
            Some fluff about please reach out to us and stuff
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <LinkedInIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
          </Box>
        </Grid>

        {/* Right: Form Card */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: "#f6fdf7",
              borderRadius: 3,
              p: 4,
              color: "black",
              maxWidth: 500,
              ml: "auto",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 3, color: "#0d3ba5" }}
            >
              GET IN TOUCH WITH US!
            </Typography>

            <Box display="flex" gap={2} mb={2}>
              <TextField
                label="Full name"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                label="Company"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>

            <Box display="flex" gap={2} mb={2}>
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
              />
              <TextField
                label="Phone"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>

            <Box mb={2}>
              <TextField
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>

            <Box mb={3}>
              <TextField
                label="Note"
                variant="outlined"
                multiline
                minRows={3}
                fullWidth
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0d3ba5",
                textTransform: "none",
                fontSize: 12,
              }}
            >
              SEND MESSAGE
            </Button>
          </Paper>
        </Grid>
      </Grid>
      {/* Footer */}
      <Divider sx={{ borderColor: "#d1d5db", my: 6 }} />
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={6} md={4}>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              About
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Careers
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Press
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Terms Of Service
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Cookie Policy
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

// Footer component
export const Footer = () => {
  const footerLinks = [
    { title: "About", items: ["About", "Careers", "Press"] },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms Of Service", "Cookie Policy"],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#0c44b8", py: 5, color: "#f6fff4", px: 3 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {footerLinks.map((column, index) => (
            <Grid item xs={6} key={index}>
              {column.items.map((item, i) => (
                <Typography
                  key={i}
                  variant="h5"
                  sx={{
                    fontFamily: "'Inter-Light', Helvetica",
                    fontWeight: 300,
                    fontSize: "1.5rem",
                    mb: 2,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export { investors, entrepreneurs };