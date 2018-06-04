import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import logo from '../logo2.svg';

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
        <img src={logo} alt="" />
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};

export default PageShell;
