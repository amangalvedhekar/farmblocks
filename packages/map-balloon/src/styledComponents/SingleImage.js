import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "@crave/farmblocks-image";

const EnhancedImage = styled(Image)`
  background-color: white;
  position: absolute;
  bottom: 17px;
  left: -92px;
  border-radius: 8px;
`;

const SingleImage = ({ src }) => <EnhancedImage src={src} size={184} />;
SingleImage.propTypes = {
  src: PropTypes.string
};

export default SingleImage;
