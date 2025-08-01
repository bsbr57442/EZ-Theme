﻿<template>

  <transition name="fade">

    <div v-if="show" class="node-detail-modal-overlay" @click.self="close">

      <div class="node-detail-modal-container">

        <div class="node-detail-modal-header">

          <h3 class="modal-title">{{ node.name }}</h3>

          <button class="modal-close-btn" @click="close">

            <IconX :size="20" />

          </button>

        </div>

        

        <!-- 使用页面切换动画 -->

        <transition :name="slideDirection" mode="out-in">

          <!-- 节点基本信息页面 -->

          <div v-if="currentPage === 'info'" key="info" class="node-detail-modal-body">

            <!-- 节点基本信息 -->

            <div class="node-info-section">

              <div class="info-row">

                <span class="info-label">{{ $t('nodes.type') }}:</span>

                <span class="info-value">{{ node.type }}</span>

              </div>

              <div class="info-row">

                <span class="info-label">{{ $t('nodes.rate') }}:</span>

                <span class="info-value" :class="{ 'high-rate': parseFloat(node.rate) != 1 }">x{{ node.rate }}</span>

              </div>

              <div class="info-row">

                <span class="info-label">{{ $t('nodes.host') }}:</span>

                <span class="info-value">{{ node.host }}</span>

              </div>

              <div class="info-row">

                <span class="info-label">{{ $t('nodes.port') }}:</span>

                <span class="info-value">{{ node.port }}</span>

              </div>

              

              <!-- 根据节点类型显示不同的信息 -->

              <template v-if="node.type === 'ss' || node.type === 'shadowsocks'">

                <div class="info-row">

                  <span class="info-label">{{ $t('nodes.cipher')}}:</span>

                  <span class="info-value">{{ node.cipher}}</span>

                </div>

              </template>

              

              <template v-if="node.type === 'trojan'">

                <div class="info-row">

                  <span class="info-label">{{ $t('nodes.security')}}:</span>

                  <span class="info-value">{{ node.allow_insecure ? $t('nodes.allowInsecure') : $t('nodes.secure') }}</span>

                </div>

              </template>

              

              <template v-if="node.type === 'vmess'">

                <div class="info-row">

                  <span class="info-label">{{ $t('nodes.tls') || 'TLS' }}:</span>

                  <span class="info-value">{{ node.tls === 1 ? $t('common.on') : $t('common.off') }}</span>

                </div>

              </template>

            </div>

            

            <!-- 切换到订阅链接页面的按钮 -->

            <div class="page-nav-btn-container">

              <button class="page-nav-btn" @click="switchToPage('subscribe')">

                <IconLink :size="16" />

                {{ $t('nodes.viewSubscribeLink') }}

              </button>

            </div>

          </div>

          

          <!-- 订阅链接页面 -->

          <div v-else-if="currentPage === 'subscribe'" key="subscribe" class="node-detail-modal-body">

            <!-- 快速连接信息切换 -->

            <div class="quick-link-section">

              <div class="section-header">

                <h4>{{ $t('nodes.quickLink') }}</h4>

                <div class="view-toggle">

                  <button 

                    class="toggle-btn" 

                    :class="{ active: viewMode === 'link' }" 

                    @click="viewMode = 'link'"

                  >

                    <IconFileText :size="16" />

                    {{ $t('nodes.linkView') }}

                  </button>

                  <button 

                    class="toggle-btn" 

                    :class="{ active: viewMode === 'qrcode' }" 

                    @click="viewMode = 'qrcode'"

                  >

                    <IconQrcode :size="16" />

                    {{ $t('nodes.qrcodeView') }}

                  </button>

                </div>

              </div>

              

              <!-- 链接视图 -->

              <div v-if="viewMode === 'link'" class="link-card">

                <pre class="link-text">{{ subscribeLink }}</pre>

                <button class="copy-btn" @click="copySubscribeLink">

                  <IconCopy :size="16" />

                  {{ $t('common.copy') }}

                </button>

              </div>

              

              <!-- 二维码视图 -->

              <div v-else-if="viewMode === 'qrcode'" class="qrcode-container">

                <div v-if="qrCodeLoading" class="qrcode-loading">

                  <div class="loader"></div>

                  <p>{{ $t('common.loadingQRCode') }}</p>

                </div>

                <div v-else class="qrcode-wrapper">

                  <img :src="qrCodeUrl" alt="QR Code" @load="qrCodeLoaded" />

                  <button class="copy-btn" @click="copySubscribeLink">

                    <IconCopy :size="16" />

                    {{ $t('common.copy') }}

                  </button>

                </div>

              </div>

            </div>

            

            <!-- 返回节点信息页面的按钮 -->

            <div class="page-nav-btn-container">

              <button class="page-nav-btn" @click="switchToPage('info')">

                <IconArrowLeft :size="16" />

                {{ $t('common.back') }}

              </button>

            </div>

          </div>

        </transition>

      </div>

    </div>

  </transition>

