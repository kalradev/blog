const text=`# domain-masscan

A wrapper around masscan that let you scan domains.
Just give it the domain name in a list.
It will try to get all the ip addresses of domains, handle error if any.
Will provide a file with domain to ipaddress mapping.

Then pass the ipaddresses file to masscan to scan`
import ReactMarkdown from 'react-markdown'

const Markdown = ({ content }) => {
    return <ReactMarkdown source={content} />
}

export default Markdown