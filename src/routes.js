import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
// import Header from './common/header';
import Footer from './common/footer';

/* Main Pages */

import StartPage from './dashboard/start';
import PixelInstall from './dashboard/pixel-install';
import NewNotify from './dashboard/notify/new-notify';

/* Pages */

import Homepage from './routes/Homepage';

import Login from './routes/Login';
import Signup from './routes/Signup';

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        {/*<Header />*/}
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

/**
 * Includes Sidebar, Header and Footer.
 */
const routes = (
  <Route component={App}>

    <Route path="getting-started" component={StartPage} />
    <Route path="pixel" component={PixelInstall} />
    <Route path="notify/new" component={NewNotify} />
	
  </Route>
);

/**
 * No Sidebar, Header or Footer. Only the Body is rendered.
 */
// const basicRoutes = (
//   <Route>
//     <Route path='lock' component={Lock} />
//     <Route path='login' component={Login} />
//     <Route path='signup' component={Signup} />
//   </Route>
// );

const combinedRoutes = (
  <Route>
    <Route>
      {routes}
    </Route>
    {/*<Route>*/}
      {/*{basicRoutes}*/}
    {/*</Route>*/}
  </Route>
);

export default (
  <Route>
    <Route path='/' component={Homepage} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/ltr'>
      {combinedRoutes}
    </Route>
    <Route path='/rtl'>
      {combinedRoutes}
    </Route>
  </Route>
);
