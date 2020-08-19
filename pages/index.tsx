import Layout from '../components/layout'
import Box from '../components/box'
import Link from 'next/link'

function HomePage() {
  return <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-8 is-vertical is-parent">
        <Box
          Link="/blog/jwt"
          Title="JWT - JSON Web Token"
          Description="What is JWT? How to attack JWT? Some resources that might help."
          ImageSize="is-4by2"
          ImageLink="/blogs/jwt/index.png"
        />
      </div>
      <div className="tile is-4 is-vertical is-parent">
        <article className="tile is-child box">
            <Link href="/blog/api">
                <a><p className="content">api</p></a>
            </Link>
            <Link href="/blog/idor">
                <a><p className="content">idor</p></a>
            </Link>
        </article>
      </div>
    </div>
  </Layout>
}

export default HomePage

