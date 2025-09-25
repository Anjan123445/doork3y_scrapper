import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  MenuItem,
  Paper,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Alert,
  Snackbar,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Registration",
  "Profile Details",
  "Registration Complete",
];

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
  }
};

// NavBar component

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
    </Box>
  );
};

const validateBasicDetails = (formData) => {
  const newErrors = {};
  if (!formData.firstName?.trim())
    newErrors.firstName = "First name is required";
  if (!formData.lastName?.trim()) newErrors.lastName = "Last name is required";
  if (!formData.email?.trim()) newErrors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(formData.email))
    newErrors.email = "Email is invalid";
  if (!formData.password) newErrors.password = "Password is required";
  else if (formData.password.length < 6)
    newErrors.password = "Password must be at least 6 characters";

  return newErrors;
};

const validateProfileDetails = (formData) => {
  const newErrors = {};
  if (!formData.phone?.trim()) newErrors.phone = "Phone number is required";
  if (!formData.role?.trim()) newErrors.role = "Role is required";
  if (!formData.description?.trim())
    newErrors.description = "Description is required";
  if (!formData.vision?.trim())
    newErrors.vision = "Vision and Mission is required";

  return newErrors;
};

const BasicDetailsForm = ({ formData, setFormData, errors }) => {
  return (
    <Box sx={{ display: "flex", gap: 8 }}>
      <Container maxWidth="xs">
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          <TextField
            required
            type="text"
            placeholder="First Name"
            variant="outlined"
            fullWidth
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            error={!!errors.firstName}
            helperText={errors.firstName}
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
            type="text"
            placeholder="Last Name"
            variant="outlined"
            fullWidth
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            error={!!errors.lastName}
            helperText={errors.lastName}
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
            type="email"
            placeholder="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            error={!!errors.email}
            helperText={errors.email}
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
        </Box>
      </Container>
    </Box>
  );
};

const ProfileDetailsForm = ({ formData, setFormData, errors }) => {
  return (
    <Box sx={{ display: "flex", gap: 8 }}>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
          }}
        >
          <TextField
            required
            placeholder="Full Name"
            variant="outlined"
            fullWidth
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            error={!!errors.fullName}
            helperText={errors.fullName}
            InputProps={{
              style: {
                backgroundColor: "#ffff",
                border: "none",
                borderRadius: "20px",
                height: "50px",
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
            placeholder="Ph no."
            variant="outlined"
            fullWidth
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            error={!!errors.phone}
            helperText={errors.phone}
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
        </Box>
        <TextField
          type="email"
          placeholder="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 4,
          }}
        >
          <TextField
            type="password"
            placeholder="Password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
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
        </Box>

        <FormControl
          fullWidth
          sx={{
            backgroundColor: "#ffff",
            borderRadius: "20px",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
        ></FormControl>

        <TextField
          required
          placeholder="Description of Company/Investor"
          multiline
          minRows={4}
          fullWidth
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          error={!!errors.description}
          helperText={errors.description}
          variant="outlined"
          sx={{
            backgroundColor: "#ffff",
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#6b7280",
            },
          }}
        />

        <TextField
          required
          placeholder="Vision and Mission"
          multiline
          minRows={4}
          fullWidth
          value={formData.vision}
          onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
          error={!!errors.vision}
          helperText={errors.vision}
          variant="outlined"
          sx={{
            backgroundColor: "#ffff",
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#6b7280",
            },
          }}
        />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          width={128}
          height={128}
          bgcolor="#6C91DF"
          borderRadius="50%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="white"
          mb={2}
        >
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="icon-button-file">
            <IconButton component="span">
              <PhotoCameraIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </label>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Add Photo
        </Typography>
      </Box>
    </Box>
  );
};

