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
import Link from "@material-ui/icons/Link";
import AddPhoto from "@material-ui/icons/AddPhotoAlternate";
import Indent from "@material-ui/icons/FormatIndentIncrease";
import Outdent from "@material-ui/icons/FormatIndentDecrease";
import FormatCenter from "@material-ui/icons/FormatAlignCenter";
import FormatRight from "@material-ui/icons/FormatAlignRight";
import FormatLeft from "@material-ui/icons/FormatAlignLeft";
import FormatJustify from "@material-ui/icons/FormatAlignJustify";
import CloudUpload from "@material-ui/icons/CloudUpload";
import FormatColorText from "@material-ui/icons/FormatColorText";
import LibraryAdd from "@material-ui/icons/LibraryAdd";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
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
    type: "formatColor",
    Icon: FormatColorText,
    tooltip: "Font Color",
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
    editorType: "mark"
  },
  {
    type: "format-align-left",
    Icon: FormatLeft,
    tooltip: "Left",
    editorType: "block"
  },
  {
    type: "format-align-center",
    Icon: FormatCenter,
    tooltip: "Center",
    editorType: "block"
  },
  {
    type: "format-align-right",
    Icon: FormatRight,
    tooltip: "Right",
    editorType: "block"
  },
  {
    type: "format-align-justify",
    Icon: FormatJustify,
    tooltip: "Justify",
    editorType: "block"
  },
  {
    type: "indent",
    Icon: Indent,
    tooltip: "Indent",
    editorType: "block"
  },
  {
    type: "outdent",
    Icon: Outdent,
    tooltip: "Outdent",
    editorType: "block"
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
    type: "embed",
    Icon: CloudUpload,
    tooltip: "Embed an Url",
    editorType: "block"
  },
  {
    type: "embed-image",
    Icon: AddPhoto,
    tooltip: "Insert an Image",
    editorType: "block"
  },
  {
    type: "paid-ad",
    Icon: LibraryAdd,
    tooltip: "Add Paid Ad Here",
    editorType: "block"
  },
  {
    type: "site-ad",
    Icon: PlaylistAdd,
    tooltip: "Add Site Ad Here",
    editorType: "block"
  }
];
export default editor;
