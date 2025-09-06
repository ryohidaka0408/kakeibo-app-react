import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate, Link, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { collection, addDoc, query, where, onSnapshot, doc, deleteDoc, updateDoc, orderBy } from 'firebase/firestore';
import { auth, db, provider } from './firebase';

// MUIコンポーネント
import { Container, AppBar, Toolbar, Typography, Button, Box, CircularProgress, Tabs, Tab } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// 各ページ・コンポーネントのインポート
import LoginPage from './LoginPage.jsx'; // LoginPageをインポート
import Summary from './Summary.jsx';
import TransactionForm from './TransactionForm.jsx';
import TransactionList from './TransactionList.jsx';
import ExpenseChart from './ExpenseChart.jsx';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" sx={{ mb: 2 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              家計簿アプリ
            </Typography>
            {user && <Button color="inherit" onClick={() => signOut(auth)}>ログアウト</Button>}
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/*" element={user ? <Application user={user} /> : <Navigate to="/login" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

const Application = ({ user }) => {
  const [transactions, setTransactions] = useState([]);
  const transactionsCollectionRef = collection(db, 'transactions');
  const location = useLocation();
  const currentTab = location.pathname;

  useEffect(() => {
    const q = query(transactionsCollectionRef, where("uid", "==", user.uid), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setTransactions(data);
    });
    return () => unsubscribe();
  }, [user.uid]);

  const handleAddTransaction = async (newTransaction) => {
    await addDoc(transactionsCollectionRef, { ...newTransaction, uid: user.uid });
  };
  const handleDeleteTransaction = async (idToDelete) => {
    if (window.confirm('この項目を削除しますか？')) {
      const docRef = doc(db, 'transactions', idToDelete);
      await deleteDoc(docRef);
    }
  };
  const handleUpdateTransaction = async (idToUpdate, updatedData) => {
    const docRef = doc(db, 'transactions', idToUpdate);
    await updateDoc(docRef, updatedData);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs value={currentTab} centered>
          <Tab label="ホーム" value="/" to="/" component={Link} />
          <Tab label="全取引一覧" value="/transactions" to="/transactions" component={Link} />
          <Tab label="新規追加" value="/add" to="/add" component={Link} />
        </Tabs>
      </Box>
      <main>
        <Routes>
          <Route path="/" element={<HomePage transactions={transactions} />} />
          <Route path="/transactions" element={<TransactionList transactions={transactions} onUpdateTransaction={handleUpdateTransaction} onDeleteTransaction={handleDeleteTransaction} />} />
          <Route path="/add" element={<TransactionForm onAddTransaction={handleAddTransaction} />} />
        </Routes>
      </main>
    </>
  );
};

const HomePage = ({ transactions }) => {
  return (
    <div>
      <Summary transactions={transactions} />
      <hr />
      <ExpenseChart transactions={transactions} />
    </div>
  );
};

export default App;