</template>



<script setup>

import { ref, computed, watchEffect } from 'vue';

import { useI18n } from 'vue-i18n';

import { 

  IconX, 

  IconCopy, 

  IconQrcode, 

  IconFileText, 

  IconLink, 

  IconArrowLeft 

} from '@tabler/icons-vue';

import { useToast } from '@/composables/useToast';

import QRCode from 'qrcode';



const { t } = useI18n();

const { showToast } = useToast();



const props = defineProps({

  show: {

    type: Boolean,

    default: false

  },

  node: {

    type: Object,

    default: () => ({})

  },

  userInfo: {

    type: Object,

    default: () => ({})

  }

});



const emit = defineEmits(['close']);



const currentPage = ref('info'); 
const slideDirection = ref('slide-left'); 


const switchToPage = (pageName) => {

  if (pageName === 'subscribe') {

    slideDirection.value = 'slide-left'; 
  } else {

    slideDirection.value = 'slide-right'; 
  }

  currentPage.value = pageName;

};



const viewMode = ref('link');



const qrCodeUrl = ref('');

const qrCodeLoading = ref(false);



const close = () => {

  emit('close');

  setTimeout(() => {

    currentPage.value = 'info';

  }, 300);

};



const safeBase64Encode = (str) => {

  return btoa(

    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {

      return String.fromCharCode(parseInt(p1, 16));

    })

  );

};



const subscribeLink = computed(() => {

  let nodeType = props.node.type?.toLowerCase();

  

  if (!nodeType || !props.node.host || !props.node.port) {

    return t('nodes.invalidNodeData') || '节点数据不完整，无法生成链接';

  }

  

  if (nodeType === 'shadowsocks') {

    nodeType = 'ss';

  }

  

  const userUuid = props.userInfo?.uuid || '00000000-0000-0000-0000-000000000000';



  switch (nodeType) {
    case 'ss': {
      const cipher = props.node.cipher || 'chacha20-ietf-poly1305';
      const ssConfig = `${cipher}:${userUuid}@${props.node.host}:${props.node.port}`;
      const base64Config = safeBase64Encode(ssConfig);
      return `ss://${base64Config}`;
    }

    case 'vmess': {
      const vmessConfig = {
        v: '2',
        ps: props.node.name,
        add: props.node.host,
        port: props.node.port,
        id: userUuid,
        aid: '0',
        net: props.node.network || 'tcp',
        type: 'none',
        host: props.node.host,
        path: props.node.path || '/',
        tls: props.node.tls === 1 ? 'tls' : '',
      };
      const base64Config = safeBase64Encode(JSON.stringify(vmessConfig));
      return `vmess://${base64Config}`;
    }

    case 'vless': {
      let vlessUrl = `vless://${userUuid}@${props.node.host}:${props.node.port}`;
      if (props.node.flow) {
        vlessUrl += `&flow=${encodeURIComponent(props.node.flow)}`;
      }
      const networkType = props.node.network || 'tcp';
      vlessUrl += `&type=${encodeURIComponent(networkType)}`;
      vlessUrl += `&headerType=none`;
      if (props.node.tls) {
        const security = props.node.tls === 2 ? 'reality' : 'tls';
        vlessUrl += `&security=${security}`;
        if (props.node.tls === 2 && props.node.tls_settings) {
          if (props.node.tls_settings.server_name) {
            vlessUrl += `&sni=${encodeURIComponent(props.node.tls_settings.server_name)}`;
          }
          vlessUrl += `&fp=${encodeURIComponent(props.node.tls_settings?.fingerprint || 'chrome')}`;
          if (props.node.tls_settings.public_key) {
            vlessUrl += `&pbk=${encodeURIComponent(props.node.tls_settings.public_key)}`;
          }
          if (props.node.tls_settings.short_id) {
            vlessUrl += `&sid=${encodeURIComponent(props.node.tls_settings.short_id)}`;
          }
          if (props.node.tls_settings.server_port && props.node.tls_settings.server_port !== props.node.port.toString()) {
            vlessUrl += `&port=${encodeURIComponent(props.node.tls_settings.server_port)}`;
          }
          if (props.node.tls_settings.allow_insecure === '1') {
            vlessUrl += `&allowInsecure=1`;
          }
        }
      }
      if (props.node.path) {
        vlessUrl += `&path=${encodeURIComponent(props.node.path)}`;
      }
      vlessUrl += `#${encodeURIComponent(props.node.name)}`;
      return vlessUrl;
    }

    case 'trojan': {
      let trojanUrl = `trojan://${userUuid}@${props.node.host}:${props.node.port}`;
      if (props.node.allow_insecure) {
        trojanUrl += '?allowInsecure=1';
      }
      trojanUrl += `#${encodeURIComponent(props.node.name)}`;
      return trojanUrl;
    }

    case 'hysteria': {
      let hysteria2Url = `hysteria2://${userUuid}@${props.node.host}:${props.node.port}`;
      const queryParams = [];
      if (props.node.sni) {
        queryParams.push(`sni=${encodeURIComponent(props.node.sni)}`);
      }
      queryParams.push(`insecure=${props.node.allow_insecure ? '1' : '0'}`);
      if (queryParams.length > 0) {
        hysteria2Url += `?${queryParams.join('&')}`;
      }
      hysteria2Url += `#${encodeURIComponent(props.node.name)}`;
      return hysteria2Url;
    }

    default:
      return t('nodes.unsupportedNodeType') || '不支持的类型';
  }

});



