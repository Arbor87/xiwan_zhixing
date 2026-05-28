# 溪智绿行 AI 全景导览

一个使用 Vite + React + JavaScript + pannellum 实现的 360°/VR 全景导览 Demo，适合大学生课程展示、乡村振兴实践展示和校园空间导览原型。

## 功能

- 首页品牌展示：“溪智绿行 AI 全景导览”
- 全屏 360° 全景查看，支持鼠标拖拽和移动端手势拖动
- 场景热点：跳转下一场景、查看本场景介绍、打开 AI 导游讲解
- 左侧场景列表，手机端自动变为底部横向滑动按钮
- 右侧 AI 导游讲解卡片，手机端自动变为底部弹窗
- 上一个场景、下一个场景、开始自动导览、暂停自动导览、返回首页、全屏
- 每 8 秒自动切换场景
- 图片缺失时显示友好提示，不会导致页面崩溃

## 运行

```bash
npm install
npm run dev
```

浏览器打开终端中显示的本地地址，通常是 `http://localhost:5173/`。

## 替换全景图

请将 2:1 比例的等距柱状全景图放入 `public/panoramas/`，并使用以下文件名：

```text
public/panoramas/village_gate.jpg
public/panoramas/green_path.jpg
public/panoramas/classroom.jpg
public/panoramas/farm_product.jpg
```

如果图片不存在，页面会提示：

```text
请将 2:1 比例全景图放入 public/panoramas 文件夹
```

当前项目已放入 4 张 Wikimedia Commons 演示图，正式展示前建议替换为你自己的乡村或校园实拍全景图。

## 场景配置

所有场景统一在 `src/data/scenes.js` 中维护：

- `title`：场景名称
- `image`：全景图路径
- `description`：AI 导游讲解内容
- `aiTips`：模拟 AI 补充提示
- `hotspots`：热点位置、类型和跳转目标

热点类型：

- `scene`：跳转到另一个场景
- `info`：弹出当前场景介绍
- `guide`：打开 AI 导游讲解卡片

## 部署到 GitHub Pages

推荐在仓库 Settings -> Pages 中选择：

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

项目已经提交了 `docs/` 静态构建目录，可直接用于 GitHub Pages。

本地重新生成 `docs/`：

```bash
npm install
npm run build -- --outDir docs
```

如果仓库不是部署在域名根路径，需要在 `vite.config.js` 中设置 `base`，例如：

```js
export default defineConfig({
  base: '/你的仓库名/',
  plugins: [react()],
})
```

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 在 Vercel 导入仓库。
3. Framework Preset 选择 `Vite`。
4. Build Command 使用 `npm run build`。
5. Output Directory 使用 `dist`。

## 后续接入真正 AI 接口

当前 AI 导游是前端模拟。后续可以新增一个后端接口，例如：

```text
POST /api/guide
```

请求内容包含：

```json
{
  "sceneId": "village_gate",
  "sceneTitle": "后溪村入口",
  "question": "请介绍这里的乡村振兴亮点"
}
```

前端在 `GuidePanel.jsx` 中把模拟文本替换为接口返回内容即可。生产环境不要在前端暴露大模型 API Key，应通过 Node.js、Serverless Function 或学校服务器转发请求。
