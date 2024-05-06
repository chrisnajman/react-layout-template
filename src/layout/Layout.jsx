import PropTypes from "prop-types"
import SkipLink from "../components/SkipLink"
import BtnTheme from "../components/BtnTheme"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout({ children }) {
  return (
    <>
      <SkipLink />
      <BtnTheme />
      <div className="page-container">
        <Header title="React Layout Template" />
        <main
          id="main-content"
          className="main-content"
        >
          {children}
        </main>
        <Footer gitRepo="react-layout-template" />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
