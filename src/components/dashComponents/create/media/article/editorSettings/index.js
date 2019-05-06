import initialValue from "./initialValue";
import TabContainer from "./tabContainer";
import pluginsHot from "../../../../create/editor/hotKeys";
import WordCount from "../../../../create/editor/renderNode/custom/wordCount";
const plugins = [...pluginsHot, WordCount()];
export { initialValue, TabContainer, plugins };
