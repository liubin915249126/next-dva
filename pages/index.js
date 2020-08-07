
import Link from 'next/link';
import React from 'react';
import WithDva from '../utils/store';

import {Button} from 'antd'
import styles from '~/style/index.less'
// import '~/common/common.less'

class Page extends React.Component {
  constructor(props){
    super(props)
    this.state={
      response:{}
    }
  }
  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    const {
      pathname, query, isServer, store,
    } = props;
    // console.log('get init props',pathname, query, isServer, store,);
    // dispatch effects to fetch data here
    // await props.store.dispatch({ type: 'index/init' });
    
    // const response1 = await fetch(`http://localhost:3000/index`,)
    // .then(response => response.json().then(data => data))
    
    return {
      // dont use store as property name, it will confilct with initial store
      pathname, query, isServer, dvaStore: store,
      queryString: Object.keys(query).join(''),
      response1:{}
    };
  }
  async componentDidMount () {
    // await props.store.dispatch({ type: 'index/getdata' });
    // const response = await window.fetch(`http://localhost:3000/index`)
    //     .then(response => response.json().then(data => data))
    // this.setState({ response })
  }
  render() {
    const { index,response1 } = this.props;

    const { name, count } = index;
    // console.log('rendered!!');
    const {response} = this.state;
    const array100 = new Array;
    for(let i=0;i<100;i++){
      array100.push(i)
    } 

    return (
      <div>
      Hi,{name}!! &nbsp;
        <p>count11:&nbsp; {count}</p>
        <p>
          <button onClick={() => { this.props.dispatch({ type: 'index/caculate', delta: 1 }); }} >
        plus
          </button>
        </p>
        <p>
          <button onClick={() => { this.props.dispatch({ type: 'index/caculate', delta: -1 }); }} >
          minus
          </button>
        </p>
        <div className={styles.large}>30</div>
        <div className="green">33333</div>
        <p>
          <Link href="/users">
            <a>Go to /users</a>
          </Link>
        </p>
        <div>green</div>
        <div>
          initail
          {response1.films}
        </div>
        <div>
          componentDidMount
          {response.films}
        </div>
        <div>
          {/* {array100.map(item=>{return <Button type="primary">Button</Button>})} */}
        </div>
      </div>
    );
  }
}

export default WithDva((state) => { return { index: state.index }; })(Page);
