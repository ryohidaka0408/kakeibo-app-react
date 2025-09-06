// src/Summary.jsx

import { Paper, Typography, Box, Grid } from '@mui/material';

function Summary({ transactions }) {
    const income = transactions
        .filter(t => t.amount > 0)
        .reduce((acc, t) => acc + t.amount, 0);

    const expense = transactions
        .filter(t => t.amount < 0)
        .reduce((acc, t) => acc + t.amount, 0);

    const balance = income + expense;

    return (
        <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>サマリー</Typography>
            <Grid container spacing={2}>
                {/* 収入 */}
                <Grid item xs={12} md={4}>
                    {/* data-testid を追加 */}
                    <Paper sx={{ p: 2, textAlign: 'center' }} data-testid="summary-income">
                        <Typography variant="subtitle1">収入合計:</Typography>
                        <Typography variant="h6" color="primary">
                            {income.toLocaleString()} 円
                        </Typography>
                    </Paper>
                </Grid>
                {/* 支出 */}
                <Grid item xs={12} md={4}>
                    {/* data-testid を追加 */}
                    <Paper sx={{ p: 2, textAlign: 'center' }} data-testid="summary-expense">
                        <Typography variant="subtitle1">支出合計:</Typography>
                        <Typography variant="h6" color="error">
                            {Math.abs(expense).toLocaleString()} 円
                        </Typography>
                    </Paper>
                </Grid>
                {/* 残高 */}
                <Grid item xs={12} md={4}>
                    {/* data-testid を追加 */}
                    <Paper sx={{ p: 2, textAlign: 'center' }} data-testid="summary-balance">
                        <Typography variant="subtitle1">差引残高:</Typography>
                        <Typography variant="h6">
                            {balance.toLocaleString()} 円
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Summary;
