import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CreateIcon from "@material-ui/icons/Create";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";
import RadioIcon from "@material-ui/icons/RadioButtonChecked";
import QuizIcon from "@material-ui/icons/QuestionAnswer";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import NotesIcon from "@material-ui/icons/Notes";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import Users from "@material-ui/icons/Group";
import Web from "@material-ui/icons/Web";

const sideMenuAdmin = [
  {
    label: "Home",
    Icon: HomeIcon
  },
  {
    label: "Whiteboard",
    Icon: DashboardIcon
  },
  {
    label: "Discussion",
    Icon: ChatIcon
  },
  {
    label: "Users",
    Icon: Users
  },
  {
    label: "Sites",
    Icon: Web
  },
  {
    label: "Calendar",
    Icon: CalendarIcon
  },
  {
    label: "Create",
    Icon: CreateIcon,
    subComponents: [
      {
        subLabel: "Article",
        SubIcon: NotesIcon
      },
      {
        subLabel: "Quiz",
        SubIcon: QuizIcon
      },
      {
        subLabel: "Slideshow",
        SubIcon: SlideshowIcon
      }
    ]
  },
  {
    label: "Settings",
    Icon: SettingsIcon
  }
];

const sideMenu = [
  {
    label: "Home",
    Icon: HomeIcon
  },
  {
    label: "Whiteboard",
    Icon: DashboardIcon
  },
  {
    label: "Discussion",
    Icon: ChatIcon
  },
  {
    label: "Create",
    Icon: CreateIcon,
    subComponents: [
      {
        subLabel: "Article",
        SubIcon: NotesIcon
      },
      {
        subLabel: "Quiz",
        SubIcon: QuizIcon
      },
      {
        subLabel: "Slideshow",
        SubIcon: SlideshowIcon
      }
    ]
  },
  {
    label: "Settings",
    Icon: SettingsIcon
  }
];

const subMenu = [
  {
    label: "User",
    Icon: PersonIcon
  },
  {
    label: "SignOut",
    Icon: RadioIcon
  }
];

const subMenuAdmin = [
  {
    label: "User",
    Icon: PersonIcon
  },
  {
    label: "SignOut",
    Icon: RadioIcon
  }
];
export { sideMenu, sideMenuAdmin, subMenu, subMenuAdmin };
