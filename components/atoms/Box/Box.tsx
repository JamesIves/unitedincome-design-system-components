/** @module Box */
import classNames from 'classnames';
import React, {PureComponent, CSSProperties} from 'react';
import CheckIcon from '../icons/CheckIcon/CheckIcon';
import './Box.scss';

type BoxPropsBase = {
  /* Additional class names to apply to the container. */
  className?: string;
  /** Additional style properties to apply to the container. */
  style?: CSSProperties;
  /** The title to appear on the box. */
  label?: string;
  /** The description to appear on the box. */
  description?: React.ReactNode;
  /** Determines if the box is selected or not. */
  selected?: boolean;
  /** The icon to display at the top of the card. */
  icon?: React.ReactType;
  /** Shows check icon */
  showCheck?: boolean;
  /** Disables the box */
  disabled?: boolean;
};

type BoxPropsNoClick = {
  /** The optional value of the selection. */
  value?: string;
};

type BoxPropsOnClick = {
  /** Click event handler which passes back the name and the id of the selected box. */
  onClick: (val: string) => void;
  /** The value of the selection. */
  value: string;
};

// Union these two interfaces to mimic the react-required-if prop type
type BoxProps = BoxPropsBase & (BoxPropsOnClick | BoxPropsNoClick);

/** Displays content within a simple box with an icon, label, and description. */
class Box extends PureComponent<BoxProps, {hover: boolean}> {
  constructor(props: BoxProps) {
    super(props);

    this.state = {
      hover: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  /**
   * Handles the click event within the box.
   * @param event - The event object.
   */
  handleClick(event: React.MouseEvent | React.KeyboardEvent) {
    event.stopPropagation();

    const propsWithOnClick = this.props as BoxPropsOnClick;

    if (propsWithOnClick) {
      return propsWithOnClick.onClick(propsWithOnClick.value);
    }
  }

  /**
   * Handles the hover event.
   */
  handleHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }

  render() {
    const {
      className,
      description,
      disabled,
      icon,
      label,
      selected,
      showCheck,
      style,
    } = this.props;

    const containerClasses = classNames(
      {
        'uic--box': true,
        'uic--text-center': true,
        'uic--box-highlighted': selected,
        'uic--box-hover': this.state.hover,
        'uic--box__disabled': disabled,
      },
      className,
    );

    const BoxIcon = icon ? icon : null;

    return (
      <div
        className={containerClasses}
        style={style}
        role="button"
        tabIndex={0}
        onClick={!disabled ? this.handleClick : undefined}
        onKeyPress={!disabled ? this.handleClick : undefined}
        onMouseEnter={!disabled ? this.handleHover : undefined}
        onMouseLeave={!disabled ? this.handleHover : undefined}
      >
        {BoxIcon && (
          <BoxIcon
            className="uic--box-illustration"
            illuminate={selected || this.state.hover}
            height="7.2rem"
            width="7.2rem"
            color={!disabled}
            draft={disabled}
          />
        )}

        {showCheck && (
          <CheckIcon
            height="3.2rem"
            width="3.2rem"
            className="uic--box__check"
          />
        )}
        {label && <h3 className="uic--box-header">{label}</h3>}
        {description && <p className="uic--box-description">{description}</p>}
      </div>
    );
  }
}

export default Box;
