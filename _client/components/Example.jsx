import React, { Component } from "react";
import "../css/Example.css";

//      REDUX CONNECTION
import { connect } from "react-redux";
import { exampleAction } from "../redux/actions/example";
@connect(
    store => store.example,
    { onClick: exampleAction }
)
//      EXAMPLE REACT COMPONENT
class Example extends Component {
    render() {
        console.log("Render: ", this.props);
        return (
            <React.Fragment>
                <h1 className={"title"}>Development Environmnet</h1>
                <span>This development environment represents a basic boilerplate for a MERN application.</span>
                <br />
                <br />
                <span>Included Features:</span>
                <ul>
                    <li>ES6</li>
                    <li>JSX</li>
                    <li>Babel Proposal Decorators</li>
                    <li>CSS Text Extractor</li>
                    <li>CSS Modules</li>
                    <li>Webpack Bundle for Scripts/CSS</li>
                    <li>Scripts/CSS injection with HTML-webpack-plugin</li>
                    <li>Custom build/start script</li>
                    <li>NPM scripts for building and starting the server</li>
                </ul>
                <span>Basic Scaffolding</span>
                <ul>
                    <li>Recommended Folder Structure</li>
                    <li>React App with example components</li>
                    <li>Preconfigured REDUX Store with Middleware</li>
                    <li>Example Actions, Reducers, Types, Connected Components for react-redux</li>
                    <li>Express server with example routes and static asset configuration</li>
                    <li>Mongoose with a simple Schema/Model example</li>
                </ul>
                <span>Extra:</span>
                <ul>
                    <li>Recommended video tutorial resources links (youtube playlists)</li>
                    <li>Mocha testing example for Mongoose</li>
                    <li>Open Sans Google Font</li>
                </ul>
                <h3>{this.props.message}</h3>
                {this.props.button && (
                    <button className={"confirmSatisfaction"} onClick={this.props.onClick}>
                        I sure will!
                    </button>
                )}
            </React.Fragment>
        );
    }
}

export default Example;
