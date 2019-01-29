import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {quotes: state};
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random()*(this.props.quotes.length + 1))
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      number: Math.floor(Math.random()*(this.props.quotes.length + 1))
    });
  }

  render() {
    const background = {
      'background-color': '#123456',
      'min-height': '100vh'
    };
    return (
        <div className="container-fluid" >
          <div className="row" style={background}>
            <div className="col-1" />
            <div className="col-auto align-self-center">
              <div className="card w-100" id="quote-box">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p id="text">{this.props.quotes[this.state.number].quote}</p>
                    <footer className="blockquote-footer" id="author">{this.props.quotes[this.state.number].author}</footer>
                  </blockquote>
                  <div className="d-flex">
                    <div className="p-2"><a href="https://twitter.com/intent/tweet" className="btn btn-primary"><i className="fab fa-twitter"></i></a></div>
                    <div className="p-2"><a href="#" className="btn btn-primary"><i className="fab fa-facebook"></i></a></div>
                    <div className="ml-auto p-2"><a href="#" className="btn btn-primary" onClick={this.handleChange} id="new-quote">New quote</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1" />
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
