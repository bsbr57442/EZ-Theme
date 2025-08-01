﻿<template>

  <div class="browser-restricted-container">

    <!-- 域名授权验证提示 -->


    

    <div class="browser-restricted-card">

      <div class="card-header">

        <h1 class="title">{{ $t('browserRestricted.title') }}</h1>

        <h2 class="subtitle">{{ $t('browserRestricted.subtitle') }}</h2>

      </div>

      

      <div class="card-body">

        <div class="browser-icon">

          <IconBrowserOff :size="80" />

        </div>

        

        <p class="description">{{ $t('browserRestricted.description') }}</p>

        

        <div class="browser-info">

          <p class="current-browser">

            <strong>{{ $t('browserRestricted.currentBrowser') }}</strong> 

            {{ currentBrowser }}

          </p>

        </div>

        

        <div class="current-url-container">

          <p class="url-title">{{ $t('browserRestricted.currentUrl') }}</p>

          <div class="url-copy-container">

            <span class="current-url">{{ currentUrl }}</span>

            <button class="copy-button" @click="copyCurrentUrl">

              <IconCopy :size="18" />

            </button>

          </div>

          <p class="copy-status" v-if="copyStatus">{{ copyStatus }}</p>

        </div>

        

        <div class="recommend-section">

          <h3 class="recommend-title">{{ $t('browserRestricted.recommendText') }}</h3>

          

          <div class="browser-buttons">

            <!-- 动态显示配置文件中定义的所有推荐浏览器 -->

            <a 

              v-for="(url, browser) in recommendedBrowsers" 

              :key="browser"

              :href="url" 

              target="_blank" 

              class="browser-button browser-download"

            >

              <component :is="getBrowserIcon(browser)" :size="24" />

              {{ getBrowserDownloadText(browser) }}

            </a>

          </div>

          

          <div class="supported-browsers-section">

            <h3 class="supported-title">{{ $t('browserRestricted.supportedBrowsersTitle') }}</h3>

            <div class="supported-browsers-list">

              <div 

                v-for="(supported, index) in supportedBrowsersList" 

                :key="index"

                class="supported-browser-item"

              >

                <div class="browser-icon-small">

                  <component :is="getBrowserIcon(supported)" :size="20" />

                </div>

                <span>{{ getBrowserLocalName(supported) }}</span>

              </div>

            </div>

          </div>

        </div>

        

        <div class="info-section">

          <details class="info-details">

            <summary>{{ $t('browserRestricted.whyRestricted') }}</summary>

            <p>{{ $t('browserRestricted.whyRestrictedDesc') }}</p>

          </details>

        </div>

      </div>

    </div>

  </div>

</template>



<script>

import { ref, onMounted } from 'vue';

import { detectBrowser, BROWSER_RESTRICT_CONFIG } from '@/utils/baseConfig';

import { useI18n } from 'vue-i18n';



import DomainAuthAlert from '@/components/common/DomainAuthAlert.vue';

import { 

  IconBrowserOff, 

  IconBrandChrome, 

  IconBrandEdge,

  IconBrandFirefox,

  IconBrandSafari,

  IconBrandOpera,

  IconDeviceDesktop,

  IconExternalLink,

  IconCopy 

} from '@tabler/icons-vue';



