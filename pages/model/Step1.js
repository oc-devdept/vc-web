 import React, { Component } from 'react';

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state={data:null}
  }
  componentDidMount() { 
    console.log(this.props);
    // const id = this.props.match.params.id // we grab the ID from the URL
    // const {data} = fetch(`http://159.65.14.175:3001/api/categories/${id}`);
    // this.setState({data})
  }
  render() {
    return (
      <div>
        {/* <h2>{data}</h2> */}
        <h2>asdasdsa</h2>
    <h2>{this.props.name}</h2>
      </div>
    )
  }
}

export default Step1

// Step1.getInitialProps = async function({ctx}) {
//   console.log('step1 getInitialProps');
//   // const { id } = ctx.query;
//   // // console.log('getInitialProps')
//   console.log(ctx)
//   // const res = await fetch(`http://159.65.14.175:3001/api/categories/${id}`);
//   // const show = await res.json();
//   return {};
// };