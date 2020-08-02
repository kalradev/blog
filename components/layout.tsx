import Header from './header'

const Layout = ( props ) => {
    return <div>
        <Header/>
        <hr />
        <div>
            {props.children}
        </div>
        <hr />
    </div>
}

export default Layout