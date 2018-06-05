import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import logo from '../logo.svg';
import rrLogo from '../react-router-logo.png'

const redirect = path => {
  if(path === '/') {
    return 'SlideInFromRight'
  }
  if(path === '/hello') {
    return 'SlideInFromLeft'
  }
  if(path === '/helloagain') {
    return 'SlideUp'
  }
  return 'SlideDown'
}

const PageShell = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={200}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={150}
        transitionName={redirect(props.match.path)}
      >
        <img src={logo} alt="react logo" title="react logo" />
        <img src={rrLogo} alt="react router logo" title="react router logo" />

        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};

export default PageShell;
