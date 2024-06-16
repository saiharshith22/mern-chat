import { useState, useEffect } from "react";

function useFileUpload({
  multiple = false,
  maxFiles = 1,
  maxSize = 1024 * 1024 * 5,
}) {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [error, setError] = useState(null);
  let hasError = false;

  const changeHandler = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (multiple && selectedFiles.length > maxFiles) {
      setError(`Maximum allowed files are ${maxFiles}`);
      return;
    }

    const filesWithPreview = selectedFiles
      .map((file) => {
        if (file.size > maxSize) {
          setError(
            `File size should not exceed ${maxSize * (1 / (1024 * 1024))}MB`
          );
          hasError = true;
          return null;
        }
        return {
          file,
          preview: URL.createObjectURL(file),
        };
      })
      .filter(Boolean); // Filter out null values in case of size error
    if (!hasError) {
      setFiles(filesWithPreview.map((fp) => fp.file));
      setPreviews(filesWithPreview.map((fp) => fp.preview));
      setError(null); // Reset errors
    }
  };

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      previews.forEach((preview) => {
        URL.revokeObjectURL(preview);
      });
    };
  }, [previews]);

  return { previews, files, error, changeHandler };
}

export default useFileUpload;
