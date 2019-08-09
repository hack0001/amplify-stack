import pluginsHot from "./hotKeys";
import WordCount from "./custom/wordCount";
const plugins = [...pluginsHot, WordCount()];
export { plugins };
