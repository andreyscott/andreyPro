import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout