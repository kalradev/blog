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
        .md-style p,
        .md-style li {
            line-height: 1.7;
            color: #333;
        }
        .md-style h1,
        .md-style h2,
        .md-style h3,
        .md-style h4,
        .md-style h5,
        .md-style h6 {
            margin: 0px;
            padding: 0px;
            font-family: ${Theme.fontFamily.head};
        }
        .md-style h1 > a,
        .md-style h2 > a,
        .md-style h3 > a,
        .md-style h4 > a,
        .md-style h5 > a,
        .md-style h6 > a {
            text-decoration: none;
        }
        .md-style hr {
            margin: 20px 0px;
            opacity: 0.35;
        }
        .md-style h1 {
            margin-top:30px;
            margin-bottom: 10px;
        }
        .md-style code {
            background-color: #00000010;
            padding: 3px 3px;
            border-radius: 2px;
        }
        .md-style pre {
            margin: 20px 0px !important;
        }
        .md-style ol pre,
        .md-style ol p {
            margin: 0px 0px !important;
        }
        .md-style blockquote {
            margin: 0px;
            padding-left: 1em;
            border-left: 4px solid ${Theme.colors.accent};
        }
        `}</style>
    </div>
}

export default Markdown