export default {

  name: 'BrowserRestricted',

  components: {

    IconBrowserOff,

    IconBrandChrome,

    IconBrandEdge,

    IconBrandFirefox,

    IconBrandSafari,

    IconBrandOpera,

    IconDeviceDesktop,

    IconExternalLink,

    IconCopy,

    DomainAuthAlert

  },

  setup() {

    const { t } = useI18n();

    const currentBrowser = ref('');

    const recommendedBrowsers = ref({});

    const supportedBrowsersList = ref([]);

    const currentUrl = ref('');

    const copyStatus = ref('');

    


    

    const getBrowserIcon = (browserName) => {

      const iconMap = {

        'Chrome': IconBrandChrome,

        'Edge': IconBrandEdge,

        'Firefox': IconBrandFirefox,

        'Safari': IconBrandSafari,

        'Opera': IconBrandOpera,

        'UC': IconDeviceDesktop,

        'Maxthon': IconDeviceDesktop,

        'Brave': IconBrandChrome, 
        'Vivaldi': IconBrandOpera, 
        'Tor': IconBrandFirefox   
      };

      

      return iconMap[browserName] || IconDeviceDesktop;

    };

    

    const getBrowserLocalName = (browserName) => {

      return t(`browserRestricted.browserNames.${browserName}`) || browserName;

    };

    

    const getBrowserDownloadText = (browserName) => {

      const specificText = t(`browserRestricted.download${browserName}`);

      if (specificText !== `browserRestricted.download${browserName}`) {

        return specificText;

      }

      return `${t('browserRestricted.download')} ${browserName}`;

    };

    

    const copyCurrentUrl = async () => {

      try {

        await navigator.clipboard.writeText(currentUrl.value);

        copyStatus.value = t('common.copied');

        

        setTimeout(() => {

          copyStatus.value = '';

        }, 3000);

      } catch (err) {

        console.error('复制失败:', err);

        copyStatus.value = t('common.copyFailed');

        

        try {

          const textarea = document.createElement('textarea');

          textarea.value = currentUrl.value;

          textarea.style.position = 'fixed';

          textarea.style.left = '-9999px';

          document.body.appendChild(textarea);

          textarea.select();

          

          const successful = document.execCommand('copy');

          if (successful) {

            copyStatus.value = t('common.copied');

          } else {

            copyStatus.value = t('common.copyFailed');

          }

          

          document.body.removeChild(textarea);

          

          setTimeout(() => {

            copyStatus.value = '';

          }, 3000);

        } catch (e) {

          copyStatus.value = t('common.copyFailed');

        }

      }

    };

    

    onMounted(() => {



      

      currentBrowser.value = detectBrowser();

      

      recommendedBrowsers.value = BROWSER_RESTRICT_CONFIG.recommendedBrowsers;

      

      const restrictedBrowsers = BROWSER_RESTRICT_CONFIG.restrictBrowsers;

      supportedBrowsersList.value = Object.keys(restrictedBrowsers)

        .filter(browser => restrictedBrowsers[browser] === false)

        .concat(Object.keys(recommendedBrowsers.value)) 
        .filter((browser, index, self) => self.indexOf(browser) === index); 
        

      const origin = window.location.origin;

      const baseUrl = window.location.pathname.split('/')[1] === '' 

        ? window.location.origin

        : `${origin}/${window.location.pathname.split('/')[1]}`;

      

      currentUrl.value = `${baseUrl}/#/login`;

    });

    

    return {

      currentBrowser,

      recommendedBrowsers,

      supportedBrowsersList,

      getBrowserIcon,

      getBrowserLocalName,

      currentUrl,

      copyCurrentUrl,

      copyStatus,


      getBrowserDownloadText

    };

  }

};

</script>



<style lang="scss" scoped>

.browser-restricted-container {

  display: flex;

  justify-content: center;

  align-items: center;

  min-height: 100vh;

  padding: 20px;

  background-color: var(--bg-color);

  

  transform: translateZ(0);

}



