import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider,
  Button
} from '@sketchpixy/rubix';

import { Link, withRouter } from 'react-router';

import ChatComponent from './chat';
import StatisticsComponent from './statistics';
import TimelineComponent from './timeline';
import NotificationsComponent from './notifications';

@withRouter
class ApplicationSidebar extends React.Component {
  handleChange(e) {
    this._nav.search(e.target.value);
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  newNotify() {
    this.props.router.push('/ltr/notify/new');
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              {/*<FormControl type='text' placeholder='Search...' onChange={::this.handleChange} className='sidebar-search' style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />*/}
              <div className='sidebar-nav-container'>
                <Button bsStyle="deepred" lg block outlined style={{marginTop: 30, verticalAlign: 'middle'}} onClick={::this.newNotify}><Icon glyph='icon-dripicons-plus' /> New</Button>

                <SidebarNav style={{marginBottom: 0}} ref={(c) => this._nav = c}>
                  <div className='sidebar-header'>Welcome</div>
                  <SidebarNavItem glyph='icon-dripicons-star' name='Getting Started' href={::this.getPath('getting-started')} />

                  <div className='sidebar-header'>Manage</div>
                  <SidebarNavItem glyph='icon-nargela-minimize' name='Notifications' />

                  <div className='sidebar-header'>Account</div>
                  <SidebarNavItem glyph='icon-pixelvicon-document-3' name='Pixel Install' href={::this.getPath('pixel')} />
                  <SidebarNavItem glyph='icon-simple-line-icons-settings' name='Settings' />
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

@withRouter
export default class SidebarContainer extends React.Component {
  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {
    return (
      <div id='sidebar'>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                {/*<img src='/imgs/app/avatars/avatar.png' width='40' height='40' />*/}
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                {/*<div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Anatoly Halfin</div>*/}
                {/*<div>*/}
                  {/*<Progress id='demo-progress' value={30} color='#ffffff'/>*/}
                  {/*<Link to={::this.getPath('lock')}>*/}
                    {/*<Icon id='demo-icon' bundle='fontello' glyph='lock-5' />*/}
                  {/*</Link>*/}
                {/*</div>*/}
              </Col>
            </Row>
          </Grid>
        </div>
        {/*<SidebarControls>*/}
          {/*<SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />*/}
          {/*<SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />*/}
          {/*<SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />*/}
          {/*<SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />*/}
          {/*<SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />*/}
        {/*</SidebarControls>*/}
        <div id='sidebar-container'>
          <Sidebar sidebar={0}>
            <ApplicationSidebar />
          </Sidebar>
        </div>
      </div>
    );
  }
}
