---
layout: ../../layouts/post.astro
title: MySQL Script Generator
description: 介绍一个简单易用的 MySQL 安装脚本生成器，支持多种 MySQL 版本，一键生成配置文件和批处理安装脚本，让数据库安装部署变得简单高效。
dateFormatted: Jan 15th, 2025
---
## 灵感来源

每次安装mysql的时候都要配置mysql.ini以及后续一系列的cmd指令，写了一个脚本动态解决这些繁琐的事情

## 项目简介

MySQL Script Generator 是一个纯前端实现的 MySQL 安装脚本生成工具，旨在简化 Windows 环境下 MySQL 数据库的安装和配置过程。通过简单的表单填写，即可一键生成 `my.ini` 配置文件和批处理安装脚本，大大提升了数据库部署的效率。

![使用效果演示](https://cos.aiheadn.cn/md/2026/01/bat.gif)

## 项目地址

- **在线演示**: [mysql.aiheadn.cn/](http://web.aiheadn.cn/mysql/)
- **GitHub 仓库**: [github.com/2585570153/mysql_script_generatorl](https://github.com/2585570153/mysql_script_generatorl)
- **Gitee 仓库**: [gitee.com/tian3615/mysql_script_generatorl](https://gitee.com/tian3615/mysql_script_generatorl)

## 框架

| 类型 | 框架                | 说明            |
| ---- | ------------------- | --------------- |
| 前端 | JavaScript/css/html | 原生            |
| 前端 | Tailwind CSS        | CSS流行样式库   |
| 前端 | JSZip               | 打包zip库       |
| 脚本 | bat                 | win系统运行脚本 |

## 项目亮点

支持MySQL 5.5、5.6、5.7、8.0 等多个主流版本，根据版本自动匹配对应的配置模板。只需填写安装路径、版本号和 root 密码，即可生成完整的安装脚本，无需手动编写配置文件。

纯前端实现，无需安装任何依赖，打开即用。界面采用现代化的设计风格，操作流程清晰直观。支持在线预览生成的配置文件，确认无误后再下载使用。

所有数据在本地浏览器中生成，不会上传到任何服务器，完全保护用户的隐私和配置信息。生成的脚本经过充分测试，确保安装过程的稳定性。

- 自动生成 `my.ini` 配置文件，根据版本自动适配
- 生成一键安装批处理脚本，包含服务注册、环境变量设置等
- 支持生成桌面快捷方式脚本
- 提供打包下载功能，一键获取所有文件

### 核心功能模块

1. **配置模板管理** (`myini_templates.js`)
   - 维护不同 MySQL 版本的配置模板
   - 支持版本号自动匹配和降级处理
   - 动态替换安装路径和数据目录

   - 生成完整的安装脚本
   - 包含服务检查、环境变量设置、服务注册等步骤
   - 支持不同版本的命令差异处理
   
   - 表单验证确保输入格式正确
   - 实时预览生成的配置文件
   - 支持单独下载或打包下载

## 使用流程

1. 打开在线工具页面
2. 填写 MySQL 安装路径（如 `D:\`）
3. 输入 MySQL 版本号（如 `mysql-8.0.39-winx64`）
4. 设置 root 用户密码
5. 点击生成脚本，预览配置文件
6. 下载生成的文件到 MySQL 安装目录
7. 以管理员身份运行批处理脚本完成安装


## 未来规划

- 支持更多 MySQL 版本和配置选项

