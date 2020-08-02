import Layout from '../components/layout'
import Box from '../components/box'

function HomePage() {
  return <Layout>
    <div className="tile is-ancestor">
      <div className="tile is-12 is-vertical is-parent">
        <Box
          Link="/blog/test"
          Title="Testing Bulma"
          Description="xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets "
          ImageSize="is-4by2"
          ImageLink="/blogs/test/index.jpg"
        />
      </div>
    </div>
  </Layout>
}

export default HomePage

