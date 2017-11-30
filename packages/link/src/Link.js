import * as React from "react";
import PropTypes from "prop-types";
import Tooltip from "@crave/farmblocks-tooltip";
import { fontSizes } from "@crave/farmblocks-theme";

import linkTypes from "./constants/linkTypes";
import Container from "./styledComponents/Link";

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeaves = this.mouseLeaves.bind(this);
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <Container {...props}>
        {props.leftIcon && <i className={`${props.leftIcon} margin-right }`} />}

        {props.disabled ? (
          <span onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeaves}>
            {children}
          </span>
        ) : (
          <a href={props.href}>{children}</a>
        )}

        {props.external && <i className="wg-external-link margin-left" />}

        <Tooltip
          text="This action is disabled."
          isVisible={this.state.showTooltip}
          align={props.tooltipAlign}
        />
      </Container>
    );
  }

  mouseOver() {
    if (this.props.disabled) {
      this.setState({
        showTooltip: true
      });
    }
  }

  mouseLeaves() {
    if (this.props.disabled) {
      this.setState({
        showTooltip: false
      });
    }
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(linkTypes)),
    tooltipAlign: PropTypes.oneOf(["left", "right"]),
    leftIcon: PropTypes.string,
    disabled: PropTypes.bool,
    external: PropTypes.bool,
    size: PropTypes.number,
    lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    type: linkTypes.FEATURED,
    tooltipAlign: "left",
    size: fontSizes.MEDIUM,
    lineHeight: 1,
    disabled: false,
    external: false
  };
}
