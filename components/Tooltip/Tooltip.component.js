import React from "react";
import {
  asset,
  Image,
  Video,
  View,
  Text,
  StyleSheet,
  NativeModules,
} from "react-360";

const tooltipModule = NativeModules.TooltipModule;

export default class TooltipComponent extends React.Component {
  state = {
    source: this.props.iconImg,
    width: this.props.width ? this.props.width : 100,
    height: this.props.height ? this.props.height : 100,
    isMouseOver: false,
  };

  onMouseOn(source) {
    if (this.props.description) {
      tooltipModule.resizeTooltip(this.props.index, 300, 500);
    } else {
      tooltipModule.resizeTooltip(this.props.index, 300, 300);
    }
    this.setState({
      source: `${source}`,
      width: 300,
      height: 200,
      isMouseOver: true,
    });
  }

  onMouseOut() {
    tooltipModule.resizeTooltip(
      this.props.index,
      this.props.width,
      this.props.height
    );
    this.setState({
      source: this.props.iconImg,
      width: this.props.width,
      height: this.props.height,
      isMouseOver: false,
    });
  }

  renderMainComponent(styleSheet) {
    if (!this.props.infoVid) {
      return (
        <Image
          source={asset(`${this.state.source}`)}
          style={styleSheet.viewPanel}
        />
      );
    } else if (this.props.infoVid) {
      if (!this.state.isMouseOver) {
        return (
          <Image
            source={asset(`${this.state.source}`)}
            style={styleSheet.viewPanel}
          />
        );
      } else {
        return (
          <Video
            style={styleSheet.viewPanel}
            source={asset(`${this.state.source}`)}
            loop
          />
        );
      }
    }
  }

  render() {
    const styleSheet = StyleSheet.create({
      viewPanel: {
        width: this.state.width,
        height: this.state.height,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      textBlock: {
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#FFFFFF",
        width: 300,
        maxHeight: 500,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      text: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000000",
      },
      description: {
        fontSize: 14,
        color: "#000000",
      },
    });

    return (
      <View
        hitSlop={160}
        style={styleSheet.viewPanel}
        onEnter={() =>
          !this.props.infoVid
            ? this.onMouseOn(this.props.infoImg)
            : this.onMouseOn(this.props.infoVid)
        }
        onExit={() => this.onMouseOut()}
      >
        {this.renderMainComponent(styleSheet)}
        {this.state.isMouseOver ? (
          <View style={styleSheet.textBlock}>
            <Text style={styleSheet.text}>{this.props.text}</Text>
            {this.props.description && (
              <Text style={styleSheet.description}>
                {this.props.description}
              </Text>
            )}
          </View>
        ) : null}
      </View>
    );
  }
}
