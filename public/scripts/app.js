"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var title = "React Todo";
var subtitle = "Do what you have to do !";
var options = ["Thing one", "Thing two"];

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            var jsx = React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { options: options }),
                React.createElement(Options, { options: options }),
                React.createElement(AddOption, null)
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

        var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this3.removeAll = _this3.removeAll.bind(_this3);
        return _this3;
    }

    _createClass(Action, [{
        key: "getOption",
        value: function getOption() {
            alert("You got the option ! ");
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            console.log(this.props.options);
        }
    }, {
        key: "render",
        value: function render() {
            var content = React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.getOption },
                    "What should I do ?"
                ),
                React.createElement(
                    "button",
                    { onClick: this.removeAll },
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

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: "addOption",
        value: function addOption(e) {
            e.preventDefault();
            var input = e.target.elements.optionInput.value;
            if (input) {
                options.push(input);
                e.target.elements.optionInput.value = "";
            }
            console.log("This fucking shit is working ! ");
        }
    }, {
        key: "render",
        value: function render() {
            var content = React.createElement(
                "div",
                null,
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
