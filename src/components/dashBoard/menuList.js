import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CreateIcon from "@material-ui/icons/Create";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";
import RadioIcon from "@material-ui/icons/RadioButtonChecked";
import LabelIcon from "@material-ui/icons/Label";
import QuizIcon from "@material-ui/icons/QuestionAnswer";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import NotesIcon from "@material-ui/icons/Notes";

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

export { sideMenu, subMenu };
