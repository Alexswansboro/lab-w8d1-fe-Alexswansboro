import React, { Component } from 'react'

import TextInput from './TextInput'
import TextOption from './TextOption'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }

    this.updateText = this.updateText.bind(this)
    this.handleState = this.handleState.bind(this)
  }

  updateText (event) {
    this.setState({ text: event.target.value })
  }
  handleState (optionSet) {
    let selectedOptions = [...optionSet]
    this.setState(state => ({ options: selectedOptions }))
    console.log(this.state.options, 'state options')
  }

  render () {
    return (
      <div>
        <TextInput updateText={this.updateText} text={this.state.text} />
        <TextOption handleState={this.handleState} />
      </div>)
    // const text = this.state.text
    // const shrunkText = this.shrinkText()
    // return (
    //   <div className='App container'>
    //     <h1>TweetShrink</h1>
    //     <div className='row'>
    //       <div className='col'>
    //         {/* TextEntry */}
    //         <textarea
    //           className='TextEntry-textbox'
    //           placeholder='What do you want to shrink?'
    //           onChange={this.updateText}
    //           value={text} />
    //         <div>
    //           {text && `${text.length} characters`}
    //         </div>
    //         {/* end TextEntry */}
    //       </div>
    //       <div className='col'>
    //         {/* ShrunkText */}
    //         <div className='TextEntry-shrunk-text'>
    //           {shrunkText}
    //         </div>
    //         <div>
    //           {shrunkText && `${shrunkText.length} characters`}
    //         </div>
    //         {/* end ShrunkText */}
    //       </div>
    //     </div>
    //     <div className='row options'>
    //       <div className='col-12'>
    //         <h4>Options</h4>
    //       </div>
    //       {/* TextOptions */}
    //       {textOptions.map((option, idx) => (
    //         <div key={idx} className='col-6'>
    //           {/* TextOption */}
    //           <label htmlFor={option.id}>
    //             <input type='checkbox' id={option.id} onChange={this.setOption(option.id)} /> {' ' + option.label}
    //           </label>
    //           {/* end TextOption */}
    //         </div>
    //       ))}
    //       {/* end TextOptions */}
    //     </div>
    //   </div>
    // )
  }
}

export default App
