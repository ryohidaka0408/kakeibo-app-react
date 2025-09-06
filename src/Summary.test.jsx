// src/Summary.test.jsx

import { render, screen } from '@testing-library/react';
import Summary from './Summary';
import { describe, it, expect } from 'vitest';

describe('Summary Component', () => {

    it('収入、支出、残高を正しく計算して表示する', () => {
        const testTransactions = [
            { id: 1, amount: 10000 },
            { id: 2, amount: 50000 },
            { id: 3, amount: -3000 },
            { id: 4, amount: -1500 },
        ];

        render(<Summary transactions={testTransactions} />);

        // screen.getByTestId を使って、特定の要素を取得する
        const incomeElement = screen.getByTestId('summary-income');
        const expenseElement = screen.getByTestId('summary-expense');
        const balanceElement = screen.getByTestId('summary-balance');

        // 取得した要素の中に、期待するテキストが含まれているかを確認する
        expect(incomeElement).toHaveTextContent('60,000 円');
        expect(expenseElement).toHaveTextContent('4,500 円');
        expect(balanceElement).toHaveTextContent('55,500 円');
    });

    it('取引データが空の場合、すべて0円と表示する', () => {
        render(<Summary transactions={[]} />);

        const incomeElement = screen.getByTestId('summary-income');
        const expenseElement = screen.getByTestId('summary-expense');
        const balanceElement = screen.getByTestId('summary-balance');

        expect(incomeElement).toHaveTextContent('0 円');
        expect(expenseElement).toHaveTextContent('0 円');
        expect(balanceElement).toHaveTextContent('0 円');
    });
});
