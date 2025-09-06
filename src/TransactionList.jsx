import TransactionItem from './TransactionItem.jsx';
import { List, Typography, Paper } from '@mui/material';

function TransactionList({ transactions, onUpdateTransaction, onDeleteTransaction }) {
    if (transactions.length === 0) {
        return <Typography sx={{ mt: 3, textAlign: 'center' }}>取引データがありません。</Typography>;
    }

    return (
        <Paper sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ p: 2 }}>全取引一覧</Typography>
            <List>
                {transactions.map((transaction) => (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                        onUpdateTransaction={onUpdateTransaction}
                        onDeleteTransaction={onDeleteTransaction}
                    />
                ))}
            </List>
        </Paper>
    );
}

export default TransactionList;
