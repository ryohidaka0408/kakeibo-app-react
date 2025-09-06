// src/test/setup.js

import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// jest-domの便利なマッチャーを、Vitestのexpect関数で使えるように拡張します。
expect.extend(matchers);

// 各テストケースが終了するたびに、レンダリングされたコンポーネントをDOMからクリーンアップします。
// これにより、テストケース同士が互いに影響を与えるのを防ぎます。
afterEach(() => {
    cleanup();
});
