import React from "react";

class Api extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		error: null,
		isLoaded: false,
		items: []
	  };
	}

	componentDidMount() {
	  fetch("https://api.odpt.org/api/v4/odpt:TrainTimetable?odpt:operator=odpt.Operator:TamaMonorail&acl:consumerKey=b0b1a70f9bf8ae7fb48c213c049b7a82cb0e308e7f2696620540046c635ce0bc")
		.then(res => res.json())
		.then(
		  (result) => {
			this.setState({
			  isLoaded: true,
			  items: result.items
			});
		  },
		  // 補足：コンポーネント内のバグによる例外を隠蔽しないためにも
		  // catch()ブロックの代わりにここでエラーハンドリングすることが重要です
		  (error) => {
			this.setState({
			  isLoaded: true,
			  error
			});
		  }
		)
	}

	render() {
	  const { error, isLoaded, items } = this.state;
	  if (error) {
		return <div>Error: {error.message}</div>;
	  } else if (!isLoaded) {
		return <div>Loading...</div>;
	  } else {
		return (
			<h1>osikko</h1>
		);
	  }
	}
  }

  export default Api;