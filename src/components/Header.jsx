import PropTypes from "prop-types"
import { HiTemplate } from "react-icons/hi"

function Header({ title }) {
  return (
    <header className="page-header">
      <h1>
        <HiTemplate /> <span>{title}</span>
      </h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
