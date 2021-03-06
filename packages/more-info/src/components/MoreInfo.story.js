import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Card from "@crave/farmblocks-card";
import Button from "@crave/farmblocks-button";
import { action } from "@storybook/addon-actions";

import MoreInfo from "./MoreInfo";

storiesOf("More info", "module")
  .add(
    "Default",
    withInfo()(() => (
      <div>
        <MoreInfo text="Mouse over the icon for more info">
          Tooltip with text
        </MoreInfo>
      </div>
    ))
  )
  .add(
    "Without text - tooltip left aligned",
    withInfo()(() => (
      <div>
        <MoreInfo tooltipAlign="left">Tooltip left aligned with text</MoreInfo>
      </div>
    ))
  )
  .add(
    "Without text - tooltip right aligned",
    withInfo()(() => (
      <div style={{ marginLeft: "200px" }}>
        <MoreInfo tooltipAlign="right">Awesome tooltip</MoreInfo>
      </div>
    ))
  )
  .add(
    "with card",
    withInfo()(() => (
      <div>
        <MoreInfo text="Mouse over the icon for more info">
          <Card>This is a Card.</Card>
        </MoreInfo>
      </div>
    ))
  )
  .add(
    "with button",
    withInfo()(() => (
      <div>
        <MoreInfo text="Mouse over the icon for more info">
          <Button onClick={action("button clicked")}>This is a Button</Button>
        </MoreInfo>
      </div>
    ))
  );
