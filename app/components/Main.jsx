var React = require('react');
var Nav = require('Nav');
// This is an example of a stateless functional component for React

var Main = (props) => {
  return (
    <div>
      <div className="">
        <div className="">
          <Nav></Nav>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
