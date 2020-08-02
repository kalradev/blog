import ReactMarkdown from 'react-markdown'
import Code from "./code";
import Theme from "../theme"

const Markdown = ({ content }) => {
    return <div style={{ width: '100%' }} className="md-style">
        <ReactMarkdown
            key="content"
            source={content}
            renderers={{
                code: Code,
            }}
            escapeHtml={false}
        />
        <style jsx global>{`
        .md-style p {
            line-height: 1.7;
            color: #333;
            font-family: ${Theme.fontFamily.content};
        }
        .md-style h1 {
            margin: 10px 0 10px 0;
            font-family: ${Theme.fontFamily.head};
            font-size: 2.5em;
            font-weight: 600;
        }
        .md-style img {
            width:100%;
            margin:20px 0 0 0;
        }
        `}</style>
    </div>
}

export default Markdown
