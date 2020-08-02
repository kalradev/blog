import Layout from '../../components/layout'
import Markdown from '../../components/markdown'
import Path from 'path'
import Fs from 'fs'

// to get markdown content
import { GetStaticProps } from 'next'

const Blog = ({ content }) => {
  return <Layout>
    <Markdown content={content} />
  </Layout>
}


const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogMd = Path.join(process.cwd(), 'markdown',params.blog+'.md')

  // read file contents
  const content = Fs.readFileSync(blogMd, 'utf8')

  return {
    props: {
      content,
    },
  }
}

// This function gets called at build time
const getStaticPaths = async function () {
  // directory 
  const mdDir = Path.join(process.cwd(), 'markdown')

  // get filenames
  const filenames = Fs.readdirSync(mdDir)

  // Get the paths we want to pre-render based on posts
  const paths = filenames.map((filename:string) => ({
    params: { blog:filename.slice(0,-3) },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}


export default Blog
export { getStaticProps,getStaticPaths }