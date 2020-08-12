import ReactMarkdown from 'react-markdown'
import Code from "./md-tags/code";
import Theme from "../theme"

const Markdown = ({ content }) => {
    return <div style={{ width: '100%' }} className="md-style">
        <ReactMarkdown
            key="content"
            source={content}
            renderers={{
                code: Code
            }}
            escapeHtml={false}
        />
        <style jsx global>{`
        .md-style p {
            line-height: 1.7;
            color: #333;
            font-family: ${Theme.fontFamily.content};
        }
        .md-style h1,h2,h3 {
            margin: 10px 0 10px 0;
            font-family: ${Theme.fontFamily.head};
        }
        .md-style h1 {
            font-size: 2.5em;
            font-weight: 600;
        }
        .md-style h2 {
            font-size: 2em;
            font-weight: 500;
        }
        .md-style h3 {
            font-size: 1.5em;
            font-weight: 400;
        }
        .md-style a:hover {
            color: ${Theme.colors.accent};
        }
        .md-style ul {
            list-style: disc;
            list-style-position: inside;
        }
        .md-style li{
            line-height: 1.7;
            color: #333;
            font-family: ${Theme.fontFamily.content};
            font-size:0.85em;
        }
        .md-style img {
            width:100%;
            margin:20px 0 0 0;
        }
        `}</style>
    </div>
}

export default Markdown
