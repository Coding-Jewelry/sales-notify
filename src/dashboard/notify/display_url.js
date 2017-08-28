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

class DisplayUrlForm extends React.Component {
    render() {
        let addButtonStyle = {textAlign: 'right', marginBottom: 5, height: 30};
        let listStyle = {resize: 'none', border: 'none', fontSize: 16};
        return (
            <PanelContainer noOverflow controls={false}>
                <Panel>
                    <PanelHeader className='bg-green fg-white'>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <h3>Set your display URLs</h3>
                                    <h5>What pages do you want this notification to display on?</h5>
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
                                            <ControlLabel>Enter the url of your pages</ControlLabel>
                                            <InputGroup style={{width: '100%'}}>
                                                <FormControl id="hook_url" autoFocus type='url' placeholder='https://jointhealliance.co/checkout' style={{height: 40}} />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup style={addButtonStyle}>
                                            <Icon id="addUrl" glyph='icon-nargela-plus' style={{fontSize: 25}} />
                                        </FormGroup>
                                        <FormGroup controlId='urls'>
                                            <FormControl id="url_list" componentClass='textarea' rows='5' name='comment' className='notify-urls' style={listStyle} readOnly />
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

export default class DisplayURL extends React.Component {
    render() {
        return (
            <Row>
                <Col sm={6} smOffset={3} xs={8} xsOffset={2} md={6} mdOffset={3} collapseRight>
                    <DisplayUrlForm />
                </Col>
            </Row>
        );
    }
}

