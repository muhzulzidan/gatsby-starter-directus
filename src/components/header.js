import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../assets/logo.inline.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#263238`,
      marginBottom: `1.45rem`,
    }}
  >
    
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        > 
        <Logo style={{marginRight:"1em", fontSize:".8em", paddingTop: ".2em"}}/> 
          {siteTitle}
        </Link>
      </h1>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
