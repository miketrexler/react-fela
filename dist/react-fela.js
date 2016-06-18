(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('fela')) :
  typeof define === 'function' && define.amd ? define(['react', 'fela'], factory) :
  (global.ReactFela = factory(global.React,global.Fela));
}(this, function (React,fela) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers;

  var rendererShape = React.PropTypes.shape({
    renderFont: React.PropTypes.func.isRequired,
    renderStatic: React.PropTypes.func.isRequired,
    renderRule: React.PropTypes.func.isRequired,
    renderKeyframe: React.PropTypes.func.isRequired
  });

  var rendererShape$1 = rendererShape.isRequired;

  var Provider = function (_Component) {
    babelHelpers.inherits(Provider, _Component);

    function Provider() {
      babelHelpers.classCallCheck(this, Provider);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Provider).apply(this, arguments));
    }

    babelHelpers.createClass(Provider, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props = this.props;
        var mountNode = _props.mountNode;
        var renderer = _props.renderer;


        if (mountNode) {
          fela.render(renderer, mountNode);
        }
      }
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        return { renderer: this.props.renderer };
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);
    return Provider;
  }(React.Component);

  Provider.propTypes = { renderer: rendererShape$1 };
  Provider.childContextTypes = { renderer: rendererShape$1 };

  function connect(styleMapper) {
    return function (Comp) {
      var _class, _temp;

      return _temp = _class = function (_Component) {
        babelHelpers.inherits(EnhancedComponent, _Component);

        function EnhancedComponent() {
          babelHelpers.classCallCheck(this, EnhancedComponent);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(EnhancedComponent).apply(this, arguments));
        }

        babelHelpers.createClass(EnhancedComponent, [{
          key: 'render',
          value: function render() {
            // invoke props and renderer to render all styles
            var styles = styleMapper(this.props)(this.context.renderer);

            return React__default.createElement(Comp, babelHelpers.extends({}, this.props, { styles: styles }));
          }
        }]);
        return EnhancedComponent;
      }(React.Component), _class.contextTypes = babelHelpers.extends({}, Comp.contextTypes, {
        renderer: rendererShape$1
      }), _temp;
    };
  }

  var index = {
    Provider: Provider,
    connect: connect
  };

  return index;

}));
//# sourceMappingURL=react-fela.js.map