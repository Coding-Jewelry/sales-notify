/**
 * Created by Wolf Hunter on 8/26/2017.
 */

import React from 'react';

import CapturePage from './capture';
import DisplayURL from './display_url';
import Optimization from './optimization';
import NotifyMessage from './message';

import {
    Row,
    Col,
    Nav,
    Grid,
    Form,
    Panel,
    Modal,
    Popover,
    Radio,
    Table,
    Button,
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

export default class Wizard extends React.Component {

    addNewUrl() {
        var url = $("#hook_url").val();
        if (url == "") {
            vex.dialog.alert('Please input an URL!');
            return;
        }
        $("#url_list").append(url);
        $("#url_list").append("\n");
        $("#hook_url").val("");
    }

    selectOpt() {

    }

    componentDidMount() {

        $('#wizard-4').steps({
            stepsOrientation: "vertical"
        });

        $("#auto-lead").bind('click', function() {
            $('.capture-source').css("border", "2px solid #eeeeee");
            $(this).css("border", "2px solid #008bd5");
        });

        $("#clickfunnels").bind('click', function() {
            $('.capture-source').css("border", "2px solid #eeeeee");
            $(this).css("border", "2px solid #008bd5");
        });

        $("#infusionsoft").bind('click', function() {
            $('.capture-source').css("border", "2px solid #eeeeee");
            $(this).css("border", "2px solid #008bd5");
        });

        $("#customhook").bind('click', function() {
            $('.capture-source').css("border", "2px solid #eeeeee");
            $(this).css("border", "2px solid #008bd5");
        });

        $("#addUrl").bind('click', this.addNewUrl);
        $("#addUrl").hover(function() {
            $(this).css("font-size", "29px");
            $(this).css("color", "#2184be");
        });

        $(".btnOptimization").bind('click', this.selectOpt);
    }

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <PanelContainer noOverflow controls={false}>
                        <Panel>
                            <PanelHeader className='bg-darkblue fg-white' style={{margin: 0}}>
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h3>Make A New Notification</h3>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelHeader>
                            <PanelBody>
                                <div id='wizard-4'>
                                    <h1>Capture</h1>
                                    <div>
                                        <CapturePage />
                                    </div>

                                    <h1>Display URL</h1>
                                    <div>
                                        <DisplayURL />
                                    </div>

                                    <h1>Optimization</h1>
                                    <div>
                                        <Optimization />
                                    </div>

                                    <h1>Message</h1>
                                    <div>
                                        <NotifyMessage />
                                    </div>
                                </div>
                            </PanelBody>
                        </Panel>
                    </PanelContainer>
                </Col>
            </Row>
        );
    }
}

