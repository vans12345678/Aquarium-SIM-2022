var React = require("react");
//You need this npm package to do createReactClass
var createReactClass = require("create-react-class");

var Aquarium = createReactClass({
  getInitialState: function () {
    return {
      fruits: {
        "fruit-1": "orange",
        "fruit-2": "apple",
      },
    };
  },
  addFruit: function (fruit) {
    //create a unike key for each new fruit item
    var timestamp = new Date().getTime();
    // update the state object
    this.state.fruits["fruit-" + timestamp] = fruit;
    // set the state
    this.setState({ fruits: this.state.fruits });
  },
  removeFruit: function (fruitKey) {
    // update the state object
    delete this.state.fruits[fruitKey];
    // set the state
    this.setState({ fruits: this.state.fruits });
    //alert(fruitKey);
  },
  render: function () {
    return (
      <div className="component-wrapper">
        <FruitList fruits={this.state.fruits} />
        <AddFruitForm addFruit={this.addFruit} />
        <RemoveFruitForm
          removeFruit={this.removeFruit}
          fruits={this.state.fruits}
        />
      </div>
    );
  },
});

var FruitList = createReactClass({
  render: function () {
    return (
      <div className="container">
        <ul className="list-group text-center">
          {Object.keys(this.props.fruits).map(
            function (key) {
              return (
                <li className="list-group-item list-group-item-info">
                  {this.props.fruits[key]}
                </li>
              );
            }.bind(this)
          )}
        </ul>
      </div>
    );
  },
});

export default Aquarium;
