# 家計簿アプリ (Kakeibo App)

React.js の学習ロードマップの集大成として作成した、モダンなWeb技術を活用したシングルページアプリケーション（SPA）の家計簿アプリです。

![アプリのスクリーンショット](https://via.placeholder.com/800x450.png?text=アプリのスクリーンショットをここに挿入 )
*(ヒント: この部分を、デプロイしたアプリの実際のスクリーンショットに差し替えてください)*

**デプロイ先URL:** [https://あなたのプロジェクト名.vercel.app/](https://あなたのプロジェクト名.vercel.app/ )

---

## 🌟 特徴 (Features)

*   **リアルタイムデータベース**: Firebase (Firestore) を利用し、データの追加・編集・削除が即座に反映されます。
*   **Googleアカウント認証**: Firebase Authentication を利用した、安全で簡単なGoogleアカウントでのログイン機能。
*   **データ永続化**: ログインユーザーごとにデータが紐づけられ、どのデバイスからアクセスしても同じデータを利用できます。
*   **洗練されたUI**: `MUI (Material-UI)` を全面的に採用し、直感的で美しいユーザーインターフェースを実現。
*   **レスポンシブデザイン**: PC、タブレット、スマートフォンなど、あらゆるデバイスサイズで快適に利用できます。
*   **データ集計**: 月ごとの収入・支出・差引残高を自動で計算し、サマリーを表示します。
*   **ページ遷移**: `React Router` を用いて、ページリロードなしでスムーズな画面遷移を実現。

---

## 🛠️ 使用技術 (Tech Stack)

このアプリケーションは、以下の技術スタックで構築されています。

*   **フロントエンド**:
    *   [React.js](https://reactjs.org/ ) (v18)
    *   [Vite](https://vitejs.dev/ ) - 次世代フロントエンドツール
*   **UIフレームワーク**:
    *   [MUI (Material-UI)](https://mui.com/ )
*   **ルーティング**:
    *   [React Router](https://reactrouter.com/ ) (v6)
*   **バックエンド & データベース (BaaS)**:
    *   [Firebase](https://firebase.google.com/ )
        *   **Firestore**: リアルタイムNoSQLデータベース
        *   **Authentication**: ユーザー認証（Googleログイン）
*   **テスト**:
    *   [Vitest](https://vitest.dev/ ) - Viteネイティブのテストフレームワーク
    *   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/ ) - ユーザー中心のコンポーネントテスト
*   **デプロイ**:
    *   [Vercel](https://vercel.com/ )

---

## 🚀 セットアップとローカルでの実行方法 (Setup)

このプロジェクトをあなたのローカル環境で動かすには、以下の手順に従ってください。

### 1. 前提条件

*   [Node.js](https://nodejs.org/ ) (v18.x 以上) がインストールされていること
*   [Git](https://git-scm.com/ ) がインストールされていること
*   Firebaseプロジェクトが作成済みであること

### 2. リポジトリのクローン

```bash
git clone https://github.com/あなたのユーザー名/あなたのリポジトリ名.git
cd あなたのリポジトリ名
