import Header from './header'
import Footer from './footer'

const Layout = ( props ) => {
    return <div>
        <Header/>
        <hr />
        <div>
            {props.children}
        </div>
        <hr />
        <Footer/>
    </div>
}

export default Layout