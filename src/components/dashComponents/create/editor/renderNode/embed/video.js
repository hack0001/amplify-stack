import React, { Component } from "react";

class Video extends Component {
  onChange = e => {
    console.log("SHABA");
    const video = e.target.value;
    const { node, editor } = this.props;
    editor.setNodeByKey(node.key, { data: { video } });
  };

  onClick = e => {
    console.log("SHBABA");
    // e.stopPropagation();
    const video = e.target.value;
    const { node, editor } = this.props;
    editor.setNodeByKey(node.key, { data: { video } });
  };

  renderVideo = () => {
    const { node, isFocused } = this.props;
    const video = node.data.get("video");

    const wrapperStyle = {
      position: "relative",
      outline: isFocused ? "2px solid blue" : "none"
    };

    const maskStyle = {
      //   display: isFocused ? "none" : "block",
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      width: "100%",
      zIndex: 1
    };

    const iframeStyle = {
      //   display: "block"
    };

    return (
      <div style={wrapperStyle}>
        <iframe
          title="ytplayer"
          id="ytplayer"
          type="text/html"
          width="640"
          height="476"
          src={video}
          frameBorder="0"
          style={iframeStyle}
        />
      </div>
    );
  };

  renderInput = () => {
    const { node } = this.props;

    const video = node.data.get("video");
    const style = {
      marginTop: "5px",
      boxSizing: "border-box"
    };
    return (
      <input
        value={video}
        onChange={this.onChange}
        onClick={this.onClick}
        style={style}
      />
    );
  };

  render() {
    return (
      <div {...this.props.attributes}>
        {this.renderVideo()}
        {this.renderInput()}
      </div>
    );
  }
}

export default Video;
