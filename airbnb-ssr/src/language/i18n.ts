// 创建国际化的实例
import { createI18n } from 'vue-i18n'
import zh from './zh'
import ko from './ko'
import en from './en'

const i18n = createI18n({
    legacy: false, // composition API
    locale: 'zh', // 默认cn翻译
    globalInjection: true, //全局生效$t
    messages: {
        zh,
        en,
        ko
    }
})

export default i18n