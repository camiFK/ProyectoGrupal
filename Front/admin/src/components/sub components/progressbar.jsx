import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", width: "90px" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        style={{
          width: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {props.txt}
        </Typography>
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic({ value, text }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (progress < value) {
      const timer = setInterval(() => {
        setProgress(progress + 1);
      }, 30);

      return () => clearInterval(timer);
    }
  }, [progress, value]);

  return <CircularProgressWithLabel value={progress} txt={text} />;
}

/* 


    // const timer = setInterval(() => {
    //   setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    // }, 800);
    // return () => {
    //   clearInterval(timer);
    // };
    
*/
