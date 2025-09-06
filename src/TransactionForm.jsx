import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box, Typography, Paper } from '@mui/material';

const categories = ["食費", "交通費", "趣味", "住居費", "交際費", "その他"];

function TransactionForm({ onAddTransaction }) {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState(categories[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!date || !item || !amount) {
            alert('すべて入力してください');
            return;
        }
        const newTransaction = {
            id: Date.now(),
            date,
            item,
            amount: Number(amount),
            category,
        };
        onAddTransaction(newTransaction);
        navigate('/transactions');
    };

    return (
        <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5" gutterBottom>
                    収支入力
                </Typography>
                <TextField
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    label="日付"
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <TextField
                    label="項目 (例: ランチ)"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    required
                />
                <TextField
                    type="number"
                    label="金額 (支出はマイナスで入力)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <FormControl fullWidth>
                    <InputLabel id="category-select-label">カテゴリ</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={category}
                        label="カテゴリ"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map(cat => (
                            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" size="large" sx={{ mt: 1 }}>
                    追加する
                </Button>
            </Box>
        </Paper>
    );
}

export default TransactionForm;
