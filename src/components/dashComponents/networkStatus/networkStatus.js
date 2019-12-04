import React, { useState, useEffect } from "react";
import StatusSymbol from "@material-ui/icons/WifiTethering";
import IconButton from "@material-ui/core/IconButton";

const NetworkStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const condition = navigator.onLine ? "online" : "offline";
    if (condition === "offline") {
      setStatus(false);
    } else if (condition === "online") {
      setStatus(true);
    }
  }, []);

  return (
    <IconButton color="inherit">
      <StatusSymbol style={{ color: status ? "green" : "red" }} />
    </IconButton>
  );
};

export default NetworkStatus;
