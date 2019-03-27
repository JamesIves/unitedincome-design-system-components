/** @module Ranking */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ArrowEllipsisIcon from '~components/atoms/icons/ArrowEllipsisIcon/ArrowEllipsisIcon';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {dsmColors as colors} from '~constants/js/colors';

import './Ranking.scss';

/** Renders a list which allows  */
class Ranking extends Component {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
    };

    this.changeOrder = this.changeOrder.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  /** Adjusts the order of the items array on button press or drag event.
   * @param {integer} fromIndex - The original index of the item.
   * @param {integer} toIndex - The new placement of the item.
   * @returns {undefined}
   */
  changeOrder(fromIndex, toIndex) {
    const clonedArray = this.state.items;
    const element = clonedArray[fromIndex];

    clonedArray.splice(fromIndex, 1);
    clonedArray.splice(toIndex, 0, element);

    // Sets the cloned array to state with the updated indexes.
    this.setState({
      items: clonedArray,
    });

    if (this.props.onChange) {
      this.props.onChange(this.props.name, clonedArray);
    }
  }

  /** Method which fires when the user is done dragging the item.
   * @param {object} result - The result of the dragon.
   * @returns {undefined}
   */
  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    this.changeOrder(result.source.index, result.destination.index);
  }

  /** @inheritdoc */
  render() {
    const {items} = this.props;

    return (
      <div className="ranking-list">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(droppableProvided, droppableSnapshot) => (
              <ol
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className={
                  droppableSnapshot.isDraggingOver ? 'dragging' : 'idle'
                }
              >
                {items.map((item, index) => (
                  <Draggable
                    key={item.value}
                    draggableId={item.value}
                    index={index}
                    isDragDisabled={!item.movable}
                  >
                    {(draggableProvided, draggableSnapshot) => {
                      const innerClasses = classNames({
                        movable: item.movable,
                        'uic--position-relative': true,
                        'uic--h-100': true,
                        inner: true,
                        'focus-control': item.focus,
                      });

                      const rankingControlClasses = classNames({
                        'ranking-controls': true,
                        'default-control': !item.focus,
                      });

                      const liClasses = classNames({
                        dragging: draggableSnapshot.isDragging,
                        idle: !draggableSnapshot.isDragging,
                        'focus-control': item.focus,
                      });

                      return (
                        <li
                          key={index}
                          tabIndex={index + 1}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                          className={liClasses}
                        >
                          {draggableProvided.placeholder}
                          <div className={innerClasses}>
                            {item.movable && (
                              <div className={rankingControlClasses}>
                                <div
                                  className="up uic--position-absolute uic--w-100"
                                  onClick={() =>
                                    this.changeOrder(index, index - 1)
                                  }
                                  onKeyDown={() =>
                                    this.changeOrder(index, index - 1)
                                  }
                                  role="button"
                                  tabIndex={index + 1}
                                >
                                  <ArrowEllipsisIcon
                                    height="24"
                                    width="24"
                                    fill={colors.royal}
                                  />
                                </div>
                                <div
                                  className="down uic--position-absolute uic--w-100"
                                  onClick={() =>
                                    this.changeOrder(index, index + 1)
                                  }
                                  onKeyDown={() =>
                                    this.changeOrder(index, index + 1)
                                  }
                                  role="button"
                                  tabIndex={index + 1}
                                >
                                  <ArrowEllipsisIcon
                                    height="24"
                                    width="24"
                                    fill={colors.royal}
                                  />
                                </div>
                              </div>
                            )}

                            <span className="uic--d-flex uic--justify-content-between">
                              <span className="index uic--position-absolute">
                                {index + 1}
                              </span>
                              <label>{item.label}</label>

                              {item.secondaryLabel && (
                                <span className="label-value-secondary">
                                  {item.secondaryLabel}
                                </span>
                              )}
                            </span>
                          </div>
                        </li>
                      );
                    }}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </ol>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

Ranking.propTypes = {
  /** The name of the ranking list. */
  name: PropTypes.string.isRequired,
  /** The items to appear in the ranking list. */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** The option label. */
      label: PropTypes.string.isRequired,
      /** The value of the option. */
      value: PropTypes.string.isRequired,
      /** The secondary label to appear to the right of the item. *I*/
      secondaryLabel: PropTypes.string,
      /** Determines if the item in the list should be movable or not. */
      movable: PropTypes.bool,
      /** Set to true if this is the only item in the list which is movable, and you'd like to always display the controls. */
      focus: PropTypes.bool,
    })
  ).isRequired,
  /** Handler which passes back the name, and the re-ordered array on change. */
  onChange: PropTypes.func.isRequired,
};

export default Ranking;
