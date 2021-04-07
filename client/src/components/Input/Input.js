import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <div className="wrapFromButton">
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Aa"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <div className="sendButton">
      <button onClick={e => sendMessage(e)}></button>
    </div>
  </form>
  </div>
)

export default Input;