const updateQrCode = () => {

  if (subscribeLink.value) {

    qrCodeLoading.value = true;

    try {

      QRCode.toDataURL(subscribeLink.value, {

        width: 200,

        margin: 2,

        color: {

          dark: '#000000',

          light: '#ffffff'

        }

      })

      .then(url => {

        qrCodeUrl.value = url;

        qrCodeLoading.value = false;

      })

      .catch(err => {

        console.error('二维码生成失败:', err);

        qrCodeLoading.value = false;

        showToast(t('common.qrCodeGenerationFailed') || '二维码生成失败', 'error');

      });

    } catch (error) {

      console.error('生成二维码失败:', error);

      qrCodeLoading.value = false;

      showToast(t('common.qrCodeGenerationFailed') || '二维码生成失败', 'error');

    }

  }

};



const qrCodeLoaded = () => {

  qrCodeLoading.value = false;

};



const copySubscribeLink = () => {

  navigator.clipboard.writeText(subscribeLink.value)

    .then(() => {

      showToast(t('common.copied') || '已复制到剪贴板', 'success');

    })

    .catch(err => {

      console.error('无法复制链接: ', err);

      

      try {

        const textarea = document.createElement('textarea');

        textarea.value = subscribeLink.value;

        textarea.style.position = 'fixed';

        document.body.appendChild(textarea);

        textarea.focus();

        textarea.select();

        const successful = document.execCommand('copy');

        document.body.removeChild(textarea);

        

        if (successful) {

          showToast(t('common.copied') || '已复制到剪贴板', 'success');

        } else {

          showToast(t('common.copyFailed') || '复制失败', 'error');

        }

      } catch (fallbackErr) {

        console.error('后备复制方法也失败:', fallbackErr);

        showToast(t('common.copyFailed') || '复制失败', 'error');

      }

    });

};



watchEffect(() => {

  if (viewMode.value === 'qrcode' && props.show && currentPage.value === 'subscribe') {

    updateQrCode();

  }

});



watchEffect(() => {

  if (props.show && viewMode.value === 'qrcode' && currentPage.value === 'subscribe') {

    updateQrCode();

  }

});



watchEffect(() => {

  if (currentPage.value === 'subscribe' && viewMode.value === 'qrcode' && props.show) {

    updateQrCode();

  }

});

