import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AttachButton = () => {
  const [url, setUrl] = useState("");
  const cloudName = "dinxdqo76";

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "m4obnmhx");
    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const request = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    const data = await request.json();
    console.log("URL IMAGE¨***", data.secure_url);
    sessionStorage.setItem("url", data.secure_url);
  };

  const handleChange = (e) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function load() {
        console.log("Reader...", reader);
        const { result } = reader;
        setUrl(result);
        handleUpload(file);
      };
    }
  };

  return (
    <Box className="input_register">
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <label htmlFor="fileInput">
        <Button variant="contained" component="span">
          Adjuntar archivos
        </Button>
      </label>
    </Box>
  );
};

export default AttachButton;
