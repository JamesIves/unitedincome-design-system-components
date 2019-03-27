/** @module CardShell */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Button from '~components/atoms/Button/Button';
import {maskEnum} from '~components/atoms/Input/Input';

import './CardShell.scss';

/**
 * Validates children to see if it is valid
 * @param {array<Node>} children component
 * @returns {boolean} validity
 */
export const validateChildren = (children) => {
  const childValidity = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.props.required) {
        if (child.props.mask && child.props.isValid) {
          return (
            maskEnum[child.props.mask].regex.test(child.props.value) &&
            child.props.isValid()
          );
        } else if (child.props.mask) {
          return maskEnum[child.props.mask].regex.test(child.props.value);
        } else if (child.props.isValid) {
          return child.props.isValid();
        } else if (Array.isArray(child.props.value)) {
          return Boolean(child.props.value.length > 0);
        }
        return Boolean(child.props.value);
      } else if (
        (child.props.pattern &&
          !new RegExp(child.props.pattern).test(child.props.value)) ||
        (child.props.min && child.props.value < child.props.min) ||
        (child.props.max && child.props.value > child.props.max) ||
        (child.props.maxLength &&
          child.props.value &&
          child.props.value.length > child.props.maxLength) ||
        (child.props.isValid && !child.props.isValid())
      ) {
        return false;
      }
      return validateChildren(child.props.children);
    }
    return true;
  });

  if (childValidity) {
    return childValidity.reduce((a, b) => a && b, true);
  }
  return true;
};

/** CardShell Component */
class CardShell extends Component {
  /**
   * Standard react constructor method
   * @param {Object} props - component props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * Calls the onSubmit function from props
   * @param {object} e event
   * @returns {undefined}
   */
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  /**
   * Calls the onChange function from props with field name and value passed through
   * @param {object} e event
   * @returns {undefined}
   */
  onChange(e) {
    e.preventDefault();
    this.props.onChange(e.target.name, e.target.value);
  }

  /**
   * Standard render method
   * @returns {JSX} - react JSX
   */
  render() {
    const {
      afterButton,
      beforeButton,
      buttonText,
      children,
      className,
      disabled,
      hasError,
      hideButton,
      isCollapsed,
      loading,
      summary,
      onChange,
    } = this.props;

    const isInvalid = !validateChildren(children);

    const cardClass = classNames(
      {
        'mcgonagall-card': true,
        'uic--w-100': true,
        active: !isCollapsed,
        collapsed: isCollapsed,
        error: hasError,
      },
      className
    );

    return (
      <div className={cardClass}>
        {isCollapsed ? (
          summary
        ) : (
          <form onChange={onChange && this.onChange} onSubmit={this.onSubmit}>
            {children}

            <div className="card-after-content uic--d-flex uic--align-items-center uic--flex-column">
              {beforeButton && (
                <div className="card-before-button">{beforeButton}</div>
              )}

              {!hideButton && (
                <Button
                  className="card-submit"
                  disabled={isInvalid || disabled}
                  isLoading={loading}
                  light
                  type="submit"
                  variant="secondary"
                >
                  {buttonText}
                </Button>
              )}

              {afterButton && (
                <div className="card-after-button uic--d-flex uic--align-items-center uic--flex-column">
                  {afterButton}
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    );
  }
}

CardShell.propTypes = {
  /** To display something after the Submit button. */
  afterButton: PropTypes.node,
  /** To display something before the Submit button. */
  beforeButton: PropTypes.node,
  /** Changes the text in the Submit button. */
  buttonText: PropTypes.string,
  /** HTML element that should appear within the card when not collapsed. */
  children: PropTypes.node.isRequired,
  /** Additional class names to apply to the button. */
  className: PropTypes.string,
  /** Force disables the button. */
  disabled: PropTypes.bool,
  /** Displays the error state of the card. */
  hasError: PropTypes.bool,
  /** Hides the button on the card. */
  hideButton: PropTypes.bool,
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: PropTypes.bool,
  /** Shows a loading indicator on the button. */
  loading: PropTypes.bool,
  /** The handler to fire when a change happens. */
  onChange: PropTypes.func,
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: PropTypes.func.isRequired,
  /** The summary view that should display when the card is collapsed. */
  summary: PropTypes.node,
};

CardShell.defaultProps = {
  buttonText: 'Continue',
};

export default CardShell;
