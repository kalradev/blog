import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CodeStyle from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";

// some good styles
// darcula
// okaidia
// tomorrow
// xonokai
// material-dark
// vs-dark
const Code = (props) => {
    return (
        <SyntaxHighlighter language={props.language} style={CodeStyle}>
          {props.value}
        </SyntaxHighlighter>
      );
}


export default Code;