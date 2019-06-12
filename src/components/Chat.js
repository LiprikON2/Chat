import React from 'react'

import Header from './Header.js'
import Messages from './Messages.js'
import Submit from './Submit.js'


export default class App extends React.Component {

    state = {
        msg: '',
        username: 'Anon',
        allMessages: [{time: '12:00', name: 'Lee', msg: 'Helllo'}, {time: '12:00', name: 'Lee', msg: 'это я с мобилки его слушаю'}],
        submitCorrection: 80
    }
    
    static Header = Header
    static Messages = Messages
    static Submit = Submit

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { msg, username } = this.state
        if (msg) {
            this.setState(prevState => ({
                msg: '',
                allMessages: [...prevState.allMessages, {time: new Date().toTimeString().slice(0, 5), name: username, msg}]
            }))
        }

    }

    handleResize = () => {
        // Making textarea grow upwards
        // BUG: doesnt work without setTimeout
        // BUG: jagged animation
        setTimeout(
            () => {
                // 24 is margin/padding correction
                const lineHeight = document.getElementById('input').scrollHeight + 24
                this.setState({
                    submitCorrection: lineHeight
                })
            }
        , 0)
    }

    // New line is SHIFT + ENTER instead of ENTER
    onEnterPress = (event) => {
        if (event.keyCode === 13 && event.shiftKey === false) {
            event.preventDefault();
            document.getElementById('submit').click()
        }
    }

    render() {
        const { msg, username, allMessages, submitCorrection } = this.state
        const { children } = this.props
        return (
            <div className="chat" style={{gridTemplateRows: `100px auto ${submitCorrection}px`}}>
                {React.Children.map(children, child => {
                    if (child.type.displayName === 'Header') {
                        return React.cloneElement(child)
                    }   

                    if (child.type.displayName === 'Messages') {
                        return React.cloneElement(child, { allMessages })
                    }

                    if (child.type.displayName === 'Submit') {
                        return React.cloneElement(child, {
                            username,
                            msg,
                            handleChange: this.handleChange,
                            handleSubmit: this.handleSubmit,
                            handleResize: this.handleResize,
                            onEnterPress: this.onEnterPress
                        })
                    }

                })}
            </div>
        )
    }
}
// ref: https://www.jakewiesler.com/blog/compound-component-basics/