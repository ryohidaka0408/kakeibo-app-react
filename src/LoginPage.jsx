import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import { Button, Typography, Paper, Box, Container } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage = () => {
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("ログインエラー", error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Paper elevation={3} sx={{ p: 4, width: '100%', textAlign: 'center' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        家計簿アプリへようこそ
                    </Typography>
                    <Typography sx={{ mb: 4 }}>
                        Googleアカウントでログインして、すぐに始めましょう。
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<GoogleIcon />}
                        onClick={handleLogin}
                        size="large"
                    >
                        Googleでログイン
                    </Button>
                </Paper>
            </Box>
        </Container>
    );
};

export default LoginPage;