.browser-restricted-card {

  width: 100%;

  max-width: 600px;

  background-color: var(--card-bg-color);

  border-radius: 16px;

  

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  overflow: hidden;

  border: 1px solid var(--border-color);

  

  transform: translateZ(0);

  will-change: transform;

  

  .card-header {

    padding: 25px 30px;

    border-bottom: 1px solid var(--border-color);

    background-color: rgba(var(--theme-color-rgb), 0.05);

    text-align: center;

    

    .title {

      font-size: 24px;

      font-weight: 700;

      color: var(--theme-color);

      margin-bottom: 10px;

    }

    

    .subtitle {

      font-size: 16px;

      font-weight: 500;

      color: var(--secondary-text-color);

      margin: 0;

    }

  }

  

  .card-body {

    padding: 30px;

    display: flex;

    flex-direction: column;

    align-items: center;

    

    .browser-icon {

      color: var(--theme-color);

      opacity: 0.8;

      margin-bottom: 20px;

    }

    

    .description {

      font-size: 16px;

      line-height: 1.6;

      text-align: center;

      margin-bottom: 25px;

      color: var(--text-color);

    }

    

    .browser-info {

      background-color: rgba(var(--theme-color-rgb), 0.05);

      padding: 15px 20px;

      border-radius: 10px;

      margin-bottom: 25px;

      width: 100%;

      

      .current-browser {

        margin: 0;

        font-size: 15px;

        color: var(--text-color);

      }

    }

    

    .current-url-container {

      width: 100%;

      background-color: rgba(var(--theme-color-rgb), 0.05);

      padding: 15px 20px;

      border-radius: 10px;

      margin-bottom: 25px;

      

      .url-title {

        margin: 0 0 8px 0;

        font-size: 15px;

        font-weight: 600;

        color: var(--text-color);

      }

      

      .url-copy-container {

        display: flex;

        align-items: center;

        background-color: rgba(255, 255, 255, 0.5);

        border-radius: 8px;

        padding: 10px 15px;

        border: 1px solid rgba(var(--theme-color-rgb), 0.1);

        

        .current-url {

          flex: 1;

          font-size: 14px;

          overflow: hidden;

          text-overflow: ellipsis;

          white-space: nowrap;

          color: var(--secondary-text-color);

        }

        

        .copy-button {

          background-color: rgba(var(--theme-color-rgb), 0.1);

          color: var(--theme-color);

          border: none;

          border-radius: 6px;

          width: 36px;

          height: 36px;

          display: flex;

          align-items: center;

          justify-content: center;

          cursor: pointer;

          margin-left: 10px;

          transition: background-color 0.2s ease, transform 0.2s ease;

          

          &:hover {

            background-color: rgba(var(--theme-color-rgb), 0.2);

            transform: translateY(-2px);

          }

          

          &:active {

            transform: translateY(0);

          }

        }

      }

      

      .copy-status {

        margin: 8px 0 0 0;

        font-size: 14px;

        color: var(--theme-color);

        text-align: right;

        height: 20px;

      }

    }

    

    .recommend-section {

      width: 100%;

      margin-bottom: 25px;

      display: flex;

      flex-direction: column;

      align-items: center;

      

      .recommend-title {

        font-size: 18px;

        font-weight: 600;

        margin-bottom: 15px;

        text-align: center;

        color: var(--text-color);

      }

      

      .browser-buttons {

        display: flex;

        flex-wrap: wrap;

        gap: 15px;

        justify-content: center;

        margin-bottom: 20px;

        width: 100%;

      }

      

      .browser-button {

        display: flex;

        align-items: center;

        justify-content: center;

        gap: 8px;

        padding: 12px 20px;

        border-radius: 10px;

        font-size: 15px;

        font-weight: 500;

        text-decoration: none;

        

        transition: transform 0.2s ease, background-color 0.2s ease;

        

        transform: translateZ(0);

        will-change: transform;

        

        &.browser-download {

          background-color: var(--theme-color);

          color: white;

          

          &:hover {

            background-color: rgba(var(--theme-color-rgb), 0.9);

            transform: translateY(-2px);

            

            box-shadow: 0 3px 8px rgba(var(--theme-color-rgb), 0.2);

          }

          

          

          &:active {

            transform: translateY(0);

            box-shadow: none;

          }

        }

      }

      

      .supported-browsers-section {

        width: 100%;

        margin-top: 20px;

        border-top: 1px solid rgba(var(--theme-color-rgb), 0.1);

        padding-top: 20px;

        

        .supported-title {

          font-size: 18px;

          font-weight: 600;

          margin-bottom: 15px;

          text-align: center;

          color: var(--text-color);

        }

        

        .supported-browsers-list {

          display: flex;

          flex-wrap: wrap;

          gap: 10px;

          justify-content: center;

          

          .supported-browser-item {

            display: flex;

            align-items: center;

            gap: 8px;

            padding: 8px 15px;

            border-radius: 8px;

            background-color: rgba(var(--theme-color-rgb), 0.05);

            color: var(--text-color);

            font-size: 14px;

            

            .browser-icon-small {

              color: var(--theme-color);

              display: flex;

              align-items: center;

            }

          }

        }

      }

    }

    

    .info-section {

      width: 100%;

      margin-bottom: 20px;

      

      .info-details {

        background-color: rgba(var(--theme-color-rgb), 0.05);

        border-radius: 10px;

        padding: 15px;

        

        summary {

          font-weight: 600;

          cursor: pointer;

          padding: 5px 0;

          outline: none;

          color: var(--theme-color);

        }

        

        p {

          margin-top: 10px;

          font-size: 14px;

          line-height: 1.6;

          color: var(--text-color);

        }

      }

    }

  }

}





@media (max-width: 768px) {

  .browser-restricted-container {

    

    -webkit-overflow-scrolling: touch;

    min-height: calc(100vh - 40px);

  }

  

  .browser-restricted-card {

    

    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);

    

    .card-header {

      padding: 20px;

      

      .title {

        font-size: 20px;

      }

      

      .subtitle {

        font-size: 14px;

      }

    }

    

    .card-body {

      padding: 20px;

      

      .description {

        font-size: 14px;

      }

      

      .current-url-container {

        padding: 15px;

        

        .url-title {

          font-size: 14px;

        }

        

        .url-copy-container {

          padding: 8px 12px;

          

          .current-url {

            font-size: 12px;

          }

          

          .copy-button {

            width: 32px;

            height: 32px;

          }

        }

        

        .copy-status {

          font-size: 12px;

        }

      }

      

      .recommend-section {

        .recommend-title {

          font-size: 16px;

        }

        

        .browser-buttons {

          flex-direction: column;

          

          .browser-button {

            width: 100%;

            

            transition: transform 0.15s ease, background-color 0.15s ease;

          }

        }

        

        .supported-browsers-section {

          .supported-browsers-list {

            gap: 8px;

            

            .supported-browser-item {

              padding: 6px 12px;

              font-size: 13px;

            }

          }

        }

      }

    }

  }

}





@media (hover: none) {

  .browser-button {

    &:hover {

      

      transform: none !important;

      box-shadow: none !important;

    }

  }

  

  .copy-button {

    &:hover {

      

      transform: none !important;

    }

  }

}

</style> 
