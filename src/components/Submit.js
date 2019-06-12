import React from 'react'
import TextareaAutosize from 'react-autosize-textarea'

const Submit = ({handleChange, handleSubmit, msg, handleResize, onEnterPress}) => {
    
    return (
            <div className="chat-submit">
                <form onSubmit={handleSubmit} className="submit-form" id="form">
                    <TextareaAutosize  
                        type="text"
                        onChange={handleChange}
                        onResize={handleResize}
                        onKeyDown={onEnterPress}
                        name="msg"
                        value={msg}
                        className="form-input"
                        autoFocus
                        placeholder="Write a message..."
                        maxLength="400"
                        id="input"
                    />
                    <button id="submit" className="form-button">Submit</button>
                </form>
            </div>
        )
    }
Submit.displayName = 'Submit'
export default Submit

// ref: https://github.com/buildo/react-autosize-textarea