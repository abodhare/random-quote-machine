import React, { Component } from 'react';

class App extends Component {
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
              <div className="card w-100">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous</footer>
                  </blockquote>
                  <div className="d-flex">
                    <div className="p-2"><a href="#" className="btn btn-primary"><i className="fab fa-twitter"></i></a></div>
                    <div className="p-2"><a href="#" className="btn btn-primary"><i className="fab fa-facebook"></i></a></div>
                    <div className="ml-auto p-2"><a href="#" className="btn btn-primary">New quote</a></div>
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

export default App;
