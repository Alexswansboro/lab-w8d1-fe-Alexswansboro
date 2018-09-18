import React, { Component } from 'react'
import textOptions from './textOptions'
import ShrinkText from './ShrinkText'

class TextOption extends Component {
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
  }setOption (option) {
    let { allOptions } = this.props
    console.log(allOptions, 'options')
    return (event) => {
      const value = event.target.checked
      const optionSet = new Set(this.props.options)
      if (value) {
        optionSet.add(option)
      } else {
        optionSet.delete(option)
      }
      this.props.handleState(optionSet)
    }
  }
  render () {
    return (
      <div className='row options'>
        <div className='col-12'>
          <h4>Options</h4>
        </div>
        {/* TextOptions */}
        {textOptions.map((option, idx) => (
          <div key={idx} className='col-6'>
            {/* TextOption */}
            <label htmlFor={option.id}>
              <input type='checkbox' id={option.id} onChange={this.setOption(option.id)} /> {' ' + option.label}
            </label>
            {/* end TextOption */}
          </div>
        ))}
        {/* end TextOptions */}
      </div>
    )
  }
}
export default TextOption
