<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const footerMenu = reactive(
  [
    {
      title: 'airbnb',
      menus: [
        {
          name: 'careers',
          link: 'https://www.airbnb.cn/careers'
        },
        {
          name: 'news',
          link: 'https://www.airbnb.cn/press/news'
        },
        {
          name: 'topic',
          link: 'https://www.airbnb.cn/help/topic/1578/法律条款'
        },
        {
          name: 'diversity',
          link: 'https://www.airbnb.cn/diversity'
        },
        {
          name: 'accessibility',
          link: 'https://www.airbnb.cn/accessibility'
        }
      ]
    },
    {
      title: 'discovery',
      menus: [
        {
          name: 'trustAndSafe',
          link: 'https://www.airbnb.cn/trust'
        },
        {
          name: 'invite',
          link: 'https://www.airbnb.cn/invite?r=6'
        },
        {
          name: 'evection',
          link: 'https://www.airbnb.cn/work?s=footer'
        },
        {
          name: 'magzine',
          link: 'https://airbnbmag.com'
        },
        {
          name: 'airbnborg',
          link: 'https://www.airbnb.org/?locale=zh'
        }
      ]
    },
    {
      title: 'rent',
      menus: [
        {
          name: 'whyRent',
          link: 'https://www.airbnb.cn/host/homes?from_footer=1'
        },
        {
          name: 'hospitality',
          link: 'https://www.airbnb.cn/hospitality'
        },
        {
          name: 'responsibleHosting',
          link: 'https://www.airbnb.cn/help/responsible-hosting'
        },
        {
          name: 'experiences',
          link: 'https://www.airbnb.cn/host/experiences?from_footer=1'
        },
        {
          name: 'resources',
          link: 'https://www.airbnb.cn/resources?traffic_source=footer'
        }
      ]
    },
    {
      title: 'service',
      menus: [
        {
          name: 'help',
          link: 'https://www.airbnb.cn/help?from=footer'
        },
        {
          name: 'neighbors',
          link: 'https://www.airbnb.cn/neighbors'
        }
      ]
    }
  ])
</script>

<template>
  <div class="footer-common">
    <div class="inner-footer">
      <ul>
        <li v-for="(item, index) in footerMenu" :key="index">
          <h3>{{ t(`footer['${item.title}']`) }}</h3>
          <a
            target="_blank"
            :href="itemInner.link"
            v-for="(itemInner, indexInner) in item.menus"
            :key="indexInner"
          >{{ t(`footer['${itemInner.name}']`) }}</a>
        </li>
      </ul>
      <div class="copy-right">@ 2022 Harry, Inc . All rights reserved.</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/layout/commonFooter.scss";
</style>
