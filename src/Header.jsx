import React from 'react';
import Button from './Button';

export default React.createClass({
  displayName: 'Header',
  propTypes: {
    label:          React.PropTypes.string.isRequired,
    labelId:        React.PropTypes.string,

    upDisabled:     React.PropTypes.bool.isRequired,
    prevDisabled:   React.PropTypes.bool.isRequired,
    nextDisabled:   React.PropTypes.bool.isRequired,
    onViewChange:   React.PropTypes.func.isRequired,
    onMoveLeft:     React.PropTypes.func.isRequired,
    onMoveRight:    React.PropTypes.func.isRequired,

    messages:       React.PropTypes.shape({
      moveBack:     React.PropTypes.string,
      moveForward:  React.PropTypes.string
    })
  },

  mixins: [
    require('./mixins/PureRenderMixin'),
    require('./mixins/RtlChildContextMixin')
  ],

  getDefaultProps(){
    return {
      messages: {
        moveBack:     'navigate back',
        moveForward:  'navigate forward'
      }
    }
  },

  render(){
    let {
        messages, label, labelId
      , onMoveRight, onMoveLeft, onViewChange
      , prevDisabled, upDisabled, nextDisabled } = this.props;

    let rtl = this.isRtl();

    return (
      <div className='rw-header'>
        <div className='rw-header-text'>1. Which day?</div>
        <Button
          className="rw-btn-left"
          onClick={onMoveLeft}
          disabled={prevDisabled}
          label={messages.moveBack}
          icon={`caret-${rtl ? 'right' : 'left'}`}
        />
        <Button
          id={labelId}
          onClick={onViewChange}
          className="rw-btn-view"
          disabled={upDisabled}
          aria-live="polite"
          aria-atomic="true"
        >
          { label }
        </Button>
        <Button
          className="rw-btn-right"
          onClick={onMoveRight}
          disabled={nextDisabled}
          label={messages.moveForward}
          icon={`caret-${rtl ? 'left' : 'right'}`}
        />
      </div>
    )
  }
})
