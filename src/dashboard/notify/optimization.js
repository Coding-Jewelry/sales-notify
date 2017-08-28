/**
 * Created by Wolf Hunter on 8/26/2017.
 */

/**
 * Created by Wolf Hunter on 8/26/2017.
 */


import React from 'react';

import {
    Row,
    Col,
    Nav,
    Grid,
    Icon,
    Form,
    Panel,
    Radio,
    Button,
    MenuItem,
    Checkbox,
    HelpBlock,
    PanelBody,
    FormGroup,
    InputGroup,
    SplitButton,
    PanelHeader,
    ButtonGroup,
    FormControl,
    PanelFooter,
    ControlLabel,
    DropdownButton,
    PanelContainer,
} from '@sketchpixy/rubix';

class OptimizationForm extends React.Component {
    render() {
        // let itemStyle = {marginTop: 10, marginRight: 10, border: '2px solid gray', borderRadius: 10, padding: 7, color: '#8994b5'};
        let itemStyle = {marginTop: 10, marginRight: 10};
        return (
            <PanelContainer noOverflow controls={false} style={{width: ''}}>
                <Panel>
                    <PanelHeader className='bg-green fg-white'>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <h3>Optimize Your Notification</h3>
                                    <h5>The more detailed your response the better your proof will perform over time.</h5>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Form style={{width: '100%'}}>
                                        <FormGroup controlId='notifyurl' style={{width: '100%'}}>
                                            <h4><strong>What type of page is this going on?</strong></h4>
                                            <div>
                                                <Button className="btnOptimization" id="optLead" bsStyle="default" outlined style={itemStyle}>Lead Magnet/Squeeze Page</Button>
                                                <Button className="btnOptimization" id="optCheckout" bsStyle="default" outlined style={itemStyle}>Checkout Order Form</Button>
                                                <Button className="btnOptimization" id="optSales" bsStyle="default" outlined style={itemStyle}>Sales Page</Button>
                                                <Button className="btnOptimization" id="optWebinar" bsStyle="default" outlined style={itemStyle}>Webinar Registration</Button>
                                                <Button className="btnOptimization" id="optOther" bsStyle="default" outlined style={itemStyle}>Other</Button>
                                            </div>
                                            <p style={{marginTop: 15, marginBottom: 30}}>This is just the beginning. We will not rest until your offers cannot convert any higher :)</p>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelContainer>
        );
    }
}

export default class Optimization extends React.Component {
    render() {
        return (
            <Row>
                <Col sm={8} smOffset={2} xs={8} xsOffset={2} md={8} mdOffset={2} collapseRight>
                    <OptimizationForm />
                </Col>
            </Row>
        );
    }
}


