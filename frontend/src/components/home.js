import React from "react";

class Home extends React.Component{
    render() {
        return (
            <div className="home-page">
                <h1>The app is now using Redux</h1>
                <p>
                      While the <a href="#">CSS-Tricks article</a> for
                      this guide covers an explanation of <strong>Redux</strong>, there
                      are still many implementation details in this code that the article
                      doesn't cover. For a better understanding of those details, see
                      the <a href="https://github.com/bradwestfall/CSS-Tricks-React-Series">Github documentation</a> for
                      this guide.
                </p>
            </div>
        );
    }
}

export default Home;
