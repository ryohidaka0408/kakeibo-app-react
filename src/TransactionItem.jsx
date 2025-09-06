import { useState } from 'react';
import { ListItem, ListItemText, IconButton, Typography, Box, TextField, Button, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

function TransactionItem({ transaction, onUpdateTransaction, onDeleteTransaction }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editDate, setEditDate] = useState(transaction.date);
    const [editItem, setEditItem] = useState(transaction.item);
    const [editAmount, setEditAmount] = useState(transaction.amount);

    const handleUpdate = () => {
        if (!editDate || !editItem || !editAmount) return;
        onUpdateTransaction(transaction.id, {
            date: editDate,
            item: editItem,
            amount: Number(editAmount),
        });
        setIsEditing(false);
    };

    if (isEditing) {
        // --- 編集モード ---
        return (
            <Paper sx={{ p: 2, mb: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <TextField size="small" type="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                <TextField size="small" label="項目" value={editItem} onChange={(e) => setEditItem(e.target.value)} />
                <TextField size="small" type="number" label="金額" value={editAmount} onChange={(e) => setEditAmount(e.target.value)} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 1 }}>
                    <Button variant="contained" startIcon={<SaveIcon />} onClick={handleUpdate}>保存</Button>
                    <Button variant="outlined" startIcon={<CancelIcon />} onClick={() => setIsEditing(false)}>キャンセル</Button>
                </Box>
            </Paper>
        );
    }

    // --- 通常表示 ---
    return (
        <ListItem
            divider
            secondaryAction={
                <Box>
                    <IconButton edge="end" aria-label="edit" onClick={() => setIsEditing(true)}><EditIcon /></IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTransaction(transaction.id)}><DeleteIcon /></IconButton>
                </Box>
            }
        >
            <ListItemText
                primary={transaction.item}
                secondary={`${transaction.date} - ${transaction.category || 'カテゴリなし'}`}
            />
            <Typography color={transaction.amount >= 0 ? 'primary.main' : 'error.main'} sx={{ fontWeight: 'bold' }}>
                {transaction.amount.toLocaleString()} 円
            </Typography>
        </ListItem>
    );
}

export default TransactionItem;
