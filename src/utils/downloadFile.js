const downloadFile = (blob, filename) => {
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

export default downloadFile;