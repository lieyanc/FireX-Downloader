# FireX Downloader

Cloudflare Worker 代理下载 v2rayNG (Android)、v2rayN (Windows/Linux/macOS) 和 FlClash (Android/Windows/Linux/macOS) 的 GitHub Release 文件。

## 功能

- **v2rayNG (Android)**
  - 选择架构: arm64-v8a / armeabi-v7a / x86_64 / x86 / universal

- **v2rayN (PC)**
  - Windows (x64 / ARM64 / x86): WPF 版 / Avalonia UI 版
  - Linux (x64 / ARM64 / LoongArch64 / RISC-V 64): ZIP 便携版 / DEB / RPM
  - macOS: ZIP / DMG

- **FlClash**
  - Android: arm64-v8a / armeabi-v7a / x86_64
  - Windows: 安装版 / 便携版
  - Linux: AppImage / DEB / RPM
  - macOS: DMG

- Latest / Pre-release 版本切换
- GitHub API 缓存（5 分钟）
- 流式代理下载

## 项目结构

```
src/
├── index.js     # Hono 路由入口
├── config.js    # 产品配置（架构、平台、变体）
├── github.js    # GitHub API 封装
└── page.js      # 前端页面模板
```

## 部署

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 部署到 Cloudflare
npm run deploy
```

## API

| 端点 | 说明 |
|------|------|
| `GET /` | 前端页面 |
| `GET /api/info` | 获取版本信息 |
| `GET /api/download` | 代理下载文件 |

**参数:**

- `product`: `ng` (v2rayNG) 或 `n` (v2rayN)
- `release`: `latest` / `pre-release`
- `arch`: (NG) `arm64` / `arm` / `x86_64` / `x86` / `universal`
- `pattern`: (N) 文件名匹配模式

## 配置

`wrangler.toml`:

```toml
[vars]
V2RAYNG_REPO = "2dust/v2rayNG"
V2RAYN_REPO = "2dust/v2rayN"
```

## License

MIT
