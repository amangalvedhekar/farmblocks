import * as React from "react";
import PropTypes from "prop-types";
import Button, { buttonSizes } from "@crave/farmblocks-button";
import {
  Button as AriaButtonWrapper,
  Wrapper as AriaWrapper,
  Menu
} from "react-aria-menubutton";

import DropdownWrapper from "../styledComponents/DropdownWrapper";
import DropdownMenuWrapper from "../styledComponents/DropdownMenuWrapper";

const Dropdown = props => (
  <DropdownWrapper>
    <AriaWrapper onSelection={props.handleSelection}>
      <AriaButtonWrapper>
        <Button
          rightIcon="wg-small-arrow-bottom"
          text={props.text}
          size={buttonSizes.MEDIUM}
        />
      </AriaButtonWrapper>

      <Menu>
        <DropdownMenuWrapper
          align={props.align}
          zIndex={props.zIndex}
          width={props.width}
        >
          <ul>{props.children}</ul>
        </DropdownMenuWrapper>
      </Menu>
    </AriaWrapper>
  </DropdownWrapper>
);

Dropdown.defaultProps = {
  handleSelection: () => false,
  text: "",
  align: "left"
};

Dropdown.propTypes = {
  handleSelection: PropTypes.func,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  align: PropTypes.oneOf(["left", "right"]),
  zIndex: PropTypes.number,
  width: PropTypes.string
};

export default Dropdown;
