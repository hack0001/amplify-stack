import Bold from "@material-ui/icons/FormatBold";
import Italic from "@material-ui/icons/FormatItalic";
import Underline from "@material-ui/icons/FormatUnderlined";
import StrikeThrough from "@material-ui/icons/StrikethroughS";
import Code from "@material-ui/icons/Code";
import FontSize from "@material-ui/icons/FormatSize";
import Quote from "@material-ui/icons/FormatQuote";
import HeadOne from "@material-ui/icons/Filter1";
import HeadTwo from "@material-ui/icons/Filter2";
import HeadThree from "@material-ui/icons/Filter3";
import HeadFour from "@material-ui/icons/Filter4";
import HeadFive from "@material-ui/icons/Filter5";
import Emoticon from "@material-ui/icons/InsertEmoticon";
import NumberedList from "@material-ui/icons/FormatListNumbered";
import BulletList from "@material-ui/icons/FormatListBulleted";
import AddDivider from "@material-ui/icons/SwapHoriz";
import FontFamily from "@material-ui/icons/FontDownload";
import Link from "@material-ui/icons/Link";
import AddPhoto from "@material-ui/icons/AddPhotoAlternate";
import VideoCam from "@material-ui/icons/Videocam";

const editor = [
  {
    type: "bold",
    Icon: Bold,
    tooltip: "Bold",
    editorType: "mark"
  },
  {
    type: "italic",
    Icon: Italic,
    tooltip: "Italic",
    editorType: "mark"
  },
  {
    type: "underline",
    Icon: Underline,
    tooltip: "Underline",
    editorType: "mark"
  },
  {
    type: "strikethrough",
    Icon: StrikeThrough,
    tooltip: "Strike Through",
    editorType: "mark"
  },
  {
    type: "code",
    Icon: Code,
    tooltip: "Code",
    editorType: "block"
  },
  {
    type: "formatSize",
    Icon: FontSize,
    tooltip: "Font Size",
    editorType: "mark"
  },
  {
    type: "fontFamily",
    Icon: FontFamily,
    tooltip: "Font Family",
    editorType: "mark"
  },
  {
    type: "quote",
    Icon: Quote,
    tooltip: "Quotes",
    editorType: "block"
  },
  {
    type: "heading-one",
    Icon: HeadOne,
    tooltip: "Heading One",
    editorType: "block"
  },
  {
    type: "heading-two",
    Icon: HeadTwo,
    tooltip: "Heading Two",
    editorType: "block"
  },
  {
    type: "heading-three",
    Icon: HeadThree,
    tooltip: "Heading Three",
    editorType: "block"
  },
  {
    type: "heading-four",
    Icon: HeadFour,
    tooltip: "Heading Four",
    editorType: "block"
  },
  {
    type: "heading-five",
    Icon: HeadFive,
    tooltip: "Heading Five",
    editorType: "block"
  },
  {
    type: "emoji",
    Icon: Emoticon,
    tooltip: "Insert Emoticon",
    editorType: null
  },
  {
    type: "numbered-list",
    Icon: NumberedList,
    tooltip: "Insert Numbered List",
    editorType: "block"
  },
  {
    type: "bullet-list",
    Icon: BulletList,
    tooltip: "Insert Bullet List",
    editorType: "block"
  },
  {
    type: "horizontal-line",
    Icon: AddDivider,
    tooltip: "Insert a Horizontal Line",
    editorType: "block"
  },
  {
    type: "link",
    Icon: Link,
    tooltip: "Insert a Link",
    editorType: "block"
  },
  {
    type: "embed-video",
    Icon: VideoCam,
    tooltip: "Insert an Video",
    editorType: "block"
  },
  {
    type: "embed-image",
    Icon: AddPhoto,
    tooltip: "Insert an Image",
    editorType: "block"
  }
];
export default editor;
