import React, { Component } from 'react'
// import textOptions from './textOptions'

class ShrinkText extends Component {
  render () {
    const shrunkText = this.props.shrinkText
    // console.log(this.props.shrinkText(), 'Im here')
    return (
      <div className='col'>
        {/* ShrunkText */}
        <div className='TextEntry-shrunk-text'>
          {shrunkText}
        </div>
        <div>
          {shrunkText && `${shrunkText.length} characters`}
        </div>
        {/* end ShrunkText */}
      </div>
    )
  }
}

export default ShrinkText
