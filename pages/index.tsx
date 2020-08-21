import Layout from '../components/layout'
import Box from '../components/box'

function HomePage() {
  return <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-8 is-vertical is-parent">
        <Box
          Link="/sec/jwt"
          Title="JWT - JSON Web Token"
          Description="What is JWT? How to attack JWT? Some resources that might help."
          ImageSize="is-4by2"
          ImageLink="/blogs/jwt/index.png"
        />
      </div>
      <div className="tile is-4 is-vertical is-parent">
        <Box 
          Link="/sec/idor"
          Title="IDOR - Indirect Object Reference"
          Description="What? Why? How to attack? Resources!!"
          ImageSize="is-2by2"
          ImageLink="/blogs/idor/idor.png"
        />
        <Box 
          Link="/tech/go-http-handler"
          Title="HTTP Request Handling in Golang"
          Description="We will talk about http routing and handling in Go."
        />
      </div>
    </div>
  </Layout>
}

export default HomePage

