import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import logo from '../logo.svg'
import rrLogo from '../react-router-logo.png'

const redirect = path => {
  if (path === '/') {
    return 'SlideInFromRight'
  }
  if (path === '/hello') {
    return 'SlideInFromLeft'
  }
  if (path === '/helloagain') {
    return 'SlideUp'
  }
  if (path === '/fadein') {
    return 'FadeIn'
  }
  return 'SlideDown'
}

const PageShell = Page => {
  return props => (
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={800}
        transitionName={redirect(props.match.path)}
        component="div"
        className="page-content-container"
      >
        <img src={logo} alt="react logo" title="react logo" />
        <img src={rrLogo} alt="react router logo" title="react router logo" />

        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default PageShell
