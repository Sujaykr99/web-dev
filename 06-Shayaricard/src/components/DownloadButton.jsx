import React from "react";
import html2canvas from "html2canvas";

const DownloadButton = ({ cardRef }) => {
  const handleDownload = async () => {
    const canvas = await html2canvas(cardRef.current);

    const link = document.createElement("a");
    link.download = "dil-e-noor-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <button
  className="download-card-btn"
  onClick={handleDownload}
>
  Download Card
</button>
  );
};

export default DownloadButton;