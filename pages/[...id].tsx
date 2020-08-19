import Layout from '../components/layout'
import Markdown from '../components/markdown'
import Path from 'path'
import Fs from 'fs'
import glob from 'glob'

// to get markdown content
import { GetStaticProps } from 'next'

const Blog = ({ content }) => {
  return <Layout>
    <Markdown content={content} />
  </Layout>
}


const getStaticProps: GetStaticProps = async ({ params }) => {
  // directory 
  let mdFile
  if(params.id[0]=="me"){
    mdFile = Path.join(process.cwd(), 'markdown',params.id[1] + ".md")
  }
  else {
    mdFile = Path.join(process.cwd(), 'markdown',params.id[0],params.id[1] + ".md")
  }

  // read file content
  const content = Fs.readFileSync(mdFile, 'utf8')

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
  const filenames = glob.sync(mdDir+"/**/*.md")

  // Get the paths we want to pre-render based on posts
  let paths = []
  filenames.forEach(function (filename:string){
    filename = filename.replace(mdDir + "/","")
    filename = filename.replace(".md","")
    
    if(filename.includes("/")) {
      const category = filename.split("/")
      paths.push({
        params: {id:[category[0],category[1]]}
      })
    }
    return paths.push({
      params: { id:["me",filename] },
    })
  })
  
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}


export default Blog
export { getStaticProps,getStaticPaths }