<script setup lang="ts">
import { reactive, getCurrentInstance } from 'vue'
import { fetchOrderApi } from '@/api/order'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
let orderData = reactive<Array<any>>([])
const router = useRouter()
const { proxy }: any = getCurrentInstance()
const store = useStore()
// 房屋订单中心列表
function fetchOrder() {
  return fetchOrderApi().then((res) => {
    const { result, success, message } = res
    console.log(result)
    if (success) {
      console.log('成功')
      orderData = result
    } else {
      proxy.$message.error(message)
    }
  })
}
if (store.state.userStatus) {
  await fetchOrder()
} else {
  proxy.$message.warning(t('login.loginLost'))
  const { pathname } = window.location
  router.replace({
    path: '/login',
    query: {
      redirect: pathname
    }
  })
  closeMask()
}

// 关闭遮罩和popover
function closeMask() {
  store.commit('setOrderVisible', false)
}

function toDetail(item: any) {
  const { orderId: id } = item
  router.push({ path: `/roomDetail/${id}` })
  store.commit('setRoomId', id)
}
</script>

<template>
  <Teleport to="#app">
    <div class="mask" @click="closeMask"></div>
  </Teleport>
  <ul v-if="orderData.length > 0">
    <li v-for="(item, index) in orderData" :key="index" @click="toDetail(item)">
      <img :src="item.pictureUrl" />
      <div class="mess">
        <p class="title">{{ item.title }}</p>
        <p
          class="info"
        >¥{{ item.price }}/{{ t('detail.night') }} · {{ item.personNumber }}{{ t('detail.person') }}</p>
      </div>
    </li>
  </ul>
  <div v-else class="loading-block">{{ t("common.empty") }}</div>
</template>

<style scoped lang="scss">
ul {
  @include placeholder-order;
}
li {
  @include flex-layout(row, space-between, center);
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  &:last-child {
    border-bottom: none;
  }
  img {
    width: 65px;
    height: 45px;
    border-radius: 4px;
    margin-right: 5px;
    object-fit: cover;
  }
  .mess {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 5px;
    width: 100px;
    overflow: hidden;
    p {
      line-height: 16px;
      font-weight: normal;
      margin: 5px 0;
      max-width: 100px;
    }
    .title {
      font-weight: bold;
      color: #333;
      font-size: 14px;
      display: inline-block;
      @include line-text-overflow;
    }
    .info {
      color: #666;
      font-size: 12px;
    }
  }
}
</style>
