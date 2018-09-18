import React, { Component } from 'react'

import textOptions from './textOptions'
import ShrinkText from './ShrinkText'
// import TextOption from './TextOption'

class TextInput extends Component {
  shrinkText () {
    let { text } = this.props
    if (!text) {
      return ''
    }

    let opObj
    this.props.options.forEach(option => {
      opObj = textOptions.find(o => o.id === option)
      console.log(opObj, 'options')
      if (opObj) {
        text = opObj.fn(text)
      }
    })
    return text
  }

  render () {
    const text = this.props.text
    // const shrunkText = this.shrinkText()
    return (
      <div className='App container'>
        <h1>TweetShrink</h1>
        <div className='row'>
          <div className='col'>
            {/* TextEntry */}
            <textarea
              className='TextEntry-textbox'
              placeholder='What do you want to shrink?'
              onChange={event => { this.props.updateText(event) }}
              value={text} />
            <div>
              {text && `${text.length} characters`}
            </div>
            {/* end TextEntry */}
          </div>
          <ShrinkText shrinkText={this.shrinkText.bind(this)} />
        </div>
      </div>
    )
  }
}

export default TextInput
