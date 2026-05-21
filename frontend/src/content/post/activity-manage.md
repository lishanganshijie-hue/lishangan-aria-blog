---
layout: ../../layouts/post.astro
title: Activity Manage
description: 介绍一个活动管理系统，包含后端Spring Boot项目和前端Vue项目，支持活动发布、报名、管理等功能，实现了完整的前后端分离架构。
dateFormatted: Jan 9th, 2026
---
## 灵感来源

毕业设计作品选题：在日常工作和生活中，经常需要组织各种活动，如会议、培训、比赛等。传统的活动管理方式效率低下，需要手动处理报名、统计、通知等繁琐工作。因此，开发了一个完整的活动管理系统。

## 项目简介

Activity Manage 是一个完整的前后端分离活动管理系统，旨在简化活动的发布、报名、管理和统计流程。系统采用 Spring Boot + Vue 3 技术栈，包含后端管理 API 和前端管理界面，支持活动发布、学生/教师报名、活动审核、数据统计等核心功能，大大提升了活动管理的效率和便捷性。

## 项目地址

- **后端项目**: activity-manager-boot-develop 毕业设计作品 暂不开放
- **前端项目**: activity-manage-vue-master 毕业设计作品 暂不开放

## 开发接口说明

https://docs.apipost.net/docs/5a308523f488000?locale=zh-cn

## 项目预览

