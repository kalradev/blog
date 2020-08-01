import ReactMarkdown from 'react-markdown'
import Code from "./code";

const Markdown = ({ content }) => {
    return <ReactMarkdown 
        source={content} 
        renderers={{ code: Code }}
    />
}

export default Markdown