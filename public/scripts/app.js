"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var title = "React Todo";
var subtitle = "Do what you have to do !";
// let options = ["Thing one","Thing two"];

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removeAll = _this.removeAll.bind(_this);
        _this.state = {
            options: ["Thing one ", "Thing two "]
        };
        _this.getRandom = _this.getRandom.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "removeAll",
        value: function removeAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "getRandom",
        value: function getRandom() {
            var randomOption = Math.floor(Math.random() * this.state.options.length);
            var selected = this.state.options[randomOption];
            alert(selected);
        }
        /* Function to add an option  */

    }, {
        key: "addOption",
        value: function addOption(input) {
            /* console.log("Add option ! "); */
            /* Do validation */
            if (!input) {
                return 'Provide an option please';
            } else if (this.state.options.indexOf(input) > -1) {
                return "This already exists !";
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(input)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var jsx = React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    options: this.state.options,
                    removeAll: this.removeAll,
                    getRandom: this.getRandom
                }),
                React.createElement(Options, { options: this.state.options }),
                React.createElement(AddOption, {
                    addOption: this.addOption
                })
            );
            return jsx;
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            var content = React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h3",
                    null,
                    this.props.subtitle
                )
            );
            return content;
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action(props) {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            var content = React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    {
                        onClick: this.props.getRandom,
                        disabled: !this.props.hasOptions
                    },
                    "What should I do ?"
                ),
                React.createElement(
                    "button",
                    {
                        onClick: this.props.removeAll
                    },
                    "Clear"
                )
            );
            return content;
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            var content = React.createElement(
                "div",
                null,
                "You list :",
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, text: option });
                })
            );
            return content;
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            var content = React.createElement(
                "div",
                null,
                this.props.text
            );
            console.log("work");
            return content;
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.addOption = _this6.addOption.bind(_this6);
        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(AddOption, [{
        key: "addOption",
        value: function addOption(e) {
            e.preventDefault();
            var input = e.target.elements.optionInput.value;
            var error = this.props.addOption(input);
            e.target.elements.optionInput.value = "";
            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var content = React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.addOption },
                    React.createElement("input", { type: "text", name: "optionInput" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
            return content;
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