![登录](https://cos.aiheadn.cn/md/2026/01/11.webp)
![首页](https://cos.aiheadn.cn/md/2026/01/1.webp)
![详情](https://cos.aiheadn.cn/md/2026/01/12.webp)
![介绍](https://cos.aiheadn.cn/md/2026/01/3.webp)
![公告](https://cos.aiheadn.cn/md/2026/01/4.webp)
![用户](https://cos.aiheadn.cn/md/2026/01/5.webp)
![菜单](https://cos.aiheadn.cn/md/2026/01/6.webp)
![角色](https://cos.aiheadn.cn/md/2026/01/7.webp)
![学生](https://cos.aiheadn.cn/md/2026/01/8.webp)
![介绍](https://cos.aiheadn.cn/md/2026/01/9.webp)
![详情](https://cos.aiheadn.cn/md/2026/01/10.webp)
![密码](https://cos.aiheadn.cn/md/2026/01/2.webp)
## 技术栈

### 后端技术栈

| 类型 | 技术/框架                | 说明            |
| ---- | ------------------- | --------------- |
| 语言 | Java                | 后端开发语言     |
| 框架 | Spring Boot         | 后端开发框架     |
| ORM  | MyBatis Plus        | 数据库访问框架   |
| 数据库 | MySQL               | 关系型数据库     |
| 缓存 | Redis               | 缓存数据库       |
| 权限 | Sa-Token            | 权限认证框架     |
| 文件上传 | x-file-storage-spring | 文件上传处理     |
| 腾讯云cos | cos_api | 腾讯云存储服务 |
| 表格处理 | easyexcel | 轻量级的导出excel框架 |

### 前端技术栈

| 类型 | 技术/框架                | 说明            |
| ---- | ------------------- | --------------- |
| 语言 | TypeScript          | 前端开发语言     |
| 框架 | Vue 3               | 前端开发框架     |
| UI组件库 | Element Plus        | 前端UI组件库     |
| 构建工具 | Vite                | 前端构建工具     |
| 路由 | Vue Router          | 前端路由管理     |
| 状态管理 | Pinia               | 前端状态管理     |
| HTTP客户端 | Axios               | HTTP请求库       |
| 富文本编辑器 | WangEditor          | 富文本编辑组件   |
| 图表库 | ECharts             | 数据可视化图表   |
| 样式 | Tailwind CSS        | CSS样式框架     |

## 项目亮点

采用现代化的前后端分离架构，后端提供RESTful API，前端使用Vue 3 + TypeScript开发，实现了前后端的解耦和独立部署，便于团队协作和系统维护。

支持从活动发布、报名、审核到统计的完整流程，覆盖活动管理的各个环节，满足不同场景的活动管理需求。

基于Sa-Token实现了细粒度的权限控制，支持角色管理、菜单管理、权限分配等功能，确保系统的安全性和数据的保密性。

内置多种数据统计功能，包括活动参与人数统计、学生报名情况统计、教师参与情况统计等，提供直观的数据可视化图表，便于管理员了解活动情况。

支持多种配置选项，包括活动类型、报名截止时间、参与对象等，可根据不同活动需求进行灵活配置。

## 核心功能模块

### 1. 活动管理模块

- 活动发布：支持发布各种类型的活动，包括会议、培训、比赛等
- 活动编辑：支持编辑已发布的活动信息
- 活动审核：支持对活动进行审核，确保活动内容的合法性和真实性
- 活动列表：支持查看所有活动信息，包括已发布、待审核、已结束等状态

### 2. 报名管理模块

- 学生报名：支持学生在线报名参加活动
- 教师报名：支持教师在线报名参加活动
- 报名审核：支持对学生和教师的报名进行审核
- 报名统计：支持统计活动的报名情况，包括报名人数、审核通过人数等

### 3. 用户管理模块

- 学生管理：支持添加、编辑、删除学生信息
- 教师管理：支持添加、编辑、删除教师信息
- 账号管理：支持管理系统用户账号，包括密码重置、权限分配等

### 4. 权限管理模块

- 角色管理：支持创建和管理系统角色
- 菜单管理：支持配置系统菜单和权限
- 权限分配：支持为角色分配相应的权限

### 5. 通知管理模块

- 通知发布：支持发布系统通知
- 通知查看：支持查看系统通知
- 通知管理：支持管理已发布的通知

### 6. 数据统计模块

- 活动统计：统计活动的参与情况和效果
- 学生统计：统计学生的参与活动情况
- 教师统计：统计教师的参与活动情况
- 图表展示：使用ECharts展示统计数据

## 目录结构

### 后端目录结构

```
activity-manager-boot-develop/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── am/
│   │   │   │   ├── config/          # 配置类
│   │   │   │   ├── controller/      # 控制器
│   │   │   │   ├── converter/       # 类型转换器
│   │   │   │   ├── dao/             # 数据访问层
│   │   │   │   ├── domain/          # 实体类
│   │   │   │   ├── enums/           # 枚举类
│   │   │   │   ├── exception/       # 异常处理
│   │   │   │   ├── interceptor/     # 拦截器
│   │   │   │   ├── service/         # 业务逻辑层
│   │   │   │   ├── utils/           # 工具类
│   │   │   │   └── ApiApplication.java  # 应用入口
│   │   └── resources/
│   │       ├── mapper/              # MyBatis映射文件
│   │       ├── application-dev.yml  # 开发环境配置
│   │       ├── application.yml      # 全局配置
│   │       └── log.xml              # 日志配置
├── .gitignore
├── README.md
├── activity-manager-boot.iml
├── mybatis自动插件配置.json
└── pom.xml
```

### 前端目录结构

```
activity-manage-vue-master/
├── src/
│   ├── assets/                     # 静态资源
│   ├── components/                 # 组件
│   ├── composables/                # 组合式函数
│   ├── config/                     # 配置文件
│   ├── layouts/                    # 布局组件
│   ├── locales/                    # 国际化配置
│   ├── pages/                      # 页面组件
│   ├── router/                     # 路由配置
│   ├── stores/                     # 状态管理
│   ├── utils/                      # 工具函数
│   ├── api/                        # API封装
│   ├── App.vue                     # 根组件
│   ├── main.ts                     # 应用入口
│   └── vite-env.d.ts               # Vite环境声明
├── .gitignore
├── package.json                    # 项目依赖
├── tsconfig.json                   # TypeScript配置
├── vite.config.ts                  # Vite配置
└── tailwind.config.js              # Tailwind CSS配置
```


## 版权保护

![著作权](https://cos.aiheadn.cn/md/2026/01/20260109094009_5068_1.webp)

## 引用

https://pure-admin.cn/