function RegistrationComplete() {
  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        p: 4,
        textAlign: "center",
      }}
    >
      <CheckCircleIcon sx={{ fontSize: 60, color: "#4caf50", mb: 2 }} />
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Registration Complete
      </Typography>
      <Typography variant="body1" color="text.secondary">
        You will receive a confirmation email shortly.
      </Typography>
    </Box>
  );
}
const RegistrationPage = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    fullName: "",
    phone: "",
    role: "",
    description: "",
    vision: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  const handleNext = async () => {
    let validationErrors = {};

    if (step === 0) {
      validationErrors = validateBasicDetails(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setToast({
          open: true,
          message: "Please fill in all required fields correctly",
          severity: "error",
        });
        return;
      }

      try {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.firstName,
              last_name: formData.lastName,
            },
          },
        });

        if (error) throw error;

        // Store the user data in localStorage for the next step
        localStorage.setItem(
          "tempUserData",
          JSON.stringify({
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
          })
        );

        setToast({
          open: true,
          message: "Basic details saved successfully!",
          severity: "success",
        });

        setStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
        setErrors({});
      } catch (error) {
        setToast({
          open: true,
          message: error.message || "An error occurred during registration",
          severity: "error",
        });
      }
    } else if (step === 1) {
      validationErrors = validateProfileDetails(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setToast({
          open: true,
          message: "Please fill in all required fields correctly",
          severity: "error",
        });
        return;
      }

      try {
        // Get the stored user data
        const tempUserData = JSON.parse(localStorage.getItem("tempUserData"));

        if (!tempUserData) {
          throw new Error(
            "User data not found. Please start registration again."
          );
        }

        // Sign in the user
        const { data: signInData, error: signInError } =
          await supabase.auth.signInWithPassword({
            email: tempUserData.email,
            password: formData.password,
          });

        if (signInError) throw signInError;

        // Insert profile details into the profiles table
        const { error: profileError } = await supabase.from("profiles").insert([
          {
            user_id: signInData.user.id,
            full_name: formData.fullName,
            phone: formData.phone,
            role: formData.role,
            description: formData.description,
            vision: formData.vision,
            created_at: new Date().toISOString(),
          },
        ]);

        if (profileError) throw profileError;

        // Clear temporary data
        localStorage.removeItem("tempUserData");

        setToast({
          open: true,
          message: "Profile details saved successfully!",
          severity: "success",
        });

        setStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
        setErrors({});
      } catch (error) {
        setToast({
          open: true,
          message:
            error.message || "An error occurred while saving profile details",
          severity: "error",
        });
      }
    }
  };

  return (
    <>
      <NavBar />
      {/* Background starts below NavBar */}
      <Box
        sx={{
          bgcolor: "#FFFFFFFF",
          minHeight: "100vh",
          py: 4,
          backgroundImage: "url(/signup_bg.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="md">
          {" "}
          {/* Adjust maxWidth for box size: xs, sm, md, lg, xl */}
          <Paper
            elevation={3}
            sx={{ bgcolor: "#dbe9f8", borderRadius: 4, p: 4, mx: "auto" }}
          >
            {" "}
            {/* Adjust p for padding */}
            {/* Show radio only on first step */}
            {step === 0 && (
              <Box display="flex" justifyContent="center" mb={6}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <FormControlLabel
                      value="investor"
                      control={<Radio />}
                      label="Investor"
                      sx={{ mr: 6, fontWeight: "bold" }}
                      componentsProps={{ typography: { fontWeight: "bold" } }}
                    />
                    <FormControlLabel
                      value="entrepreneur"
                      control={<Radio />}
                      label="Entrepreneur"
                      sx={{ fontWeight: "bold" }}
                      componentsProps={{ typography: { fontWeight: "bold" } }}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            )}
            {/* Show step indicator after first step */}
            {step > 0 && (
              <Box mb={10}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  textAlign="center"
                  mb={3}
                >
                  SIGN UP
                </Typography>
                <Box display="flex" justifyContent="center" mb={14} gap={4}>
                  {["Basic Details", "Contact", "Verification"].map(
                    (label, idx) => (
                      <Box
                        key={label}
                        sx={{
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          bgcolor: step === idx ? "#6e91f3" : "#bcd2f7",
                          color: step === idx ? "#fff" : "#333",
                          fontWeight: step === idx ? "bold" : 400,
                          fontSize: "1.1rem",
                          boxShadow: step === idx ? 2 : 0,
                          transition: "all 0.2s",
                        }}
                      >
                        {label}
                      </Box>
                    )
                  )}
                </Box>
              </Box>
            )}
            {/* Remove Stepper and step label */}
            {/* {step === 0 && <BasicDetailsForm ... />} etc. remain unchanged */}
            {step === 0 && (
              <BasicDetailsForm
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}
            {step === 1 && (
              <ProfileDetailsForm
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />
            )}
            {step === 2 && <RegistrationComplete />}
            {/* Next Button */}
            <Box display="flex" justifyContent="flex-end" mt={4}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#6e91f3",
                  borderRadius: "20px",
                  px: 4,
                  py: 1,
                  textTransform: "none",
                }}
                onClick={handleNext}
                disabled={step >= steps.length - 1}
              >
                Next
              </Button>
            </Box>
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

export default RegistrationPage;
