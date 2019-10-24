/** @module CloseIcon */
import PropTypes from 'prop-types';
import React from 'react';

/** Displays the CloseIcon component.
 * @param {object} props - Component props.
 * @returns {*} - JSX representation of the CloseIcon component.
 */
const CloseIcon = ({width, height, fill, className, style}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    style={
      /** Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style */
      {
        width,
        height,
        ...style,
      }
    }
    viewBox="0 0 13 13"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={fill}
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M9.682 3.318L3.318 9.682M3.318 3.318l6.364 6.364" />
    </g>
  </svg>
);

CloseIcon.propTypes = {
  /** The width of the icon with unit sizing (px, rem, etc). */
  width: PropTypes.string,
  /** The height of the icon with unit sizing (px, rem, etc). */
  height: PropTypes.string,
  /** The color of the icon. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional inline styles to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

CloseIcon.defaultProps = {
  width: '1.3rem',
  height: '1.3rem',
  fill: '#5B6279',
};

export default CloseIcon;
