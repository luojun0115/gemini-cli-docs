# 上游更改日志 (2025-06-26)

本文档总结了从上次合并（2025-06-26, commit: 05b9b9ab）到最新上游主分支的所有更改。

## 版本信息
- **当前版本**: 0.1.5
- **上次合并版本**: 0.1.1
- **提交范围**: 05b9b9ab..c55b15f7
- **总提交数**: 30

## 按时间顺序的更改记录

### 2025-06-25

#### 功能更新
- **[#1527](https://github.com/google-gemini/gemini-cli/pull/1527)** - 改进模型回退消息，使其更准确反映实际情况
- **[#1574](https://github.com/google-gemini/gemini-cli/pull/1574)** - **重大更改**: 将 "Login with Google Workspace" 合并到 "Login with Google"
- **[#1595](https://github.com/google-gemini/gemini-cli/pull/1595)** - 提示用户在创建新问题前搜索现有问题
- **[#1608](https://github.com/google-gemini/gemini-cli/pull/1608)** - 使用 YAML 表单简化问题提交流程
- **[#1653](https://github.com/google-gemini/gemini-cli/pull/1653)** - 修复检查点恢复时的历史记录问题

#### Bug 修复
- **[#1405](https://github.com/google-gemini/gemini-cli/pull/1405)** - 修复不稳定的测试
- **[#1579](https://github.com/google-gemini/gemini-cli/pull/1579)** - OAuth 用户的 429 错误重试次数从 3 次减少到 2 次
- **[#1668](https://github.com/google-gemini/gemini-cli/pull/1668)** - 修复 429 错误处理机制
- **[#1688](https://github.com/google-gemini/gemini-cli/pull/1688)** - 修复认证对话框中的文档链接
- **[#1752](https://github.com/google-gemini/gemini-cli/pull/1752)** - 添加 Node.js 版本检查（要求 18.0.0+）

#### 文档更新
- **[#1501](https://github.com/google-gemini/gemini-cli/pull/1501)** - 在 bug 报告模板中添加登录方法信息
- **[#1534](https://github.com/google-gemini/gemini-cli/pull/1534)** - 修复检查点文档中的配置说明
- **[#1571](https://github.com/google-gemini/gemini-cli/pull/1571)** - **新增**: 服务条款和隐私政策文档
- **[#1625](https://github.com/google-gemini/gemini-cli/pull/1625)** - 更新文档并添加 FAQ 部分
- **[#1632](https://github.com/google-gemini/gemini-cli/pull/1632)** - 更新 README.md
- **[#1636](https://github.com/google-gemini/gemini-cli/pull/1636)** - 更新使用统计文档
- **[#1664](https://github.com/google-gemini/gemini-cli/pull/1664)** - 更新 LICENSE 文件

#### 其他更改
- **[#1578](https://github.com/google-gemini/gemini-cli/pull/1578)** - 对提示进行小的样式调整

### 2025-06-26

#### 功能更新
- **[#1645](https://github.com/google-gemini/gemini-cli/pull/1645)** - 改进 LoadCodeAssist 错误处理
- **[#1678](https://github.com/google-gemini/gemini-cli/pull/1678)** - **新功能**: 添加智能模型选择逻辑（Pro/Flash 自动切换）
- **[#1697](https://github.com/google-gemini/gemini-cli/pull/1697)** - 添加发布触发器配置

#### Bug 修复
- **[#1451](https://github.com/google-gemini/gemini-cli/pull/1451)** - 添加登录问题的故障排除说明
- **[#1488](https://github.com/google-gemini/gemini-cli/pull/1488)** - 修复 npx 命令中的 GitHub 仓库 URL
- **[#1557](https://github.com/google-gemini/gemini-cli/pull/1557)** - 修复 ClearcutLogger 中的 Promise 拒绝处理
- **[#1739](https://github.com/google-gemini/gemini-cli/pull/1739)** - 移除测试中不必要的 mock
- **[#1780](https://github.com/google-gemini/gemini-cli/pull/1780)** - 修复主题文档中的断链

#### 文档更新
- **[#1681](https://github.com/google-gemini/gemini-cli/pull/1681)** - 更新 geminiChat.ts 注释
- **[#1781](https://github.com/google-gemini/gemini-cli/pull/1781)** - 修复文档中的多个拼写错误

#### 其他更改
- **[#1540](https://github.com/google-gemini/gemini-cli/pull/1540)** - 修复注释中的拼写错误
- **[#1731](https://github.com/google-gemini/gemini-cli/pull/1731)** - **版本升级**: 0.1.5

## 重要更改总结

### 1. 破坏性更改
- 认证流程简化：移除了单独的 "Login with Google Workspace" 选项

### 2. 新功能
- 智能模型选择：自动在 Gemini Pro 和 Flash 之间切换
- 服务条款和隐私政策文档
- YAML 格式的问题提交表单

### 3. 性能和稳定性改进
- 优化 429 错误处理
- 改进错误消息和用户引导
- 修复多个测试稳定性问题

### 4. 开发者体验
- 强制 Node.js 18.0.0+ 要求
- 改进的文档和故障排除指南
- 更好的错误处理和日志记录

## 迁移指南

### 对于使用 Google Workspace 账户的用户
- 不再需要选择单独的 "Login with Google Workspace" 选项
- 直接使用 "Login with Google" 登录
- 通过设置 `GOOGLE_CLOUD_PROJECT` 环境变量来指定项目

### 对于开发者
- 确保使用 Node.js 18.0.0 或更高版本
- 更新任何依赖于旧认证流程的代码
- 查看新的隐私政策文档了解数据使用政策