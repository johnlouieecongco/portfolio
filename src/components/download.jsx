// components/download.js

export const downloadFile = (filePath, fileName) => {
  // Method 1: Simple download
  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  link.target = "_blank";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Alternative method with better error handling
export const downloadFileWithFetch = async (filePath, fileName) => {
  try {
    const fullPath = filePath;
    console.log("Attempting to download from:", fullPath); // Debug log

    const response = await fetch(fullPath);

    if (!response.ok) {
      throw new Error(`File not found (${response.status})`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download error:", error);
    alert(`Failed to download file: ${error.message}`);
  }
};
