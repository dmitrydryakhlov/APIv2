import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        // this.textInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.keyword.value);
        fetch("http://localhost:3001", {
            method: "POST",
            body: JSON.stringify({
                "keyword": this.keyword.value
            }),
            headers: { "Content-Type":"application/json" },
            mode: "no-cors"
        })
            .then((res) => {
                // return res.json();
            })
            .then((body) => {
                console.log(body);
            });
    }
    /* fetch('/todo/meterla', {
      method: 'POST',
      body: JSON.stringify({
        task: self.refs.task.value
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
    return response.json()
  }).then((body) => {
    console.log(body);
    alert(self.refs.task.value)
  });*/
    /* makeRequest(keyword) {
    const url = `${'https://newsapi.org/v2/top-headlines?' +
          'q='}${  keyword  }&` +
          'from=2018-05-11&' +
          'sortBy=popularity&' +
          'apiKey=d2567fbf4c124a28bd3df0189776bd87';
    const req = new Request(url);

    fetch(req).then(dataWrapedByPromise =>
      dataWrapedByPromise.json())
      .then(data => {
        console.log(data);
        const oldData = this.state.data;

        oldData.data = data;
        this.setState(oldData);
        return data;
      });
  } */

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor = 'keyword'>Search</label><br />
                <input
                    ref = {(ref) => {
                        this.keyword = ref;
                    }
                    }
                    id = 'keyword'
                    name = 'keyword'
                    type = 'text'
                    placeholder = 'fresh news'
                /><br />
                <button>Search</button>
            </form>);
    }
}

export default Search;
