
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

export default class PixelInstall extends React.Component {
    getPath(path) {
        var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
        path = `/${dir}/${path}`;
        return path;
    }

    render() {
        return (
            <PanelContainer controls={false}>
                <Panel>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={8} smOffset={2} xs={10} xsOffset={1} style={{marginTop: '5%'}}>
                                    <div className="pixel-container" style={{textAlign: 'center'}}>
                                        <h2>Install The Notify Pixel</h2>
                                        <p>You will only have to do this once across your entire site and then you'll be ready to roll.</p>
                                        <div style={{margin: 20}}>
                                            <div style={{backgroundColor: '#f3f6f7', padding: 10}}>
                                                <code>
                                                    The code will be written sooner or later.
                                                </code>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelContainer>

        );
    }
}