</script>



<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {

  transition: opacity 0.3s ease;

}



.fade-enter-from, .fade-leave-to {

  opacity: 0;

}





.slide-left-enter-active,

.slide-left-leave-active,

.slide-right-enter-active,

.slide-right-leave-active {

  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

}



.slide-left-enter-from {

  transform: translateX(100%);

  opacity: 0;

}



.slide-left-leave-to {

  transform: translateX(-100%);

  opacity: 0;

}



.slide-right-enter-from {

  transform: translateX(-100%);

  opacity: 0;

}



.slide-right-leave-to {

  transform: translateX(100%);

  opacity: 0;

}



.node-detail-modal-overlay {

  position: fixed;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 1000;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 20px;

  box-sizing: border-box;

  backdrop-filter: blur(4px);

}



.node-detail-modal-container {

  width: 100%;

  max-width: 500px;

  background-color: rgba(var(--card-background-rgb, 255, 255, 255), 1);

  border-radius: 16px;

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);

  border: 1px solid var(--border-color);

  overflow: hidden;

  display: flex;

  flex-direction: column;

  max-height: min(85vh, 600px); 

  animation: modal-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  

  @keyframes modal-in {

    from {

      opacity: 0;

      transform: translateY(40px) scale(0.95);

    }

    to {

      opacity: 1;

      transform: translateY(0) scale(1);

    }

  }

}



.node-detail-modal-header {

  padding: 16px 20px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  border-bottom: 1px solid var(--border-color);

  background-color: rgba(var(--theme-color-rgb), 0.03);

  flex-shrink: 0; 

  

  .modal-title {

    margin: 0;

    font-size: 18px;

    font-weight: 600;

    color: var(--text-color);

  }

  

  .modal-close-btn {

    background: none;

    border: none;

    cursor: pointer;

    color: var(--text-muted);

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 8px;

    margin: -8px;

    border-radius: 50%;

    transition: all 0.3s ease;

    

    &:hover {

      background-color: rgba(0, 0, 0, 0.05);

      color: var(--text-color);

      transform: rotate(90deg);

    }

  }

}



.node-detail-modal-body {

  padding: 20px;

  overflow-y: auto; 

  display: flex;

  flex-direction: column;

  gap: 24px;

  flex-grow: 1; 

  -webkit-overflow-scrolling: touch; 

  height: 100%; 

}



.node-info-section {

  display: flex;

  flex-direction: column;

  gap: 12px;

  

  .info-row {

    display: flex;

    align-items: center;

    padding: 8px 0;

    border-bottom: 1px solid var(--border-color);

    

    &:last-child {

      border-bottom: none;

    }

    

    .info-label {

      font-weight: 500;

      color: var(--text-muted);

      flex: 0 0 40%; 

    }

    

    .info-value {

      color: var(--text-color);

      font-weight: 500;

      flex: 1; 

      text-align: right; 

      word-break: break-word; 

      

      &.high-rate {

        color: #ff6b6b;

      }

    }

  }

}



