import React from 'react';

export class Menu extends React.Component {

render() {
    return (
        <div>
            <h1>this is movies</h1>
            {console.log(this.props.menu)}
        </div>
    );
}
}