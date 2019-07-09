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
import CollectionsIcon from "@material-ui/icons/Collections";
import Users from "@material-ui/icons/Group";
import Web from "@material-ui/icons/Web";

const sideMenuAdmin = [
  {
    label: "Home",
    path: "home",
    Icon: HomeIcon
  },
  {
    label: "Whiteboard",
    path: "whiteboard",
    Icon: DashboardIcon
  },
  {
    label: "Discussion",
    path: "discussion",
    Icon: ChatIcon
  },
  {
    label: "Users",
    path: "users",
    Icon: Users
  },
  {
    label: "Sites",
    path: "sites",
    Icon: Web
  },
  {
    label: "Calendar",
    path: "calendar",
    Icon: CalendarIcon
  },
  {
    label: "Create",
    path: "create",
    Icon: CreateIcon,
    subComponents: [
      {
        subLabel: "Article",
        subPath: "article",
        SubIcon: NotesIcon
      },
      {
        subLabel: "Quiz",
        subPath: "quiz",
        SubIcon: QuizIcon
      },
      {
        subLabel: "Slideshow",
        subPath: "slideshow",
        SubIcon: SlideshowIcon
      }
    ]
  },
  {
    label: "Settings",
    path: "settings",
    Icon: SettingsIcon
  },
  {
    label: "Bucket Images",
    path: "bucket-images",
    Icon: CollectionsIcon
  }
];

const sideMenu = [
  {
    label: "Home",
    path: "home",
    Icon: HomeIcon
  },
  {
    label: "Whiteboard",
    path: "whiteboard",
    Icon: DashboardIcon
  },
  {
    label: "Discussion",
    path: "discussion",
    Icon: ChatIcon
  },
  {
    label: "Create",
    path: "create",
    Icon: CreateIcon,

    subComponents: [
      {
        subLabel: "Article",
        subPath: "article",
        SubIcon: NotesIcon
      },
      {
        subLabel: "Quiz",
        subPath: "quiz",
        SubIcon: QuizIcon
      },
      {
        subLabel: "Slideshow",
        subPath: "slideshow",
        SubIcon: SlideshowIcon
      }
    ]
  },
  {
    label: "Settings",
    path: "settings",
    Icon: SettingsIcon
  }
];

const subMenu = [
  {
    label: "User",
    path: "user",
    Icon: PersonIcon
  },
  {
    label: "Sign Out",
    path: "signout",
    Icon: RadioIcon
  }
];

const subMenuAdmin = [
  {
    label: "User",
    path: "user",
    Icon: PersonIcon
  },
  {
    label: "Sign Out",
    path: "signout",
    Icon: RadioIcon
  }
];
export { sideMenu, sideMenuAdmin, subMenu, subMenuAdmin };
