import React from 'react';
import WithDva from '../utils/store';

class Page extends React.Component {
  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    const {
      pathname, query, isServer, store,
    } = props;
    console.log('get init props',pathname, query, isServer, store,);
    // dispatch effects to fetch data here
    await props.store.dispatch({ type: 'index/init' });
    return {
      // dont use store as property name, it will confilct with initial store
      pathname, query, isServer, dvaStore: store,
    };
  }
  render(){
    const { index } = this.props;
    const { name, count } = index;
    return <div>
      {name}, {count}
    </div>
  }
}

export default WithDva((state) => { return { index: state.index }; })(Page);
