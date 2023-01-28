"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _client = require("react-dom/client");

var _AppRouter = _interopRequireDefault(require("./routers/AppRouter"));

var _configureStore = _interopRequireDefault(require("./store/configureStore"));

var _expenses = require("./actions/expenses");

var _filters = require("./actions/filters");

var _expenses2 = _interopRequireDefault(require("./selectors/expenses"));

require("normalize-css/normalize.css");

require("./styles/styles.scss");

require("react-dates/lib/css/_datepicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore.default)();
var ReactDOM = (0, _client.createRoot)(document.getElementById('app'));
/* const subscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpense);
}) */

store.dispatch((0, _expenses.addExpense)({
  description: 'Water bill',
  amount: 1000,
  createdAt: 1000
}));
store.dispatch((0, _expenses.addExpense)({
  description: 'Gas bill',
  amount: 3500,
  createdAt: 2000
}));
store.dispatch((0, _expenses.addExpense)({
  description: 'Rent',
  amount: 15000,
  createdAt: 1500
}));
/* store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000); */

var state = store.getState();
var visibleExpense = (0, _expenses2.default)(state.expenses, state.filters);
console.log(visibleExpense);

var jsx = /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react.default.createElement(_AppRouter.default, null));

ReactDOM.render(jsx);
