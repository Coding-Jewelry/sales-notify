
import React from 'react';
import { Link, withRouter } from 'react-router';

import {
    Row,
    Col,
    Icon,
    Lead,
    Grid,
    Panel,
    Button,
    PanelBody,
    LoremIpsum,
    PanelHeader,
    PanelContainer,
    ResponsiveEmbed,
} from '@sketchpixy/rubix';

class PostItem extends React.Component {
    render() {
        return (
            <PanelContainer controls={false}>
                <Panel>
                    <PanelBody style={{paddingRight: '15%', paddingLeft: '15%'}}>
                        <Grid>
                            <Row>
                                <Col xs={12} style={{padding: 60}}>
                                    <h2 className='fg-black' style={{fontWeight: 800, marginTop: 0}}>{this.props.header}</h2>
                                    <Grid>
                                        <Row>
                                            <Col xs={6} collapseLeft collapseRight>
                                                <div className='fg-darkgray50'>
                                                    {/*<small>by <a href='#'>{this.props.author}</a> / {this.props.date}</small>*/}
                                                </div>
                                            </Col>
                                            <Col xs={6} collapseLeft collapseRight className='text-right'>
                                                <div className='fg-darkgray25 fg-hover-black50'>
                                                    {/*<small><Icon glyph='icon-ikons-time' style={{position: 'relative', top: 1}} /><span> {this.props.minutes} minutes read</span></small>*/}
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                    <div>{this.props.children}</div>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelContainer>
        );
    }
}

@withRouter
export default class StartPage extends React.Component {
    getPath(path) {
        var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
        path = `/${dir}/${path}`;
        return path;
    }

    render() {
        return (
            <PostItem
                header='Welcome to Notify'
                author='Sales Notify Support Team'
                date='Aug 20, 2017'
                minutes='2'
                tag='ENTERTAINMENT'
                comments='10'>
                {/*<Lead className='fg-black75'>*/}
                    {/*<LoremIpsum query='4s' />..*/}
                {/*</Lead>*/}
                <p>
                    {/*<LoremIpsum query='2s' />{' '}*/}
                    {/*<a href='#' className='text-capitalize'><LoremIpsum query='2w' /></a>{' '}*/}
                    {/*<LoremIpsum query='3s' />*/}
                    Our mission is to help you grow your business using honest marketing strategies. We are continually developing Notify into the platform that will help you build massive trust with your audience and drive higher conversions.
                </p>
                <div style={{marginTop: 25, marginBottom: 25}}>
                    <ResponsiveEmbed a16by9>
                        <iframe className='embed-responsive-item' src='//player.vimeo.com/video/104087897898954' allowFullScreen></iframe>
                    </ResponsiveEmbed>
                </div>
                <div>

                </div>
            </PostItem>
        );
    }
}
