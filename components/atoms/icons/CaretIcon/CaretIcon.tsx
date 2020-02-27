/** @module CaretIcon */
import classNames from 'classnames';
import React, {FC, memo} from 'react';
import {colors} from '~constants/js/colors';

type CaretIconProps = {
  /** The width of the arrow with unit sizing (px, rem, etc). */
  width?: string;
  /** The height of the arrow with unit sizing (px, rem, etc). */
  height?: string;
  /** The color of the arrow. */
  fill?: string;
  /** Additional class names to apply to the container. */
  className?: string;
  /** The stroke size of the icon which adjusts the thickness. */
  stroke?: string;
  /** Changes the direction of the arrow. */
  direction?: 'up' | 'right' | 'down' | 'left';
  /** Additional inline styles to apply to the container. */
  style?: React.CSSProperties;
};

/** Displays the CaretIcon component.
 * @param  props - Component props.
 * @returns - JSX representation of the CaretIcon component.
 */
const CaretIcon: FC<CaretIconProps> = ({
  className,
  direction,
  fill,
  height,
  stroke,
  style,
  width,
}) => {
  const containerClasses = classNames(
    {
      'uic--rotate-right': direction === 'right',
      'uic--rotate-down': direction === 'down',
      'uic--rotate-left': direction === 'left',
      'uic--rotate-up': direction === 'up',
    },
    className,
  );

  return (
    <svg
      className={containerClasses}
      xmlns="http://www.w3.org/2000/svg"
      style={
        /**
         * Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style
         * https://www.w3.org/TR/SVG11/types.html#DataTypeLength
         * */
        {
          width,
          height,
          ...style,
        }
      }
      viewBox="0 0 14 8"
    >
      <polyline
        stroke={fill}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="translate(11.000000, -11.000000) rotate(45)"
        points="10 8.41421356 10 16.4142136 2 16.4142136"
      />
    </svg>
  );
};

CaretIcon.defaultProps = {
  width: '1.4rem',
  height: '1.4rem',
  stroke: '1.5',
  fill: colors.slate,
};

export default memo(CaretIcon);
