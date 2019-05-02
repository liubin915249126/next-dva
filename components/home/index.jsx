import React from 'react';

export default class Home extends React.Component{
    render(){
        const {children} = this.props;
        return <div>
            {children}
            <div>
             123456
            </div>
        </div>
    }
}