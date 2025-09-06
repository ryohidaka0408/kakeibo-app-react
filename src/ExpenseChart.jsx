// src/ExpenseChart.jsx

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Chart.jsに必要なモジュールを登録
ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ transactions }) {
    // カテゴリ別の支出を計算
    const expenseData = transactions
        .filter(t => t.amount < 0) // 支出のみフィルタリング
        .reduce((acc, transaction) => {
            const category = transaction.category || 'その他'; // カテゴリがなければ'その他'に
            const amount = Math.abs(transaction.amount); // 金額を正の数に

            if (!acc[category]) {
                acc[category] = 0;
            }
            acc[category] += amount;
            return acc;
        }, {});

    // Chart.js用のデータ形式に変換
    const chartData = {
        labels: Object.keys(expenseData), // ラベル (カテゴリ名)
        datasets: [
            {
                label: '支出',
                data: Object.values(expenseData), // データ (金額)
                backgroundColor: [ // グラフの色
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                ],
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="chart-container">
            <h2>支出の割合</h2>
            <Pie data={chartData} />
        </div>
    );
}

export default ExpenseChart;
