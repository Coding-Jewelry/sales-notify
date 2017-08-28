/**
 * Created by Wolf Hunter on 8/26/2017.
 */

import React from 'react';

import {
    Row,
    Col,
    Nav,
    Icon,
    Grid,
    Form,
    Panel,
    Radio,
    Table,
    Button,
    Badge,
    Checkbox,
    PanelBody,
    FormGroup,
    InputGroup,
    LoremIpsum,
    PanelHeader,
    ButtonGroup,
    FormControl,
    PanelFooter,
    ControlLabel,
    PanelContainer,
} from '@sketchpixy/rubix';

export default class CapturePanel extends React.Component {

    componentDidMount() {
        // $('html').addClass('authentication');
    }

    componentWillUnmount() {
        // $('html').removeClass('authentication');
    }

    render() {
        let badgeStyle = {fontSize: 13, marginTop: 10};
        let colStyle12 = {border: '2px solid #eeeeee', borderRadius: 5, margin: 10};
        let colStyle6 = {padding: 0};
        let colSubStyle1 = {border: '2px solid #eeeeee', borderRadius: 5, marginLeft: 10};
        let colSubStyle2 = {border: '2px solid #eeeeee', borderRadius: 5, marginLeft: 10};
        let divFooterStyle = {textAlign: 'center'};
        let h2Style = {marginTop: 0};
        let h4Style = {marginBottom: 30};

        return (
            <PanelContainer controls={false}>
                <Panel>
                    <PanelHeader className='bg-green'>
                        <Grid>
                            <Row>
                                <Col xs={12} className='fg-white'>
                                    <h2>Choose A Capture Source</h2>
                                    <h5>How would you like to capture the contacts you will display with Notify?</h5>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelHeader>
                    <PanelBody style={{padding: 30}}>
                        <Grid>
                            <Row>
                                <Col xs={12}  className="capture-source" id="auto-lead" style={colStyle12}>
                                    <div>
                                        <div style={{textAlign: 'right'}}>
                                            <Badge style={{fontSize: 13, marginTop: 10, backgroundColor: '#008bd5'}}>Recommended</Badge>
                                        </div>
                                        <div style={{textAlign: 'center'}}>
                                            <Icon glyph="climacon lightning cloud" style={{color: 'blue', fontSize: 70}} />
                                        </div>
                                        <div style={{textAlign: 'center'}}>
                                            <h2 style={h2Style}>Auto Lead Capture</h2>
                                        </div>
                                        <div style={divFooterStyle}>
                                            <h4 style={h4Style}>Automagically capture leas from your web page. Best for lead magnets & squeeze pages.</h4>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{paddingLeft: 10}}>
                                <Col md={6} sm={6} xs={6} style={colStyle6}>
                                    <div style={colSubStyle1} className="capture-source" id="clickfunnels">
                                        <div style={{textAlign: 'right'}}>
                                            <Badge style={{fontSize: 13, marginTop: 10, marginRight: 20}}>Advanced</Badge>
                                        </div>
                                        <div style={{textAlign: 'center'}}>
                                            <h2 style={h2Style}>Clickfunnels</h2>
                                        </div>
                                        <div style={divFooterStyle}>
                                            <h4 style={h4Style}>Capture leads with webhooks. Perfect for pages built on clickfunnels.</h4>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} sm={6} xs={6} style={colStyle6}>
                                    <div style={colSubStyle2} className="capture-source" id="infusionsoft">
                                        <div style={{textAlign: 'right'}}>
                                            <Badge style={{fontSize: 13, marginTop: 10, marginRight: 20}}>Advanced</Badge>
                                        </div>
                                        <div style={{textAlign: 'center'}}>
                                            <h2 style={h2Style}>Infusionsoft</h2>
                                        </div>
                                        <div style={divFooterStyle}>
                                            <h4 style={h4Style}>Capture leads & buyers with webhooks. Integrate directly into a campaign sequence.</h4>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} style={colStyle12} className="capture-source" id="customhook">
                                    <div style={{textAlign: 'right'}}>
                                        <Badge style={badgeStyle}>Beta</Badge>
                                    </div>
                                    <div style={{textAlign: 'center'}}>
                                        <Icon glyph="climacon lightning cloud" style={{color: 'blue', fontSize: 70}} />
                                    </div>
                                    <div style={{textAlign: 'center'}}>
                                        <h2 style={h2Style}>Custom Webhook</h2>
                                    </div>
                                    <div style={divFooterStyle}>
                                        <h4 style={h4Style}>Send Proof a custom HTTP post payload (for advanced technical users only).</h4>
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

