
import React from 'react';

import {
    Row,
    Col,
    Nav,
    Grid,
    Icon,
    Image,
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

class MessageForm extends React.Component {
    render() {
        let messageStyle = {width: 320, height: 65, backgroundColor: '#7c2123', opacity: 0.8, borderRadius: 5, position: 'relative'};
        let leftSideStyle = {width: 59, height: 59, position: 'absolute', display: 'block', top: 3, left: 3, border: '1px solid black'};
        let rightSideStyle = {marginLeft: 75, paddingTop: 9, paddingRight: 5, height: 65};
        return (
            <PanelContainer noOverflow controls={false}>
                <Panel>
                    <PanelHeader className='bg-green fg-white'>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <h3>What do you want your notification to say?</h3>
                                    <h5>This text will show up on all of your notifications underneath the contact's name.</h5>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Form style={{width: '100%', height: 250}}>
                                        <FormGroup controlId='notifyurl' style={{width: '100%'}}>
                                            <ControlLabel>What should this notification say beneath the contact's name?</ControlLabel>
                                            <InputGroup style={{width: '100%'}}>
                                                <FormControl autoFocus type='url' placeholder='Recently joined the Entrepreneur Alliance' style={{height: 40}} />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup style={{textAlign: 'right', marginBottom: 40}}>
                                            <h6>0 / 45 characters</h6>
                                        </FormGroup>
                                        <div style={messageStyle}>
                                            <div style={leftSideStyle}>
                                                <img src="/imgs/app/avatars/avatar.png" width="59" height="59" />
                                            </div>
                                            <div style={rightSideStyle}>
                                                <div className="who">
                                                    <strong><span style={{fontSize: 14, color: 'white'}}>Anatoly Halfin</span></strong>
                                                </div>
                                                <div className="what">
                                                    <span style={{fontSize: 12, color: 'white'}}></span>
                                                </div>
                                                <div className="when">
                                                    {/*<time>2 minutes ago</time>*/}
                                                </div>
                                            </div>
                                        </div>
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

export default class NotifyMessage extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={8} smOffset={2} xs={8} xsOffset={2} md={8} mdOffset={2} collapseRight>
                        <MessageForm />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

