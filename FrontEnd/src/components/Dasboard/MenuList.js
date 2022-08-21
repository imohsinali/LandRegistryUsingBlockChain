import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import LandscapeIcon from "@mui/icons-material/Landscape";

const list = [
  {
    id: 0,
    icon: <DashboardIcon />,
    text: "Dashboard",
  },
  {
    id: 1,

    icon: <AddPhotoAlternateIcon />,
    text: "Land Gallery",
  },

  {
    id: 2,

    icon: <LandscapeIcon />,
    text: "My Land",
  },
  {
    id: 3,

    icon: <PeopleIcon />,
    text: "profile",
  },
  {
    id: 4,

    icon: <LogoutIcon />,
    text: "logout",
  },
];

export default list;
