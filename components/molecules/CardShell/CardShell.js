/** @module CardShell */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Button from '~components/atoms/Button/Button';
import {maskEnum} from '~components/atoms/Input/Input';
import {colors} from '~constants/js/colors';

import './CardShell.scss';
import Spinner from '../../atoms/Spinner/Spinner';

/**
 * Validates children to see if it is valid
 * @param {array<Node>} children component
 * @returns {boolean} validity
 */
export const validateChildren = (children) => {
  const childValidity = React.Children.map(children, (child) => {
    let isChildValid = false;

    if (React.isValidElement(child)) {
      if (!child.props.disabled && child.props.required) {
        if (child.props.mask && child.props.isValid) {
          isChildValid =
            maskEnum[child.props.mask].regex.test(child.props.value) &&
            child.props.isValid();
        } else if (child.props.mask) {
          isChildValid = maskEnum[child.props.mask].regex.test(
            child.props.value
          );
        } else if (child.props.isValid) {
          isChildValid = child.props.isValid();
        } else if (Array.isArray(child.props.value)) {
          isChildValid = Boolean(child.props.value.length > 0);
        } else {
          isChildValid = Boolean(child.props.value);
        }
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
        isChildValid = false;
      } else {
        isChildValid = true;
      }

      // Check if element uses follow ups and if so validate those followups
      if (child.props.options) {
        const option = child.props.options.find(
          (opt) => opt.value === child.props.value
        );

        if (option && option.followup) {
          isChildValid = isChildValid && validateChildren([option.followup]);
        }
      }

      isChildValid = isChildValid && validateChildren(child.props.children);
    } else {
      isChildValid = true;
    }

    return isChildValid;
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

    this.state = {
      isInvalid: !validateChildren(props.children),
    };
  }

  /** @inheritdoc */
  componentDidUpdate() {
    const isInvalid = !validateChildren(this.props.children);
    if (this.state.isInvalid !== isInvalid) {
      this.setState({isInvalid});
    }
  }

  /**
   * Calls the onSubmit function from props
   * @param {object} e event
   * @returns {undefined}
   */
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e);
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
      isFetching,
      loading,
      summary,
      onChange,
    } = this.props;
    const {isInvalid} = this.state;

    const cardClass = classNames(
      {
        'uic--mcgonagall-card': true,
        'uic--w-100': true,
        'uic--active': !isCollapsed,
        'uic--collapsed': isCollapsed,
        'uic--error': hasError,
        'uic--position-relative': true,
      },
      className
    );

    return (
      <div className={cardClass}>
        {!isCollapsed && <div className="uic--active-border" />}

        {isCollapsed ? (
          summary
        ) : (
          <form onChange={onChange && this.onChange} onSubmit={this.onSubmit}>
            {children}

            {(beforeButton || afterButton || !hideButton) && (
              <div className="uic--card-after-content uic--d-flex uic--align-items-center uic--flex-column">
                {beforeButton && (
                  <div className="uic--card-before-button">{beforeButton}</div>
                )}

                {!hideButton &&
                  (isFetching ? (
                    <Spinner
                      fill={colors['violet-blue']}
                      height="25"
                      width="25"
                    />
                  ) : (
                    <Button
                      className="uic--card-submit"
                      disabled={isInvalid || disabled}
                      isLoading={loading}
                      light
                      type="submit"
                      variant="secondary"
                    >
                      {buttonText}
                    </Button>
                  ))}

                {afterButton && (
                  <div className="uic--card-after-button uic--d-flex uic--align-items-center uic--flex-column">
                    {afterButton}
                  </div>
                )}
              </div>
            )}
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
  /** Additional class names to apply */
  className: PropTypes.string,
  /** Force disables the button. */
  disabled: PropTypes.bool,
  /** Displays the error state of the card. */
  hasError: PropTypes.bool,
  /** Hides the button on the card. */
  hideButton: PropTypes.bool,
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: PropTypes.bool,
  /** Shows spinner in place of card button, used when need to prevent actions while card is loading  */
  isFetching: PropTypes.bool,
  /** Shows a loading indicator on the button for actions after the button is clicked. */
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