.quick-link-section {

  .section-header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 12px;

    

    h4 {

      margin: 0;

      font-size: 16px;

      color: var(--text-color);

    }

    

    .view-toggle {

      display: flex;

      gap: 8px;

      

      .toggle-btn {

        display: flex;

        align-items: center;

        gap: 4px;

        padding: 6px 10px;

        background-color: rgba(var(--theme-color-rgb), 0.05);

        border: 1px solid rgba(var(--theme-color-rgb), 0.1);

        border-radius: 4px;

        color: var(--text-muted);

        font-size: 12px;

        cursor: pointer;

        transition: all 0.2s ease;

        

        &:hover {

          background-color: rgba(var(--theme-color-rgb), 0.1);

          color: var(--theme-color);

        }

        

        &.active {

          background-color: rgba(var(--theme-color-rgb), 0.15);

          color: var(--theme-color);

          border-color: rgba(var(--theme-color-rgb), 0.3);

        }

      }

    }

  }

  

  .link-card {

    background-color: rgba(var(--theme-color-rgb), 0.05);

    border-radius: 8px;

    padding: 12px;

    position: relative;

    

    .link-text {

      margin: 0;

      font-family: monospace; 

      font-size: 13px;

      overflow-x: hidden;

      overflow-y: auto; 

      text-overflow: ellipsis;

      white-space: pre-wrap;

      word-break: break-all;

      color: var(--text-color);

      margin-bottom: 36px; 

      max-height: 200px; 

      padding-bottom: 8px; 

    }

    

    .copy-btn {

      position: absolute;

      bottom: 12px;

      right: 12px;

      background-color: rgba(var(--theme-color-rgb), 0.1);

      color: var(--theme-color);

      border: none;

      border-radius: 6px;

      padding: 8px 12px;

      font-size: 13px;

      cursor: pointer;

      display: flex;

      align-items: center;

      gap: 4px;

      transition: all 0.2s ease;

      

      &:hover {

        background-color: rgba(var(--theme-color-rgb), 0.2);

      }

    }

  }

  

  .qrcode-container {

    background-color: rgba(var(--theme-color-rgb), 0.05);

    border-radius: 8px;

    padding: 16px;

    display: flex;

    justify-content: center;

    align-items: center;

    min-height: 240px;

    

    .qrcode-loading {

      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: center;

      gap: 16px;

      

      .loader {

        width: 40px;

        height: 40px;

        border: 3px solid rgba(var(--theme-color-rgb), 0.3);

        border-radius: 50%;

        border-top-color: var(--theme-color);

        animation: spin 1s linear infinite;

      }

      

      p {

        color: var(--text-muted);

        font-size: 14px;

        margin: 0;

      }

    }

    

    .qrcode-wrapper {

      position: relative;

      display: flex;

      flex-direction: column;

      align-items: center;

      gap: 12px;

      

      img {

        width: 200px;

        height: 200px;

        border-radius: 8px;

        background-color: white;

        padding: 8px;

        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);

      }

      

      .copy-btn {

        background-color: rgba(var(--theme-color-rgb), 0.1);

        color: var(--theme-color);

        border: none;

        border-radius: 4px;

        padding: 6px 10px;

        font-size: 12px;

        cursor: pointer;

        display: flex;

        align-items: center;

        gap: 4px;

        transition: all 0.2s ease;

        width: auto;

        

        &:hover {

          background-color: rgba(var(--theme-color-rgb), 0.2);

        }

      }

    }

  }

  

  @keyframes spin {

    to { transform: rotate(360deg); }

  }

}





.page-nav-btn-container {

  display: flex;

  justify-content: center;

  margin-top: auto; 

  padding-top: 16px;

}



.page-nav-btn {

  background-color: rgba(var(--theme-color-rgb), 0.1);

  color: var(--theme-color);

  border: 1px solid rgba(var(--theme-color-rgb), 0.2);

  border-radius: 8px;

  padding: 10px 16px;

  font-size: 14px;

  font-weight: 500;

  cursor: pointer;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  transition: all 0.2s ease;

  width: 100%;

  max-width: 240px;

  

  &:hover {

    background-color: rgba(var(--theme-color-rgb), 0.2);

    transform: translateY(-2px);

  }

  

  &:active {

    transform: translateY(0);

  }

}



@media (max-width: 480px) {

  .node-detail-modal-overlay {

    padding: 10px; 

    align-items: center; 

  }

  

  .node-detail-modal-container {

    margin: 0; 

    max-height: calc(90vh - 80px); 

    height: auto; 

  }

  

  .node-detail-modal-body {

    padding: 16px; 

    gap: 16px; 

  }

  

  .node-info-section .info-row {

    

    display: flex;

    flex-direction: row; 

    justify-content: space-between; 

    

    .info-label {

      font-size: 14px;

      flex: 0 0 40%; 

    }

    

    .info-value {

      font-size: 14px;

      flex: 1; 

      text-align: right; 

    }

  }

  

  .quick-link-section {

    .section-header {

      flex-direction: column;

      align-items: flex-start;

      gap: 10px;

      

      .view-toggle {

        width: 100%;

        

        .toggle-btn {

          flex: 1;

          justify-content: center;

        }

      }

    }

    

    .link-card {

      .link-text {

        font-size: 12px; 

        margin-bottom: 40px; 

      }

    }

  }

  

  .page-nav-btn {

    padding: 10px 16px; 

  }

}

</style> 
