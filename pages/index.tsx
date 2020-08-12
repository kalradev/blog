import Layout from '../components/layout'
import Box from '../components/box'

function HomePage() {
  return <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-12 is-vertical is-parent">
        <Box
          Link="/blog/jwt"
          Title="JWT - JSON Web Token"
          Description="What is JWT? How to attack JWT? Some resources that might help."
          ImageSize="is-4by2"
          ImageLink="/blogs/jwt/index.png"
        />
      </div>
    </div>
  </Layout>
}

export default HomePage

