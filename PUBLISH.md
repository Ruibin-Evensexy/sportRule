# 发布到 GitHub 与 GitHub Pages

以下步骤将你的本地项目推送到 GitHub，并通过 GitHub Actions 自动发布到 GitHub Pages（使用 `gh-pages` 分支）：

1. 在 GitHub 上新建一个仓库（例如 `sportRule`）。
2. 在本地仓库中初始化 git（如果尚未初始化）：

```bash
git init
git add .
git commit -m "Initial commit: SportRule project"
```

3. 关联远程仓库并推送主分支（将 `<GITHUB_URL>` 替换为你的仓库地址）：

```bash
git remote add origin <GITHUB_URL>
git branch -M main
git push -u origin main
```

4. 工作流说明：
- 我已添加 `.github/workflows/deploy.yml`，该工作流在推送到 `main` 后会运行：
  - 安装依赖、运行 `npm run build`（会生成 `dist` 目录）
  - 使用 `peaceiris/actions-gh-pages` 将 `dist` 内容发布到 `gh-pages` 分支

5. 等待部署：
- 推送后，进入 GitHub 仓库的 `Actions` 选项卡查看部署状态。
- 如果成功，页面将自动发布到 `https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>/`。

6. 可选：在仓库 `Settings -> Pages` 中确认发布源和自定义域设置（如果需要）。

常见问题：
- 如果工作流失败，请在 Actions 日志中查看错误并贴日志给我，我可以帮你排查。
- 若要在组织或私有仓库启用 Pages，请确保权限设置允许自动发布。