---
date: '2023-08 ~ now'
title: 'CRM 管理系統'
description: '協助 SEO 公司整合各部門所需客戶資訊（如合約、成效數據、帳款等），以提升客戶管理效率。'
cover: "/images/crm.png"
---

## 主要功能
- 串接 Google OAuth 登入與 API Token 授權
- 用戶權限管理，確保資料安全性
- Sidekiq 自動化處理 GA, GSC 數據撈取與報表生成
- 發票狀態機與串接雲端發票 API
- AWS SES 信件寄送功能

## 系統架構
1. **前端**：React、Blueprint.js、Tailwind CSS
2. **後端**：Ruby on Rails
3. **資料庫**：PostgreSQL
4. **背景工作**：Sidekiq、Redis
5. **測試**：RSpec、FactoryBot
6. **部署**：Heroku
7. **第三方**：AWS SES、Google Cloud Platform