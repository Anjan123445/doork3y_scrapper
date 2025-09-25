import React from "react";
import { Box, Stack } from "@mui/material";
import ProfileSection from "./ProfileSection";
import FooterSection from "./FooterSection";

function ProfilePage() {
  return (
    <Box sx={{ width: "100%", bgcolor: "transparent" }}>
      <Stack spacing={0} sx={{ width: "100%" }}>
        <ProfileSection />
        <FooterSection />
      </Stack>
    </Box>
  );
}

export default ProfilePage;
