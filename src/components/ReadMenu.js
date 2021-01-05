import React from 'react';
import { Menu } from './menu';

export class ReadMenu extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Menu menu={this.state.menu}></Menu>
            </div>
        );
    }
}