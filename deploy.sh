#!/usr/bin/env bash
# GitHub Pages 部署脚本
set -e

echo "📦 正在构建项目 (npm run build)..."
npm run build

echo "🚀 正在部署至 gh-pages 分支..."
npx gh-pages -d dist

echo "✅ 部署完成！"
