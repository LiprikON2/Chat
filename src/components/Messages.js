import React from 'react'

const Messages = ({allMessages}) => (
    <div className="chat-messages">
        {allMessages.map((message, id) => {
            const {time, name, msg} = message
            return (
                <div key={id} className="messages-msg">
                    <strong><time>{time}</time>{` ― ${name}`}</strong>{`: ${msg}`}
                </div>
            )
        })}
    </div>
)

Messages.displayName = 'Messages'
export default Messages