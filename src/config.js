/**
 * 产品配置
 */

// v2rayNG (Android) 架构（排除 F-Droid 版）
export const NG_EXCLUDE = '-fdroid';

export const NG_ARCHS = [
  { value: 'arm64', label: 'arm64-v8a', desc: '推荐 · 主流手机', pattern: '_arm64-v8a.apk' },
  { value: 'arm', label: 'armeabi-v7a', desc: '旧款 32 位手机', pattern: '_armeabi-v7a.apk' },
  { value: 'x86_64', label: 'x86_64', desc: '模拟器 / x86 设备', pattern: '_x86_64.apk' },
  { value: 'x86', label: 'x86', desc: '32 位模拟器', pattern: '_x86.apk' },
  { value: 'universal', label: 'universal', desc: '通用 · 体积较大', pattern: '_universal.apk' },
];

// 多平台产品：v2rayN / FlClash
// pattern 匹配规则：完整文件名或文件名后缀
export const PRODUCTS = {
  n: {
    name: 'v2rayN',
    desc: 'Windows / Linux / macOS',
    repo: '2dust/v2rayN',
    envRepo: 'V2RAYN_REPO',
    platforms: [
      { value: 'windows', label: 'Windows' },
      { value: 'linux', label: 'Linux' },
      { value: 'macos', label: 'macOS' },
    ],
    archLabels: {
      windows: { x64: 'x64 · Intel / AMD', arm64: 'ARM64 · 高通等', x86: 'x86 · 32 位' },
      linux: { x64: 'x64 · Intel / AMD', arm64: 'ARM64 · 树莓派等', loong64: 'LoongArch64 · 龙芯', riscv64: 'RISC-V 64' },
      macos: { x64: 'x64 · Intel 芯片', arm64: 'ARM64 · Apple Silicon' },
    },
    variants: {
      windows: {
        x64: [
          { pattern: 'v2rayN-windows-64.zip', label: 'WPF 版', desc: '经典 Windows 界面，已内置 .NET 运行时' },
          { pattern: 'v2rayN-windows-64-desktop.zip', label: 'Avalonia UI 版', desc: '跨平台 UI 框架，新界面' },
        ],
        arm64: [
          { pattern: 'v2rayN-windows-arm64.zip', label: 'WPF 版', desc: '经典 Windows 界面，已内置 .NET 运行时' },
          { pattern: 'v2rayN-windows-arm64-desktop.zip', label: 'Avalonia UI 版', desc: '跨平台 UI 框架，新界面' },
        ],
        x86: [
          { pattern: 'v2rayN-windows-86.zip', label: 'WPF 版', desc: '32 位 Windows' },
          { pattern: 'v2rayN-windows-86-desktop.zip', label: 'Avalonia UI 版', desc: '32 位 Windows，新界面' },
        ],
      },
      linux: {
        x64: [
          { pattern: 'v2rayN-linux-64.zip', label: 'ZIP 便携版', desc: '解压即用，独立目录' },
          { pattern: 'v2rayN-linux-64.deb', label: 'DEB 安装包', desc: 'Debian / Ubuntu 系统' },
          { pattern: 'v2rayN-linux-rhel-64.rpm', label: 'RPM 安装包', desc: 'RHEL / Fedora 系统' },
        ],
        arm64: [
          { pattern: 'v2rayN-linux-arm64.zip', label: 'ZIP 便携版', desc: '解压即用，独立目录' },
          { pattern: 'v2rayN-linux-arm64.deb', label: 'DEB 安装包', desc: 'Debian / Ubuntu 系统' },
          { pattern: 'v2rayN-linux-rhel-arm64.rpm', label: 'RPM 安装包', desc: 'RHEL / Fedora 系统' },
        ],
        loong64: [
          { pattern: 'v2rayN-linux-loong64.deb', label: 'DEB 安装包', desc: 'Debian 系发行版' },
          { pattern: 'v2rayN-linux-rhel-loong64.rpm', label: 'RPM 安装包', desc: 'RHEL 系发行版' },
        ],
        riscv64: [
          { pattern: 'v2rayN-linux-riscv64.deb', label: 'DEB 安装包', desc: 'Debian 系发行版' },
          { pattern: 'v2rayN-linux-rhel-riscv64.rpm', label: 'RPM 安装包', desc: 'RHEL 系发行版' },
        ],
      },
      macos: {
        x64: [
          { pattern: 'v2rayN-macos-64.zip', label: 'ZIP 版', desc: 'Intel 芯片，解压后运行' },
          { pattern: 'v2rayN-macos-64.dmg', label: 'DMG 安装包', desc: 'Intel 芯片，拖入 Applications' },
        ],
        arm64: [
          { pattern: 'v2rayN-macos-arm64.zip', label: 'ZIP 版', desc: 'Apple Silicon (M 系列)，解压后运行' },
          { pattern: 'v2rayN-macos-arm64.dmg', label: 'DMG 安装包', desc: 'Apple Silicon (M 系列)，拖入 Applications' },
        ],
      },
    },
    notes: {
      windows: {
        requirements: 'Windows 10+',
        notes: [
          'WPF 版与 Avalonia 版均为独立包，无需另装 .NET 运行时',
          'Avalonia UI 版使用全新跨平台界面框架',
        ],
      },
      linux: {
        requirements: 'Debian 12+ / Ubuntu 22.04+ / Fedora 36+ / RHEL 9+',
        notes: [
          'ZIP 为便携版，解压后独立运行',
          'DEB 包使用 <code>sudo apt install ./xxx.deb</code> 安装',
          'RPM 包使用 <code>sudo dnf install ./xxx.rpm</code> 安装',
        ],
      },
      macos: {
        requirements: 'macOS 12+',
        notes: [
          '由于未签名，首次运行可能提示"已损坏"',
          '安装后执行: <code>xattr -cr /Applications/v2rayN.app</code>',
        ],
      },
    },
  },

  fl: {
    name: 'FlClash',
    desc: 'Android / PC · Clash 内核',
    repo: 'chen08209/FlClash',
    envRepo: 'FLCLASH_REPO',
    platforms: [
      { value: 'android', label: 'Android' },
      { value: 'windows', label: 'Windows' },
      { value: 'linux', label: 'Linux' },
      { value: 'macos', label: 'macOS' },
    ],
    archLabels: {
      android: { arm64: 'arm64-v8a · 主流手机', arm: 'armeabi-v7a · 旧款', x86_64: 'x86_64 · 模拟器' },
      windows: { x64: 'x64 · Intel / AMD', arm64: 'ARM64 · 高通等' },
      linux: { x64: 'x64 · Intel / AMD', arm64: 'ARM64 · 树莓派等' },
      macos: { x64: 'x64 · Intel 芯片', arm64: 'ARM64 · Apple Silicon' },
    },
    variants: {
      android: {
        arm64: [{ pattern: '-android-arm64-v8a.apk', label: 'APK', desc: '推荐 · 主流手机' }],
        arm: [{ pattern: '-android-armeabi-v7a.apk', label: 'APK', desc: '旧款 32 位手机' }],
        x86_64: [{ pattern: '-android-x86_64.apk', label: 'APK', desc: '模拟器 / x86 设备' }],
      },
      windows: {
        x64: [
          { pattern: '-windows-amd64-setup.exe', label: '安装版', desc: 'EXE 安装程序' },
          { pattern: '-windows-amd64.zip', label: '便携版', desc: 'ZIP 解压即用' },
        ],
        arm64: [
          { pattern: '-windows-arm64-setup.exe', label: '安装版', desc: 'EXE 安装程序' },
          { pattern: '-windows-arm64.zip', label: '便携版', desc: 'ZIP 解压即用' },
        ],
      },
      linux: {
        x64: [
          { pattern: '-linux-amd64.AppImage', label: 'AppImage', desc: '通用格式，赋予执行权限后运行' },
          { pattern: '-linux-amd64.deb', label: 'DEB 安装包', desc: 'Debian / Ubuntu 系统' },
          { pattern: '-linux-amd64.rpm', label: 'RPM 安装包', desc: 'RHEL / Fedora 系统' },
        ],
        arm64: [
          { pattern: '-linux-arm64.AppImage', label: 'AppImage', desc: '通用格式，赋予执行权限后运行' },
          { pattern: '-linux-arm64.deb', label: 'DEB 安装包', desc: 'Debian / Ubuntu 系统' },
          { pattern: '-linux-arm64.rpm', label: 'RPM 安装包', desc: 'RHEL / Fedora 系统' },
        ],
      },
      macos: {
        x64: [{ pattern: '-macos-amd64.dmg', label: 'DMG 安装包', desc: 'Intel 芯片，拖入 Applications' }],
        arm64: [{ pattern: '-macos-arm64.dmg', label: 'DMG 安装包', desc: 'Apple Silicon (M 系列)，拖入 Applications' }],
      },
    },
    notes: {
      android: {
        requirements: 'Android 7.0+',
        notes: ['不确定架构时选择 arm64-v8a'],
      },
      windows: {
        requirements: 'Windows 10+',
        notes: ['TUN 模式需以管理员身份运行'],
      },
      linux: {
        requirements: 'x64 / ARM64 桌面发行版',
        notes: [
          'AppImage 运行前执行 <code>chmod +x xxx.AppImage</code>',
          'DEB / RPM 包可直接通过包管理器安装',
        ],
      },
      macos: {
        requirements: 'macOS 10.15+',
        notes: ['首次运行若提示无法打开，可在"系统设置 → 隐私与安全性"中允许'],
      },
    },
  },
};

// 检查 pattern 是否在产品配置中
export function isKnownPattern(product, pattern) {
  return Object.values(product.variants).some((archs) =>
    Object.values(archs).some((list) => list.some((v) => v.pattern === pattern))
  );
}
