import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Alert,
  Snackbar,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navItems = ["Home", "Browse"];
  const navigate = useNavigate();
  const handleNavClick = (item) => {
    if (item === "Home") navigate("/");
    else if (item === "Browse") navigate("/browse");
  };
  
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
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
        sx={{ width: 50, height: 50, mr: 2 }}      />
      <Stack direction="row" spacing={5}>
        {navItems.map((item) => (
          <Typography
            key={item}
            variant="h6"
            onClick={() => handleNavClick(item)}

            sx={{
              color: "#000000FF",
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
        variant="contained"
        onClick={() => navigate("/signup")}
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

const validateLogin = (formData) => {
  const newErrors = {};
  if (!formData.identifier?.trim())
    newErrors.identifier = "Phone or Email is required";
  if (!formData.password) newErrors.password = "Password is required";
  return newErrors;
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "error",
  });
  const navigate = useNavigate();

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setToast({
        open: true,
        message: "Please fill in all required fields",
        severity: "error",
      });
      return;
    }
    setErrors({});
    let email = formData.identifier;
    // If identifier is a phone number, you may want to map it to an email or handle accordingly
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: formData.password,
      });
      if (error) throw error;
      setToast({
        open: true,
        message: "Login successful!",
        severity: "success",
      });
      // Redirect or further logic here
    } catch (error) {
      setToast({
        open: true,
        message: error.message || "Login failed",
        severity: "error",
      });
    }
  };

  return (
    <>
      <NavBar />
      <Box
        sx={{
          bgcolor: "#f2fcf3",
          minHeight: "100vh",
          py: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/signup_bg.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{ bgcolor: "#dbe9f8", borderRadius: 4, p: 6 }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              LOG IN
            </Typography>
            <form onSubmit={handleLogin}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <TextField
                  required
                  placeholder="Phone Number or Email"
                  variant="outlined"
                  fullWidth
                  value={formData.identifier}
                  onChange={(e) =>
                    setFormData({ ...formData, identifier: e.target.value })
                  }
                  error={!!errors.identifier}
                  helperText={errors.identifier}
                  InputProps={{
                    style: {
                      backgroundColor: "#ffff",
                      borderRadius: "20px",
                      height: "50px",
                      border: "none",
                      color: "#6b7280",
                    },
                  }}
                  InputLabelProps={{ shrink: false }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& input::placeholder": {
                      color: "#6b7280",
                      opacity: 1,
                    },
                  }}
                />
                <TextField
                  required
                  type="password"
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    style: {
                      backgroundColor: "#ffff",
                      borderRadius: "20px",
                      height: "50px",
                      border: "none",
                      color: "#6b7280",
                    },
                  }}
                  InputLabelProps={{ shrink: false }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& input::placeholder": {
                      color: "#6b7280",
                      opacity: 1,
                    },
                  }}
                />
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: "#6e91f3",
                      borderRadius: "20px",
                      px: 4,
                      py: 1,
                      textTransform: "none",
                    }}
                  >
                    Log In
                  </Button>
                </Box>
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>
      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginPage;
