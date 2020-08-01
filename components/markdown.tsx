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
            padding-top: 30px;
            padding-bottom: 10px;
            margin-top: 30px;
            margin-bottom: 30px;
        }
        .md-style h2 {
            padding-top: 25px;
            padding-bottom: 10px;
            margin-top: 25px;
            margin-bottom: 25px;
        }
        .md-style h3 {
            padding-top: 20px;
            padding-bottom: 10px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .md-style h4 {
            padding-top: 15px;
            padding-bottom: 10px;
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .md-style h5 {
            padding-top: 10px;
            padding-bottom: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .md-style h6 {
            padding-top: 5px;
            padding-bottom: 10px;
            margin-top: 5px;
            margin-bottom: 5px;
        }
        .md-style p {
            padding: 10px 0px;
            margin: 10px 0px;
        }
        .md-style li {
            padding: 10px 0px;
        }
        .md-style img {
            width: 100%;
            border-radius: 8px;
            box-shadow: 0px 4px 30px #00000040;
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
