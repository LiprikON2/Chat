import React, { Component } from 'react';

import Chat from './components/Chat'

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Chat>
                    <Chat.Header />
                    <Chat.Messages />
                    <Chat.Submit />
                </Chat>
            </div>
        )
    }
}
