<script setup lang="ts">
import { onMounted } from 'vue'
import { useSessionManager, useActivityTracker } from '@/composables/useSessionManager'
import { useInitStore } from '@/stores'
import ModalDialog from '@/components/common/ModalDialog.vue'

const initStore = useInitStore()

// 🟢 必须留住：管理后台的安全会话与管理员活跃度追踪
useSessionManager()
useActivityTracker()

onMounted(async () => {
  // 🟢 必须留住：初始化后台的核心配置与权限数据
  await initStore.initializeCore()
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-dark-100 flex flex-col transition-colors duration-300">
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <ModalDialog />
  </div>
</template>

<style scoped>
/* 保持后台页面切换时优雅的渐隐渐现淡入动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>