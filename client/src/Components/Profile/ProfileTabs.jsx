import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import OrderHistory from "./OrderHistory";
import ProfileForm from "./ProfileForm";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `indicator-${index}`,
    "aria-controls": `indicator-${index}`
  };
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="indicator example"
          TabIndicatorProps={{
            title: "indicator",
            //hidden: true,
            sx: { backgroundColor: "gold", height: 4 } //width: "25% !important"
          }}
          sx={{
            "& button": { borderRadius: 2},
            "& button:hover": { backgroundColor: "gold", color: "white" },
            "& button:focus": { backgroundColor: "#1ac073", color: "white" },
            "& button:active": { backgroundColor: "green", color: "white" }
          }}
        >
          <Tab sx={{ width: "100%" }} icon={<DeliveryDiningIcon />} label="Orders" {...a11yProps(0)} />
          <Tab sx={{ width: "100%" }} icon={<PermIdentityIcon />} label="Profile" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel  value={value} index={0}>
        <OrderHistory/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileForm/>
      </TabPanel>
    </Box>
  );
}