import {createI18n} from 'vue-i18n'

import zh from './zh-cn'
import zh_hk from './zh-hk'
import en from './en-us'

const i18n = createI18n({
    locale:'zh',
    messages:{
        zh,
        zh_hk,
        en
    }
})

export default i18n