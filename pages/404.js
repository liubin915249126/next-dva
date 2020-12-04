import React from 'react';
import WithDva from '../utils/store';

class Page extends React.Component {
  // async componentDidMount(props) {
  //   const {
  //     pathname, query, isServer, store,
  //   } = props;
  //   await props.store.dispatch({ type: 'index/init' });
  //   return {
  //     pathname, query, isServer, dvaStore: store,
  //   };
  // }
  render(){
    // const { index } = this.props;
    // const { name, count } = index;
    return <div>
      {/* {name}, {count} */}
      404
    </div>
  }
}

// export default WithDva((state) => { return { index: state.index }; })(Page);

export default Page;