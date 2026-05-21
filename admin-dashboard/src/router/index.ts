import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores' // 🌟 移除了前台才用的 siteConfigStore 和 useInitStore 残留

const CHUNK_LOAD_ERROR_KEY = 'chunk_load_error_reload'

// 保持原作者优秀的网络波动/灰度发布时的 Chunk 加载失败自动重试机制
const isChunkLoadError = (error: unknown): boolean => {
  if (error instanceof Error) {
    return (
      error.message.includes('Failed to fetch dynamically imported module') ||
      error.message.includes('Loading chunk') ||
      error.message.includes('Loading CSS chunk') ||
      error.message.includes('Unable to preload CSS') ||
      error.name === 'ChunkLoadError'
    )
  }
  return false
}

const handleChunkLoadError = (error: unknown): boolean => {
  if (!isChunkLoadError(error)) return false
  
  const reloadCount = parseInt(sessionStorage.getItem(CHUNK_LOAD_ERROR_KEY) || '0')
  
  if (reloadCount < 2) {
    sessionStorage.setItem(CHUNK_LOAD_ERROR_KEY, String(reloadCount + 1))
    window.location.reload()
    return true
  }
  
  sessionStorage.removeItem(CHUNK_LOAD_ERROR_KEY)
  return false
}

// 👑 【核心路由配置】前台路由已全线撤退，完美守护所有后台管理及 OAuth 回调血脉
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/admin' // ⚡ 微操：访问根目录直接重定向去后台大本营，不再渲染 HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/RegisterView.vue'),
    meta: { title: '注册' }
  },
  {
    path: '/verify-email',
    name: 'VerifyEmail',
    component: () => import('@/views/VerifyEmailView.vue'),
    meta: { title: '验证邮箱' }
  },
  {
    path: '/pending-verification',
    name: 'PendingVerification',
    component: () => import('@/views/PendingVerificationView.vue'),
    meta: { title: '邮箱验证' }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/ForgotPasswordView.vue'),
    meta: { title: '忘记密码' }
  },
  
  // 🌟 【OAuth 授权登录大门】必须死守！Google、QQ、微信、GitHub、X 授权登录全靠它们当接应人
  {
    path: '/oauth/callback/:provider',
    name: 'OAuthCallback',
    component: () => import('@/views/OAuthCallbackView.vue'),
    meta: { title: 'OAuth登录' }
  },
  {
    path: '/oauth/verify-email',
    name: 'OAuthVerifyEmail',
    component: () => import('@/views/OAuthVerifyEmailView.vue'),
    meta: { title: '验证邮箱' }
  },
  {
    path: '/oauth/pending-verification',
    name: 'OAuthPendingVerification',
    component: () => import('@/views/OAuthPendingVerificationView.vue'),
    meta: { title: '邮箱验证' }
  },
  
  // 🏰 【后台管理核心子路由】
  {
    path: '/admin',
    component: () => import('@/views/admin/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: () => import('@/views/admin/DashboardView.vue'),
        meta: { title: '仪表盘', permission: 'dashboard.view' }
      },
      {
        path: 'articles',
        name: 'AdminArticles',
        component: () => import('@/views/admin/ArticlesView.vue'),
        meta: { title: '文章管理', permission: 'article.view' }
      },
      {
        path: 'categories',
        name: 'AdminCategories',
        component: () => import('@/views/admin/CategoriesView.vue'),
        meta: { title: '分类管理', permission: 'category.view' }
      },
      {
        path: 'tags',
        name: 'AdminTags',
        component: () => import('@/views/admin/TagsView.vue'),
        meta: { title: '标签管理', permission: 'tag.view' }
      },
      {
        path: 'users',
        name: 'AdminUsers',
        component: () => import('@/views/admin/UsersView.vue'),
        meta: { title: '用户管理', permission: 'user.view' }
      },
      {
        path: 'resources',
        name: 'AdminResources',
        component: () => import('@/views/admin/ResourcesView.vue'),
        meta: { title: '资源管理', permission: 'resource.view' }
      },
      {
        path: 'email',
        name: 'AdminEmail',
        component: () => import('@/views/admin/EmailView.vue'),
        meta: { title: '邮件管理', permission: 'email.view' }
      },
      {
        path: 'notifications',
        name: 'AdminNotifications',
        component: () => import('@/views/admin/NotificationView.vue'),
        meta: { title: '通知管理', permission: 'notification.view' }
      },
      {
        path: 'logs',
        name: 'AdminLogs',
        component: () => import('@/views/admin/LogsView.vue'),
        meta: { title: '日志管理', permission: 'log.view' }
      },
      {
        path: 'comments',
        name: 'AdminComments',
        component: () => import('@/views/admin/CommentsView.vue'),
        meta: { title: '评论管理', permission: 'comment.view' }
      },
      {
        path: 'settings',
        name: 'AdminSettings',
        component: () => import('@/views/admin/SettingsView.vue'),
        meta: { title: '网站设置', permission: 'settings.view' }
      },
      {
        path: 'announcements',
        name: 'AdminAnnouncements',
        component: () => import('@/views/admin/AnnouncementsView.vue'),
        meta: { title: '公告管理', permission: 'announcement.view' }
      },
      {
        path: 'profile',
        name: 'AdminSiteProfile',
        component: () => import('@/views/admin/ProfileView.vue'),
        meta: { title: '网站资料', permission: 'profile.view' }
      },
      {
        path: 'my-profile',
        name: 'AdminMyProfile',
        component: () => import('@/views/admin/UserProfileView.vue'),
        meta: { title: '我的资料' }
      },
      {
        path: 'oauth',
        name: 'AdminOAuth',
        component: () => import('@/views/admin/OAuthView.vue'),
        meta: { title: '授权管理', permission: 'oauth.view' }
      },
      {
        path: 'storage',
        name: 'AdminStorage',
        component: () => import('@/views/admin/StorageView.vue'),
        meta: { title: '存储管理', permission: 'storage.view' }
      },
      {
        path: 'roles',
        name: 'AdminRoles',
        component: () => import('@/views/admin/RolesView.vue'),
        meta: { title: '角色管理', permission: 'role.view' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '页面未找到' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return false
    if (from.name === undefined) return { top: 0, behavior: 'auto' }
    return { top: 0, behavior: 'smooth' }
  }
})

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

// ⚠️ 【轻量化大斩首】无情抹杀了全部无用的前台 prefetch（预加载）军团代码，直接降低打包体积

router.beforeEach(async (to, _from, next) => {
  const title = to.meta.title as string
  const siteName = '管理后台控制台' // 🌟 直接硬编码后台系统标题，省去向 Pinia SiteStore 发请求
  document.title = title ? `${title} | ${siteName}` : siteName
  
  // 🔒 【权限拦截防线】如果页面需要授权（比如 /admin 下的所有子路由）
  if (to.meta.requiresAuth) {
    const authStore = useAuthStore()
    if (!authStore.isAuthenticated) {
      // 没登录直接卷铺盖踢回登录页，并用 query 携带刚才想去的后台页面路径
      next({ name: 'Login', query: { redirect: to.fullPath } })
      return
    }
    
    // 已经登录，则等待 Pinia 的状态树（Token、权限列表）完成安全初始化
    await authStore.waitForInit()
  }
  
  next()
})

router.onError((error) => {
  if (handleChunkLoadError(error)) {
    return
  }
  console.error('Router error:', error)
})

export default router