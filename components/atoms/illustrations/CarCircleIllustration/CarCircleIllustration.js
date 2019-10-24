/** @module CarCircleIllustration */
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

/** Renders a car illustration. */
class CarCircleIllustration extends PureComponent {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      illuminated: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  /** Click handler which toggles the illustration easter egg.
   * @returns {undefined}
   */
  handleClick() {
    this.setState({illuminated: !this.state.illuminated});
  }

  /** @inheritdoc */
  render() {
    const {
      illuminate,
      color,
      draft,
      width,
      height,
      className,
      style,
      id,
    } = this.props;

    const elementProps = {
      className,
      style: {
        /**
         * Workaround svg height and width attributes not supporting rems in Firefox and IE by passing it through style
         * https://www.w3.org/TR/SVG11/types.html#DataTypeLength
         * */
        width,
        height,
        ...style,
      },
      onClick: this.handleClick,
    };

    if (illuminate || this.state.illuminated) {
      return (
        <svg
          {...elementProps}
          viewBox="0 0 140 140"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <pattern
            id={`${id}-a`}
            height="4"
            patternTransform="translate(0 17.71)"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 4 4"
            width="4"
          >
            <path d="m0 0h4v4h-4z" fill="none" />
            <circle cx="3" cy="4" fill="#f17732" r=".35" />
            <circle cx="1" cy="4" fill="#f17732" r=".35" />
            <circle cx="4" cy="2" fill="#f17732" r=".35" />
            <circle cx="2" cy="2" fill="#f17732" r=".35" />
            <circle cy="2" fill="#f17732" r=".35" />
            <circle cx="3" fill="#f17732" r=".35" />
            <circle cx="1" fill="#f17732" r=".35" />
          </pattern>
          <pattern
            id={`${id}-b`}
            height="4"
            patternTransform="translate(0 17.71)"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 4 4"
            width="4"
          >
            <path d="m0 0h4v4h-4z" fill="none" />
            <circle cx="3" cy="4" fill="#99052e" r=".35" />
            <circle cx="1" cy="4" fill="#99052e" r=".35" />
            <circle cx="4" cy="2" fill="#99052e" r=".35" />
            <circle cx="2" cy="2" fill="#99052e" r=".35" />
            <circle cy="2" fill="#99052e" r=".35" />
            <circle cx="3" fill="#99052e" r=".35" />
            <circle cx="1" fill="#99052e" r=".35" />
          </pattern>
          <circle cx="70" cy="70" fill="#10004c" r="70" />
          <path
            d="m31.28 85.46h9.59a6.18 6.18 0 0 1 6.13 6.18v3a4.26 4.26 0 0 1 -4.26 4.26h-13.38a4.26 4.26 0 0 1 -4.26-4.3v-3a6.18 6.18 0 0 1 6.18-6.18z"
            fill="#99052e"
          />
          <path
            d="m98.87 85.32h9.59a6.18 6.18 0 0 1 6.18 6.18v3a4.26 4.26 0 0 1 -4.26 4.26h-13.38a4.26 4.26 0 0 1 -4.26-4.26v-3a6.18 6.18 0 0 1 6.13-6.18z"
            fill="#99052e"
          />
          <path
            d="m82.56 36.82h-25.27c-7.06 0-17.45 12.07-17.45 19.13s10.39 19.13 17.45 19.13h25.27c7.06 0 17.6-12.07 17.6-19.13s-10.54-19.13-17.6-19.13z"
            fill="#9da1af"
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.46-8.53 16.77-18.76l60.46-.07c5.92 10.23 16.77 8.48 16.77 18.83v13.37a6.11 6.11 0 0 1 -6.07 6.09z"
            fill="#feca1e"
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.46-8.53 16.77-18.76l60.46-.07c5.92 10.23 16.77 8.48 16.77 18.83v13.37a6.11 6.11 0 0 1 -6.07 6.09z"
            fill={`url(#${id}-a)`}
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.74-8.86 16.77-18.76 3.05 28.65 72.43 31 77.23 32.13a6.09 6.09 0 0 1 -6.07 6.09z"
            fill="#f17732"
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.74-8.86 16.77-18.76 3.05 28.65 72.43 31 77.23 32.13a6.09 6.09 0 0 1 -6.07 6.09z"
            fill={`url(#${id}-b)`}
          />
          <path
            d="m48.89 62.72h42.22c1.74 0 4.93 1 4.54 3.16 2.35-2.61 4.51-6.27 4.51-9.93 0-7.06-10.54-19.13-17.6-19.13h-25.27c-7.06 0-17.45 12-17.45 19.06 0 3.73 2.16 7.39 4.49 10-.33-1.88 2.81-3.16 4.56-3.16z"
            fill="#fde5cb"
          />
          <path
            d="m42 56c0-7.06 8.23-19.13 15.29-19.13h25.27c7.06-.05 15.44 12.02 15.44 19.13z"
            fill="#7c8194"
          />
          <path
            d="m42 56c0-7.06 8.23-19.13 15.29-19.13h25.27c7.06-.05 15.44 12.02 15.44 19.13z"
            fill="#2870b5"
          />
          <rect
            fill="#feca1e"
            height="6.05"
            rx="3.03"
            width="10.17"
            x="29.67"
            y="48.05"
          />
          <rect
            fill="#feca1e"
            height="6.05"
            rx="3.03"
            width="9.76"
            x="100.16"
            y="48.05"
          />
          <ellipse cx="70" cy="81.52" fill="#6b7186" rx="26.04" ry="7.7" />
          <ellipse cx="70" cy="81.52" fill="#10004c" rx="26.04" ry="7.7" />
          <path
            d="m41.58 94.19-13.58-2.54c-1.77-.33-3-2.42-2.74-4.64l.1-.86 13.63 2.53c1.77.33 3 2.42 2.74 4.64z"
            fill="#99052e"
          />
          <path
            d="m31.74 128.6c3.32-18.33 9.46-52.4 9.34-52.72-.48-1.35-3.32-3.18-13.8-5.42-1.07-.23-2 .17-2.05 1.19l-24.31-12.96a70 70 0 0 0 30.82 69.91z"
            fill="#feca1e"
          />
          <path
            d="m98.14 94.19 13.62-2.54c1.78-.33 3-2.42 2.75-4.64l-.11-.86-13.62 2.53c-1.78.32-3.01 2.42-2.78 4.64z"
            fill="#99052e"
          />
          <path
            d="m139.76 75.51v-11c-.15-2-.38-4-.7-5.91l-24.52 13.05c-.09-1-1-1.42-2.06-1.19-10.48 2.24-13.32 4.07-13.8 5.42-.11.33 6.06 34.55 9.37 52.86a69.89 69.89 0 0 0 31.71-53.23z"
            fill="#feca1e"
          />
          <path
            d="m38.36 77.3-8.47-.22s-.38.79-1 .87a3.43 3.43 0 0 1 -3.8-3.44l.13-2.86c.09-1 1-1.42 2.05-1.19 10.48 2.24 13.32 4.07 13.8 5.42.33.9-.7 1.42-2.71 1.42z"
            fill="#f8f7f4"
          />
          <path
            d="m101.46 77.3 8.47-.22s.38.79 1 .87a3.43 3.43 0 0 0 3.8-3.44l-.13-2.86c-.09-1-1-1.42-2-1.19-10.48 2.24-13.32 4.07-13.8 5.42-.38.9.65 1.42 2.66 1.42z"
            fill="#f8f7f4"
          />
          <path
            d="m92.23 94.69-22.23.58-22.23-.58c-2.19 0-3-3.19-3-3.19l25.23 1.15 25.2-1.15s-.78 3.19-2.97 3.19z"
            fill="#99052e"
          />
          <path
            d="m93.41 78.14c-4.22-2.56-13.12-4.33-23.41-4.33s-19.19 1.77-23.41 4.33h18.92l4.49 6.51 4.49-6.51z"
            fill="#5fcbeb"
          />
          <path
            d="m92.06 77.42c-4.61-2.16-12.76-3.61-22.06-3.61s-17.45 1.45-22.06 3.61h18.06l4 6 4-6z"
            fill="#2870b5"
          />
          <g fill="#10004c">
            <path d="m64.26 54.3c0-5.65-3.28-10.22-7.33-10.22s-7.33 4.57-7.33 10.22a12.82 12.82 0 0 0 .11 1.7h14.45a14.92 14.92 0 0 0 .1-1.7z" />
            <path d="m90.36 54.3c0-5.65-3.29-10.22-7.34-10.22s-7.33 4.57-7.33 10.22a14.91 14.91 0 0 0 .11 1.7h14.45a14.91 14.91 0 0 0 .11-1.7z" />
          </g>
        </svg>
      );
    } else if (color) {
      return (
        <svg
          {...elementProps}
          viewBox="0 0 140 140"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <pattern
            id={`${id}-a`}
            height="4"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 4 4"
            width="4"
          >
            <path d="m0 0h4v4h-4z" fill="none" />
            <circle cx="3" cy="4" fill="#f17732" r=".35" />
            <circle cx="1" cy="4" fill="#f17732" r=".35" />
            <circle cx="4" cy="2" fill="#f17732" r=".35" />
            <circle cx="2" cy="2" fill="#f17732" r=".35" />
            <circle cy="2" fill="#f17732" r=".35" />
            <circle cx="3" fill="#f17732" r=".35" />
            <circle cx="1" fill="#f17732" r=".35" />
          </pattern>
          <pattern
            id={`${id}-b`}
            height="4"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 4 4"
            width="4"
          >
            <path d="m0 0h4v4h-4z" fill="none" />
            <circle cx="3" cy="4" fill="#99052e" r=".35" />
            <circle cx="1" cy="4" fill="#99052e" r=".35" />
            <circle cx="4" cy="2" fill="#99052e" r=".35" />
            <circle cx="2" cy="2" fill="#99052e" r=".35" />
            <circle cy="2" fill="#99052e" r=".35" />
            <circle cx="3" fill="#99052e" r=".35" />
            <circle cx="1" fill="#99052e" r=".35" />
          </pattern>
          <circle cx="70" cy="70" fill="#10004c" r="70" />
          <path
            d="m31.28 85.46h9.59a6.18 6.18 0 0 1 6.13 6.18v3a4.26 4.26 0 0 1 -4.26 4.26h-13.38a4.26 4.26 0 0 1 -4.26-4.3v-3a6.18 6.18 0 0 1 6.18-6.18z"
            fill="#99052e"
          />
          <path
            d="m98.87 85.32h9.59a6.18 6.18 0 0 1 6.18 6.18v3a4.26 4.26 0 0 1 -4.26 4.26h-13.38a4.26 4.26 0 0 1 -4.26-4.26v-3a6.18 6.18 0 0 1 6.13-6.18z"
            fill="#99052e"
          />
          <path
            d="m82.56 36.82h-25.27c-7.06 0-17.45 12.07-17.45 19.13s10.39 19.13 17.45 19.13h25.27c7.06 0 17.6-12.07 17.6-19.13s-10.54-19.13-17.6-19.13z"
            fill="#9da1af"
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.46-8.53 16.77-18.76l60.46-.07c5.92 10.23 16.77 8.48 16.77 18.83v13.37a6.11 6.11 0 0 1 -6.07 6.09z"
            fill="#feca1e"
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.46-8.53 16.77-18.76l60.46-.07c5.92 10.23 16.77 8.48 16.77 18.83v13.37a6.11 6.11 0 0 1 -6.07 6.09z"
            fill={`url(#${id}-a)`}
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.74-8.86 16.77-18.76 3.05 28.65 72.43 31 77.23 32.13a6.09 6.09 0 0 1 -6.07 6.09z"
            fill="#f17732"
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.74-8.86 16.77-18.76 3.05 28.65 72.43 31 77.23 32.13a6.09 6.09 0 0 1 -6.07 6.09z"
            fill={`url(#${id}-b)`}
          />
          <path
            d="m48.89 62.72h42.22c1.74 0 4.93 1 4.54 3.16 2.35-2.61 4.51-6.27 4.51-9.93 0-7.06-10.54-19.13-17.6-19.13h-25.27c-7.06 0-17.45 12-17.45 19.06 0 3.73 2.16 7.39 4.49 10-.33-1.88 2.81-3.16 4.56-3.16z"
            fill="#fde5cb"
          />
          <path
            d="m42 56c0-7.06 8.23-19.13 15.29-19.13h25.27c7.06-.05 15.44 12.02 15.44 19.13z"
            fill="#7c8194"
          />
          <path
            d="m42 56c0-7.06 8.23-19.13 15.29-19.13h25.27c7.06-.05 15.44 12.02 15.44 19.13z"
            fill="#2870b5"
          />
          <rect
            fill="#feca1e"
            height="6.05"
            rx="3.03"
            width="10.17"
            x="29.67"
            y="48.05"
          />
          <rect
            fill="#feca1e"
            height="6.05"
            rx="3.03"
            width="9.76"
            x="100.16"
            y="48.05"
          />
          <ellipse cx="70" cy="81.52" fill="#6b7186" rx="26.04" ry="7.7" />
          <g fill="#10004c">
            <ellipse cx="70" cy="81.52" rx="26.04" ry="7.7" />
            <path d="m38.36 77.3-8.47-.22s-.38.79-1 .87a3.43 3.43 0 0 1 -3.8-3.44l.13-2.86c.09-1 1-1.42 2.05-1.19 10.48 2.24 13.32 4.07 13.8 5.42.33.9-.7 1.42-2.71 1.42z" />
            <path d="m101.46 77.3 8.47-.22s.38.79 1 .87a3.43 3.43 0 0 0 3.8-3.44l-.13-2.86c-.09-1-1-1.42-2-1.19-10.48 2.24-13.32 4.07-13.8 5.42-.38.9.65 1.42 2.66 1.42z" />
          </g>
          <path
            d="m92.23 94.69-22.23.58-22.23-.58c-2.19 0-3-3.19-3-3.19l25.23 1.15 25.2-1.15s-.78 3.19-2.97 3.19z"
            fill="#99052e"
          />
          <path
            d="m41.58 94.19-13.58-2.54c-1.77-.33-3-2.42-2.74-4.64l.1-.86 13.63 2.53c1.77.33 3 2.42 2.74 4.64z"
            fill="#99052e"
          />
          <path
            d="m98.14 94.19 13.62-2.54c1.78-.33 3-2.42 2.75-4.64l-.11-.86-13.62 2.53c-1.78.32-3.01 2.42-2.78 4.64z"
            fill="#99052e"
          />
          <path
            d="m93.41 78.14c-4.22-2.56-13.12-4.33-23.41-4.33s-19.19 1.77-23.41 4.33h18.92l4.49 6.51 4.49-6.51z"
            fill="#5fcbeb"
          />
          <path
            d="m92.06 77.42c-4.61-2.16-12.76-3.61-22.06-3.61s-17.45 1.45-22.06 3.61h18.06l4 6 4-6z"
            fill="#2870b5"
          />
          <path
            d="m64.26 54.3c0-5.65-3.28-10.22-7.33-10.22s-7.33 4.57-7.33 10.22a12.82 12.82 0 0 0 .11 1.7h14.45a14.92 14.92 0 0 0 .1-1.7z"
            fill="#10004c"
          />
          <path
            d="m90.36 54.3c0-5.65-3.29-10.22-7.34-10.22s-7.33 4.57-7.33 10.22a14.91 14.91 0 0 0 .11 1.7h14.45a14.91 14.91 0 0 0 .11-1.7z"
            fill="#10004c"
          />
        </svg>
      );
    } else if (draft) {
      return (
        <svg
          {...elementProps}
          viewBox="0 0 140 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="70" cy="70" fill="#5b6279" r="70" />
          <path
            d="m31.28 85.46h9.59a6.18 6.18 0 0 1 6.13 6.18v3a4.26 4.26 0 0 1 -4.26 4.26h-13.38a4.26 4.26 0 0 1 -4.26-4.3v-3a6.18 6.18 0 0 1 6.18-6.14z"
            fill="#7c8194"
          />
          <path
            d="m98.87 85.32h9.59a6.18 6.18 0 0 1 6.18 6.18v3a4.26 4.26 0 0 1 -4.26 4.26h-13.38a4.26 4.26 0 0 1 -4.26-4.26v-3a6.18 6.18 0 0 1 6.18-6.18z"
            fill="#7c8194"
          />
          <path
            d="m82.56 36.82h-25.27c-7.06 0-17.45 12.07-17.45 19.13s10.39 19.13 17.45 19.13h25.27c7.06 0 17.6-12.07 17.6-19.13s-10.54-19.13-17.6-19.13z"
            fill="#9da1af"
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.46-8.53 16.77-18.76l60.46-.07c5.92 10.23 16.77 8.48 16.77 18.83v13.37a6.11 6.11 0 0 1 -6.07 6.09z"
            fill="#cdcfd6"
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.74-8.86 16.77-18.76 3.05 28.65 72.43 31 77.23 32.13a6.09 6.09 0 0 1 -6.07 6.09z"
            fill="#bdc0c9"
          />
          <path
            d="m48.89 62.72h42.22c1.74 0 4.93 1 4.54 3.16 2.35-2.61 4.51-6.27 4.51-9.93 0-7.06-10.54-19.13-17.6-19.13h-25.27c-7.06 0-17.45 12-17.45 19.06 0 3.73 2.16 7.39 4.49 10-.33-1.88 2.81-3.16 4.56-3.16z"
            fill="#eeeff1"
          />
          <path
            d="m42 56c0-7.06 8.23-19.13 15.29-19.13h25.27c7.06-.05 15.44 12.02 15.44 19.13z"
            fill="#7c8194"
          />
          <path
            d="m42 56c0-7.06 8.23-19.13 15.29-19.13h25.27c7.06-.05 15.44 12.02 15.44 19.13z"
            fill="#8c91a1"
          />
          <rect
            fill="#cdcfd6"
            height="6.05"
            rx="3.03"
            width="10.17"
            x="29.67"
            y="48.05"
          />
          <rect
            fill="#cdcfd6"
            height="6.05"
            rx="3.03"
            width="9.76"
            x="100.16"
            y="48.05"
          />
          <ellipse cx="70" cy="81.52" fill="#6b7186" rx="26.04" ry="7.7" />
          <ellipse cx="70" cy="81.52" fill="#5b6279" rx="26.04" ry="7.7" />
          <path
            d="m38.36 77.3-8.47-.22s-.38.79-1 .87a3.43 3.43 0 0 1 -3.8-3.44l.13-2.86c.09-1 1-1.42 2.05-1.19 10.48 2.24 13.32 4.07 13.8 5.42.33.9-.7 1.42-2.71 1.42z"
            fill="#6b7186"
          />
          <path
            d="m101.46 77.3 8.47-.22s.38.79 1 .87a3.43 3.43 0 0 0 3.8-3.44l-.13-2.86c-.09-1-1-1.42-2-1.19-10.48 2.24-13.32 4.07-13.8 5.42-.38.9.65 1.42 2.66 1.42z"
            fill="#6b7186"
          />
          <g fill="#8c91a1">
            <path d="m92.23 94.69-22.23.58-22.23-.58c-2.19 0-3-3.19-3-3.19l25.23 1.15 25.2-1.15s-.78 3.19-2.97 3.19z" />
            <path d="m41.58 94.19-13.58-2.54c-1.77-.33-3-2.42-2.74-4.64l.1-.86 13.63 2.53c1.77.33 3 2.42 2.74 4.64z" />
            <path d="m98.14 94.19 13.62-2.54c1.78-.33 3-2.42 2.75-4.64l-.11-.86-13.62 2.53c-1.78.32-3.01 2.42-2.78 4.64z" />
          </g>
          <path
            d="m93.41 78.14c-4.22-2.56-13.12-4.33-23.41-4.33s-19.19 1.77-23.41 4.33h18.92l4.49 6.51 4.49-6.51z"
            fill="#adb0bc"
          />
          <path
            d="m92.06 77.42c-4.61-2.16-12.76-3.61-22.06-3.61s-17.45 1.45-22.06 3.61h18.06l4 6 4-6z"
            fill="#8c91a1"
          />
          <path
            d="m64.26 54.3c0-5.65-3.28-10.22-7.33-10.22s-7.33 4.57-7.33 10.22a12.82 12.82 0 0 0 .11 1.7h14.45a14.92 14.92 0 0 0 .1-1.7z"
            fill="#5b6279"
          />
          <path
            d="m90.36 54.3c0-5.65-3.29-10.22-7.34-10.22s-7.33 4.57-7.33 10.22a14.91 14.91 0 0 0 .11 1.7h14.45a14.91 14.91 0 0 0 .11-1.7z"
            fill="#5b6279"
          />
        </svg>
      );
    } else {
      return (
        <svg
          {...elementProps}
          viewBox="0 0 140 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="70" cy="70" fill="#10004c" r="70" />
          <path
            d="m31.28 85.46h9.59a6.18 6.18 0 0 1 6.13 6.18v3a4.26 4.26 0 0 1 -4.26 4.26h-13.38a4.26 4.26 0 0 1 -4.26-4.3v-3a6.18 6.18 0 0 1 6.18-6.18z"
            fill="#3f336f"
          />
          <path
            d="m98.87 85.32h9.59a6.18 6.18 0 0 1 6.18 6.18v3a4.26 4.26 0 0 1 -4.26 4.26h-13.38a4.26 4.26 0 0 1 -4.26-4.26v-3a6.18 6.18 0 0 1 6.18-6.18z"
            fill="#3f336f"
          />
          <path
            d="m82.56 36.82h-25.27c-7.06 0-17.45 12.07-17.45 19.13s10.39 19.13 17.45 19.13h25.27c7.06 0 17.6-12.07 17.6-19.13s-10.54-19.13-17.6-19.13z"
            fill="#9da1af"
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.46-8.53 16.77-18.76l60.46-.07c5.92 10.23 16.77 8.48 16.77 18.83v13.37a6.11 6.11 0 0 1 -6.07 6.09z"
            fill="#b7b3c9"
          />
          <path
            d="m110.93 94.22-17.63 2.78-23.15.58-23-.58-18-2.73a6.11 6.11 0 0 1 -6.15-6.14v-13.37c0-10.35 10.74-8.86 16.77-18.76 3.05 28.65 72.43 31 77.23 32.13a6.09 6.09 0 0 1 -6.07 6.09z"
            fill="#9f99b7"
          />
          <path
            d="m48.89 62.72h42.22c1.74 0 4.93 1 4.54 3.16 2.35-2.61 4.51-6.27 4.51-9.93 0-7.06-10.54-19.13-17.6-19.13h-25.27c-7.06 0-17.45 12-17.45 19.06 0 3.73 2.16 7.39 4.49 10-.33-1.88 2.81-3.16 4.56-3.16z"
            fill="#e7e6ed"
          />
          <path
            d="m42 56c0-7.06 8.23-19.13 15.29-19.13h25.27c7.06-.05 15.44 12.02 15.44 19.13z"
            fill="#7c8194"
          />
          <path
            d="m42 56c0-7.06 8.23-19.13 15.29-19.13h25.27c7.06-.05 15.44 12.02 15.44 19.13z"
            fill="#584d82"
          />
          <rect
            fill="#b7b3c9"
            height="6.05"
            rx="3.03"
            width="10.17"
            x="29.67"
            y="48.05"
          />
          <rect
            fill="#b7b3c9"
            height="6.05"
            rx="3.03"
            width="9.76"
            x="100.16"
            y="48.05"
          />
          <ellipse cx="70" cy="81.52" fill="#6b7186" rx="26.04" ry="7.7" />
          <ellipse cx="70" cy="81.52" fill="#10004c" rx="26.04" ry="7.7" />
          <path
            d="m38.36 77.3-8.47-.22s-.38.79-1 .87a3.43 3.43 0 0 1 -3.8-3.44l.13-2.86c.09-1 1-1.42 2.05-1.19 10.48 2.24 13.32 4.07 13.8 5.42.33.9-.7 1.42-2.71 1.42z"
            fill="#281a5e"
          />
          <path
            d="m101.46 77.3 8.47-.22s.38.79 1 .87a3.43 3.43 0 0 0 3.8-3.44l-.13-2.86c-.09-1-1-1.42-2-1.19-10.48 2.24-13.32 4.07-13.8 5.42-.38.9.65 1.42 2.66 1.42z"
            fill="#281a5e"
          />
          <g fill="#584d82">
            <path d="m92.23 94.69-22.23.58-22.23-.58c-2.19 0-3-3.19-3-3.19l25.23 1.15 25.2-1.15s-.78 3.19-2.97 3.19z" />
            <path d="m41.58 94.19-13.58-2.54c-1.77-.33-3-2.42-2.74-4.64l.1-.86 13.63 2.53c1.77.33 3 2.42 2.74 4.64z" />
            <path d="m98.14 94.19 13.62-2.54c1.78-.33 3-2.42 2.75-4.64l-.11-.86-13.62 2.53c-1.78.32-3.01 2.42-2.78 4.64z" />
          </g>
          <path
            d="m93.41 78.14c-4.22-2.56-13.12-4.33-23.41-4.33s-19.19 1.77-23.41 4.33h18.92l4.49 6.51 4.49-6.51z"
            fill="#adb0bc"
          />
          <path
            d="m92.06 77.42c-4.61-2.16-12.76-3.61-22.06-3.61s-17.45 1.45-22.06 3.61h18.06l4 6 4-6z"
            fill="#584d82"
          />
          <path
            d="m64.26 54.3c0-5.65-3.28-10.22-7.33-10.22s-7.33 4.57-7.33 10.22a12.82 12.82 0 0 0 .11 1.7h14.45a14.92 14.92 0 0 0 .1-1.7z"
            fill="#10004c"
          />
          <path
            d="m90.36 54.3c0-5.65-3.29-10.22-7.34-10.22s-7.33 4.57-7.33 10.22a14.91 14.91 0 0 0 .11 1.7h14.45a14.91 14.91 0 0 0 .11-1.7z"
            fill="#10004c"
          />
        </svg>
      );
    }
  }
}

CarCircleIllustration.propTypes = {
  /** The width of the illustration with unit sizing (px, rem, etc). */
  width: PropTypes.string,
  /** The height of the illustration with unit sizing (px, rem, etc). */
  height: PropTypes.string,
  /** Determines if the illustration should default to the illuminated state. */
  illuminate: PropTypes.bool,
  /** Determines if the color variant should be shown or not. */
  color: PropTypes.bool,
  /** Determines if the draft variant should be shown or not. */
  draft: PropTypes.bool,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional inline styles to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** Allows you to adjust the id of the SVG, this can be useful when using multiple of the same SVG on the same page. */
  id: PropTypes.string,
};

CarCircleIllustration.defaultProps = {
  height: '14rem',
  width: '14.4rem',
  id: 'car-circle-illustration',
};

export default CarCircleIllustration;
