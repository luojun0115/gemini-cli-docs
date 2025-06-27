#!/usr/bin/env node
/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// 读取原始的 changelog
const changelogPath = join(rootDir, 'CHANGELOG-upstream.md');
const changelog = readFileSync(changelogPath, 'utf-8');

// 移除第一行标题（因为主页已经有标题了）
const lines = changelog.split('\n');
if (lines[0].startsWith('# ')) {
  lines.shift();
  lines.shift(); // 移除空行
}

// 为英文版创建内容
const englishChangelog = lines.join('\n')
  .replace(/## 更新历史/g, '## Update History')
  .replace(/## 最新更改/g, '## Latest Changes')
  .replace(/## 初次同步时的更改记录/g, '## Initial Sync Changes')
  .replace(/## 重要更改总结/g, '## Summary of Important Changes')
  .replace(/## 迁移指南/g, '## Migration Guide')
  .replace(/### 最新更新/g, '### Latest Update')
  .replace(/### 初次同步时的更改/g, '### Initial Sync')
  .replace(/#### 功能更新/g, '#### Features')
  .replace(/#### Bug 修复/g, '#### Bug Fixes')
  .replace(/#### 文档更新/g, '#### Documentation')
  .replace(/#### 开发改进/g, '#### Development')
  .replace(/#### 其他更改/g, '#### Other')
  .replace(/### 对于使用 Google Workspace 账户的用户/g, '### For Google Workspace Users')
  .replace(/### 对于开发者/g, '### For Developers')
  .replace(/- \*\*提交范围\*\*:/g, '- **Commit Range**:')
  .replace(/- \*\*新增提交数\*\*:/g, '- **New Commits**:')
  .replace(/- \*\*版本\*\*:/g, '- **Version**:')
  .replace(/- \*\*总提交数\*\*:/g, '- **Total Commits**:')
  .replace(/更新/g, 'Update')
  .replace(/初次同步/g, 'Initial Sync')
  .replace(/（新增）/g, '(New)')
  .replace(/（已在 [\d-]+ 回滚）/g, '(Reverted on $1)')
  .replace(/破坏性更改/g, 'Breaking Changes')
  .replace(/新功能/g, 'New Features')
  .replace(/性能和稳定性改进/g, 'Performance & Stability')
  .replace(/开发者体验/g, 'Developer Experience');

// 写入文件
const docsChangelogPath = join(rootDir, 'docs', 'changelog-content.md');
writeFileSync(docsChangelogPath, englishChangelog, 'utf-8');

// 为中文版创建内容（使用原始内容）
const chineseChangelog = lines.join('\n');
const docsChangelogZhPath = join(rootDir, 'docs', 'zh', 'changelog-content.md');
writeFileSync(docsChangelogZhPath, chineseChangelog, 'utf-8');

console.log('✅ Changelog files synced successfully!');
console.log('  - English: docs/changelog-content.md');
console.log('  - Chinese: docs/zh/changelog-content.md');