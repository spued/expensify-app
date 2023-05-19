import selectExpensesTotal from "../../selectors/expenses_sum";
import expenses from "../fixtures/expenses";

const total = selectExpensesTotal(expenses);

test('Should sum zero',() => {
    expect(selectExpensesTotal([])).toBe(0);
})


test('Should sum 1 expense',() => {
    expect(selectExpensesTotal([expenses[0]])).toBe(195);
})

test('Should sum All expense',() => {
    expect(selectExpensesTotal(expenses)).toBe(114195);
})