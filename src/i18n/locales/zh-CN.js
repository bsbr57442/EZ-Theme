﻿
import { SITE_CONFIG } from '../../utils/baseConfig';

export default {
  common: {
    appName: SITE_CONFIG.siteName,
    welcome: `欢迎使用 ${SITE_CONFIG.siteName}`,
    login: '登录',
    register: '注册',
    logout: '退出登录',
    email: '邮箱',
    password: '密码',
    confirmPassword: '确认密码',
    forgotPassword: '忘记密码？',
    resetPassword: '重置密码',
    rememberMe: '记住我',
    submit: '提交',
    cancel: '取消',
    save: '保存',
    delete: '删除',
    edit: '编辑',
    add: '添加',
    search: '搜索',
    filter: '筛选',
    refresh: '刷新',
    back: '返回',
    optional: '(选填)',
    next: '下一步',
    previous: '上一步',
    loading: '加载中...',
    success: '成功',
    error: '错误',
    warning: '警告',
    info: '信息',
    toggleTheme: '切换主题',
    language: '语言',
    noData: '暂无数据',
    confirm: '确认',
    dashboard: '仪表盘',
    profile: '个人资料',
    settings: '设置',
    help: '帮助',
    about: '关于',
    verificationCode: '验证码',
    sendCode: '发送验证码',
    verify: '验证',
    enterEmail: '请输入邮箱地址',
    enterVerificationCode: '请输入验证码',
    enterPassword: '请输入密码',
    selectEmailDomain: '选择邮箱域名',
    domainNotAuthorized: '域名未授权',
    contactAdmin: '请联系管理员获取授权',
    prevNotice: '上一条',
    nextNotice: '下一条',
    noticeCount: '第 {current} 条，共 {total} 条',
    copied: '已复制到剪贴板',
    userCenter: '用户中心',
    myWallet: '我的钱包',
    changePassword: '修改密码',
    logoutText: '退出登录',
    loadingQRCode: '正在生成二维码...',
    qrCodeLoadFailed: '二维码加载失败',
    qrCodeGenerationFailed: '二维码生成失败',
    retry: '重试',
    copyFailed: '复制失败',
    page: '页',
    networkError: '网络错误',
    swipeHint: '滑动切换',
    on: '开启',
    off: '关闭',
    copy: '复制',
    viewDetails: '查看详情',
    close: '关闭',
    error_occurred: '发生错误，请稍后重试',
    apiChecking: '正在检测API可用性...',
    checking: '正在检测',
    completed: '已完成'
  },
  auth: {
    loginTitle: '欢迎回来',
    loginSubtitle: '请登录您的账户',
    registerTitle: '创建账户',
    registerSubtitle: '注册一个新账户',
    emailPlaceholder: '请输入您的邮箱地址',
    passwordPlaceholder: '请输入您的密码',
    confirmPasswordPlaceholder: '请再次输入密码',
    emailVerificationSent: '验证码已发送至您的邮箱',
    emailVerificationFailed: '验证码发送失败',
    verificationCodePlaceholder: '请输入验证码',
    inviteCodePlaceholder: '请输入邀请码（可选）',
    forgotPasswordTitle: '找回密码',
    forgotPasswordSubtitle: '我们将发送验证码到您的邮箱',
    registerSuccess: '注册成功',
    registerFailed: '注册失败',
    loginSuccess: '登录成功',
    loginFailed: '登录失败',
    logoutSuccess: '登出成功',
    forgotPasswordSuccess: '重置密码邮件已发送',
    forgotPasswordFailed: '重置密码请求失败',
    alreadyLoggedIn: '您已经登录，即将跳转至仪表板',
    emailRequired: '请输入邮箱地址',
    passwordRequired: '请输入密码',
    emailInvalid: '请输入有效的邮箱地址',
    passwordMismatch: '两次输入的密码不一致',
    noAccount: '还没有账户？',
    createAccount: '创建账户',
    haveAccount: '已有账户？',
    loginHere: '在此登录',
    passwordMatchError: '两次输入的密码不一致',
    captchaSuccess: '人机验证成功',
    captchaFailed: '人机验证失败',
    
    loginNow: '立即登录',
    resetNow: '重置密码',
    alreadyHaveAccount: '已有账户？',
    rememberPassword: '想起密码？',
    codeRequired: '请输入验证码',
    codeInvalid: '验证码无效',
    codeSent: '验证码已发送',
    sendCodeFailed: '验证码发送失败',
    passwordResetSuccess: '密码重置成功',
    passwordResetFailed: '密码重置失败，请稍后重试',
    inviteCode: '邀请码',
    agreeToTerms: '我已阅读并同意',
    termsOfService: '服务条款',
    mustAgreeToTerms: '您必须同意服务条款才能注册',
    emailPrefixPlaceholder: '请输入邮箱前缀',
    newPasswordPlaceholder: '请输入新密码',
    requiresAuth: '需要登录',
    captcha: '人机验证',
    captchaRequired: '请完成人机验证',
    captchaInvalid: '人机验证失败，请重试',
    captchaExpired: '验证已过期，请重新验证',
    captchaError: '验证出错，请重试',
    captchaLoading: '正在加载验证组件...',
    verifyTokenSuccess: '令牌验证成功',
    verifyTokenFailed: '令牌验证失败，请重试'
  },
  validation: {
    required: '{field}不能为空',
    email: '请输入有效的邮箱地址',
    minLength: '{field}长度不能少于{length}个字符',
    maxLength: '{field}长度不能超过{length}个字符',
    passwordMatch: '两次输入的密码不一致',
    emailRequired: '请输入邮箱地址',
    emailInvalid: '请输入有效的邮箱地址',
    passwordRequired: '请输入密码',
    confirmPasswordRequired: '请确认密码',
    passwordsDontMatch: '两次输入的密码不一致',
    codeRequired: '请输入验证码'
  },
  errors: {
    networkError: '网络错误，请检查您的连接',
    serverError: '服务器错误，请稍后再试',
    unauthorized: '未授权，请登录',
    forbidden: '禁止访问，权限不足',
    notFound: '页面未找到',
    notFoundDescription: '抱歉，您访问的页面不存在或已被移除',
    backToHome: '返回首页',
    unknown: '发生未知错误',
    browserRestricted: '浏览器访问受限'
  },
  messages: {
    loginSuccess: '登录成功',
    loginFailed: '登录失败，请检查您的登录信息',
    registerSuccess: '注册成功',
    registerFailed: '注册失败，请稍后重试',
    passwordResetSuccess: '密码重置成功',
    passwordResetFailed: '密码重置失败，请稍后重试',
    logoutSuccess: '已成功退出登录',
    codeSent: '验证码已发送',
    sendCodeFailed: '验证码发送失败',
    configLoadFailed: '配置加载失败，请刷新页面重试'
  },
  landing: {
    mainText: SITE_CONFIG.landingText['zh-CN'] || '探索全球网络无限可能',
    scrollText: '向下滑动以登录',
    exploreButton: '开始探索'
  },
  dashboard: {
    welcome: '欢迎回来',
    welcomeDesc: '查看您的服务和使用情况',
    siteAnnouncement: '网站公告',
    subscriptionInfo: '套餐信息',
    planName: '套餐名称',
    expiryDate: '到期时间',
    planTraffic: '套餐流量',
    remainingTraffic: '剩余流量',
    remainingDays: '剩余天数',
    accountBalance: '账户余额',
    permanent: '永久',
    none: '无',
    days: '天',
    noPlanPrompt: '您目前没有有效的套餐，请购买套餐以使用服务',
    importSubscription: '导入订阅',
    purchasePlan: '购买套餐',
    resetTraffic: '重置流量',
    renewPlan: '续费套餐',
    noPlanToRenew: '没有可续费的套餐',
    resetTrafficConfirm: '确认重置流量',
    resetTrafficDesc: '此操作将重置已使用的流量但不会增加套餐时长，是否继续？',
    resetTrafficSuccess: '成功创建重置流量订单',
    resetTrafficWarning: '重置仅影响已使用流量，不会延长套餐有效期',
    ticketSupport: '工单支持',
    viewHelp: '查看帮助',
    documentation: '使用文档',
    pendingItems: '待处理事项',
    pendingOrders: '待支付订单',
    pendingTickets: '待回复工单',
    pendingInvites: '待管理员处理佣金',
    officialClients: '官方客户端',
    deviceLimit: '在线设备',
    unlimited: '不限制',
    nextResetTime: '下次重置时间',
    
    importTitle: '选择导入方式',
    copySubscription: '复制订阅地址',
    copySubscriptionDesc: '复制订阅链接到剪贴板',
    scanQRCode: '扫描二维码订阅',
    scanQRCodeDesc: '使用客户端扫描二维码导入',
    importToShadowrocket: '导入到 Shadowrocket',
    importToSurge: '导入到 Surge',
    importToStash: '导入到 Stash',
    importToV2rayNG: '导入到 V2rayNG',
    importToClash: '导入到 Clash',
    importToClashX: '导入到 ClashX',
    selectPlatform: '选择您的设备平台',
    subscriptionCopied: '订阅链接已复制到剪贴板',
    copyFailed: '复制失败，请手动复制',
    manualImportRequired: '无法自动导入，请手动复制订阅链接导入',
    noSubscription: '无可用订阅',
    noClientsAvailable: '该平台暂无可用快速导入方式',
    clientNotInstalled: '您没有安装对应的客户端，已复制订阅链接到剪贴板'
  },
  platforms: {
    ios: 'iOS',
    android: 'Android',
    windows: 'Windows',
    macos: 'MacOS'
  },
  menu: {
    dashboard: '仪表盘',
    shop: '商店',
    invite: '邀请',
    more: '更多',
    commission: '返利',
    hotSale: '热销'
  },
  more: {
    title: '更多功能',
    description: '探索更多功能和服务',
    viewHelp: '查看使用帮助和常见问题',
    viewNodes: '查看可用的服务器节点',
    manageOrders: '管理您的订单',
    getTechnicalSupport: '获取技术支持',
    manageProfile: '管理个人资料'
  },
  nodes: {
    title: '节点列表',
    loading: '正在加载节点...',
    noNodes: '暂无可用节点',
    copiedToClipboard: '已复制到剪贴板',
    welcome: {
      title: '节点列表',
      description: '查看并使用可用的服务器节点'
    },
    type: '节点类型',
    rate: '倍率',
    host: '域名',
    port: '端口',
    cipher: '加密方式',
    security: '安全设置',
    allowInsecure: '允许不安全',
    secure: '安全',
    tls: 'TLS',
    quickLink: '快速订阅链接',
    linkView: '链接',
    qrcodeView: '二维码',
    invalidNodeData: '节点数据不完整，无法生成链接',
    unsupportedNodeType: '不支持的节点类型',
    userInfoError: '获取用户信息失败',
    viewSubscribeLink: '查看订阅链接'
  },
  orders: {
    title: '订单列表',
    loading: '正在加载订单...',
    tradeNo: '订单号',
    createdAt: '创建时间',
    cycle: '周期',
    totalAmount: '金额',
    statusLabel: '状态',
    actions: '操作',
    viewDetail: '查看详情',
    cancel: '取消订单',
    noOrders: '暂无订单',
    goShopping: '去购买套餐',
    cancelConfirmTitle: '确认取消订单',
    cancelConfirmText: '您确定要取消此订单吗？此操作无法撤销。',
    cancelSuccess: '订单已取消',
    cancelFailed: '取消订单失败',
    welcome: {
      title: '订单列表',
      description: '查看并管理您的订单'
    },
    status: {
      pending: '待支付',
      processing: '开通中',
      cancelled: '已取消',
      completed: '已完成',
      discounted: '已折抵',
      unknown: '未知状态'
    },
    confirmOrder: '确认订单',
    payment: '支付订单',
  },
  tickets: {
    title: '工单系统',
    description: '与我们的支持团队联系',
    
    searchPlaceholder: '搜索工单...',
    newTicket: '新建工单',
    createNew: '创建工单',
    
    subject: '主题',
    subjectPlaceholder: '请输入工单主题',
    message: '内容',
    messagePlaceholder: '请详细描述您的问题',
    level: '优先级',
    levelLow: '低',
    levelMedium: '中',
    levelHigh: '高',
    
    statusOpen: '处理中',
    statusClosed: '已关闭',
    
    noTickets: '暂无工单',
    selectTicket: '请选择工单查看详情',
    noMessages: '暂无消息记录',
    loadingMessages: '正在加载消息...',
    loadingTickets: '加载工单中...',
    
    formIncomplete: '请填写完整的工单信息',
    createSuccess: '工单创建成功',
    createError: '工单创建失败',
    fetchError: '获取工单列表失败',
    fetchDetailError: '获取工单详情失败',
    
    replyPlaceholder: '请输入回复内容...',
    send: '发送',
    replySent: '回复已发送',
    replyError: '回复发送失败',
    
    admin: '客服',
    you: '我',
    
    closeTicket: '关闭工单',
    closeConfirmTitle: '确认关闭工单',
    closeConfirmText: '您确定要关闭此工单吗？关闭后将无法继续回复。',
    closeSuccess: '工单已关闭',
    closeError: '关闭工单失败',
    ticketClosed: '此工单已关闭，无法回复',
    closing: '关闭中...',
    
    createdAt: '创建时间',
    
    smallScreenNotice: '检测到小屏幕设备',
    switchToMobile: '为了获得更好的体验，建议切换到移动端视图',
    switchToMobileView: '切换到移动端视图',
    
    largeScreenNotice: '检测到较大屏幕',
    switchToDesktop: '建议使用电脑端工单页面以获得更好的体验',
    switchToDesktopView: '切换到电脑端视图',
    popup: {
      close_btn: '关闭',
      wait_close_btn: '{seconds}秒后关闭'
    }
  },
  profile: {
    title: '用户中心',
    basicInfo: '基本信息',
    email: '邮箱账号',
    userId: '用户ID',
    planId: '套餐ID',
    balance: '余额',
    commission: '佣金',
    createdAt: '创建时间',
    expiredAt: '到期时间',
    notifications: '通知设置',
    expireRemind: '到期提醒',
    trafficRemind: '流量提醒',
    expireRemindDesc: '接收账户到期提醒邮件',
    trafficRemindDesc: '接收流量用尽提醒邮件',
    security: '安全设置',
    changePassword: '修改密码',
    changePasswordTitle: '修改账户密码',
    oldPassword: '当前密码',
    newPassword: '新密码',
    confirmPassword: '确认新密码',
    passwordMismatch: '两次输入的密码不一致',
    passwordChanged: '密码已更改',
    passwordError: '修改密码失败，请检查当前密码是否正确',
    subscription: '订阅管理',
    resetSecurity: '重置订阅',
    resetSecurityTitle: '重置订阅链接',
    resetSecurityConfirm: '确定要重置订阅吗？重置后，您之前的订阅将失效，您需要重新导入新的订阅。',
    resetSuccess: '重置成功',
    resetError: '重置失败',
    copySubscription: '复制订阅链接',
    subscriptionCopied: '订阅链接已复制',
    updateSuccess: '更新成功',
    updateError: '更新失败',
    settingsUpdated: '设置已更新',
    loading: '正在加载个人信息...',
    error: '加载个人信息失败',
    retry: '重试',
    avatar: '头像',
    giftCard: '礼品卡兑换',
    giftCardTitle: '礼品卡兑换',
    giftCardPlaceholder: '输入礼品卡代码',
    giftCardSubmit: '兑换',
    giftCardSuccess: '礼品卡兑换成功',
    giftCardError: '礼品卡兑换失败',
    giftCardEmpty: '请输入礼品卡代码',
    saveChanges: '保存更改',
    cancel: '取消',
    noSubscription: '暂无订阅链接',
    getSubscription: '获取订阅链接',
    avatarUploadSuccess: '头像上传成功',
    avatarUploadError: '头像上传失败',
    confirmLogout: '确认退出登录',
    logoutDesc: '您确定要退出登录吗？',
    logout: '退出登录',
    recentDevices: '近期登录设备',
    noDevices: '暂无登录记录',
    unknownDevice: '未知设备',
    unknownIP: '未知IP',
    unknownBrowser: '未知浏览器',
    sessionError: '获取登录记录失败',
    telegramGroup: 'Telegram 交流群',
    telegramBot: 'Telegram 机器人',
    bindTelegram: '绑定 Telegram 机器人',
    telegramStep1: '第一步',
    telegramStep2: '第二步',
    telegramSearchTip: '打开 Telegram 搜索',
    telegramSendCommand: '向机器人发送如下指令',
    commandCopied: '指令已复制到剪贴板',
    iKnow: '我知道了',
    telegram: 'Telegram 通信',
    telegramError: '获取Telegram信息失败'
  },
  contextMenu: {
    refresh: '刷新页面',
    back: '返回上一页',
    forward: '前进下一页',
    copy: '复制',
    paste: '粘贴'
  },
  service: {
    title: '在线客服',
    description: '与我们的客服团队实时交流',
    loading: '正在加载客服系统...',
    waitForIcon: '请等待一会，若已出现对话图标请点击',
    loadError: '客服系统加载失败',
    retry: '重试',
    offline: '客服当前不在线',
    leaveMessage: '留言',
    startChat: '开始聊天',
    back: '返回'
  },
  shop: {
    title: '商店',
    description: '查看并购买可用的套餐',
    loading: '正在加载套餐...',
    filter: {
      all: '全部',
      recurring: '周期性',
      onetime: '一次性'
    },
    no_plans_found: '未找到符合条件的套餐',
    try_different_filter: '请尝试其他筛选条件',
    reset_filter: '重置筛选',
    plan: {
      purchase: '购买',
      sold_out_btn: '已售罄',
      stock: {
        plenty: '库存充足',
        warning: '库存紧张',
        sold_out: '已售罄'
      },
      periods: {
        month: ' / 月付',
        quarter: ' / 季度',
        half_year: ' / 半年',
        year: ' / 一年',
        two_year: ' / 两年',
        three_year: ' / 三年',
        onetime: ' / 一次性'
      },
      price_options: {
        month: '月付',
        quarter: '季度',
        half_year: '半年',
        year: '一年',
        two_year: '两年',
        three_year: '三年',
        onetime: '一次性',
        reset_price: '重置流量包',
        deposit: '充值'
      },
      discount: {
        relative: '相对折扣大约',
        savings: '为您节省'
      }
    },
    stats: {
      global_nodes: '全球节点',
      global_nodes_desc: '遍布全球的高速节点',
      speed: '极速体验',
      speed_desc: '高速稳定的网络体验',
      streaming: '流媒体解锁',
      streaming_desc: '解锁各类流媒体服务',
      devices: '多设备支持',
      devices_desc: '同时支持多台设备使用'
    },
    config_error: '获取商店配置失败',
    popup: {
      close_btn: '我知道了',
      wait_close_btn: '请等待 {seconds} 秒'
    }
  },
  order: {
    title: '确认订单',
    description: '请确认您的订单信息并完成支付',
    existing_plan_warning_title: '您已有一个有效套餐',
    existing_plan_warning_desc: '购买新套餐将替换您当前的有效套餐',
    select_period: '选择计费周期',
    coupon: '优惠码',
    enter_coupon: '输入优惠码（如有）',
    verify_coupon: '验证',
    coupon_applied: '已应用',
    remove_coupon: '移除',
    coupon_success: '优惠码 {code} 应用成功',
    coupon_success_fixed: '优惠码 {code} 应用成功，优惠 {amount} 元',
    coupon_success_percent: '优惠码 {code} 应用成功，优惠 {percent}%',
    coupon_invalid: '无效的优惠码',
    coupon_removed: '优惠码已移除',
    order_summary: '订单摘要',
    subtotal: '小计',
    discount: '优惠',
    total: '总计',
    back_to_shop: '返回商店',
    place_order: '提交订单',
    order_success: '订单创建成功',
    order_failed: '订单创建失败',
    no_plan_selected: '未选择套餐',
    plan_not_found: '套餐不存在',
    failed_to_fetch_plan: '获取套餐信息失败'
  },
  payment: {
    title: '支付订单',
    description: '请选择您的支付方式完成订单',
    product_info: '产品信息',
    plan_name: '套餐名称',
    period: '周期',
    period_types: {
      reset_price: '重置流量包',
      deposit: '充值'
    },
    traffic: '流量',
    order_info: '订单信息',
    trade_no: '订单号',
    created_at: '创建时间',
    total_price: '套餐金额',
    total_amount: '应付金额',
    discount_amount: '优惠金额',
    balance_amount: '使用余额',
    refund_amount: '退款金额',
    use_credit: '使用余额',
    payment_method: '支付方式',
    free_order: '免费订单',
    free_order_title: '您的订单是免费的',
    free_order_desc: '点击下方的"激活"按钮即可直接开通服务',
    fee: '手续费',
    cancel_order: '取消订单',
    check_payment: '检测支付状态',
    activate: '激活',
    continue_to_dashboard: '前往仪表盘',
    confirm_cancel: '确定要取消此订单吗？',
    cancel_success: '订单已取消',
    cancel_failed: '取消订单失败',
    payment_successful: '支付成功',
    payment_successful_desc: '您的订单已支付成功，服务已开通',
    payment_processing: '订单正在处理中，请稍候...',
    order_cancelled: '订单已取消',
    check_failed: '检测支付状态失败',
    select_method_first: '请先选择支付方式',
    no_order_selected: '未选择订单',
    order_not_found: '订单不存在',
    failed_to_fetch_order: '获取订单信息失败',
    failed_to_fetch_methods: '获取支付方式失败',
    confirm_cancel_title: '确认取消订单',
    confirm_cancel_desc: '取消订单后将无法恢复，是否确认取消？',
    payment_return_description: '支付完成后将自动返回',
    return_to_dashboard: '返回仪表盘',
    order_expired: '订单已过期',
    create_new_order: '创建新订单',
    handling_fee: '手续费',
    total_with_fee: '含手续费总额',
    pay_now: '立即支付',
    scan_qrcode: '请扫描二维码完成支付',
    pay_success: '支付成功',
    pay_processing: '正在处理支付...',
    open_in_new_tab: '在新标签页打开',
    check_timeout: '检测支付状态超时，请稍后重试',
    payment_pending: '支付处理中，请稍后再检查',
    copy_success: '已复制到剪贴板',
    copy_failed: '复制失败，请手动复制',
    check_manually: '点击检查',
    auto_checking: '自动检查中...',
    ios_notice: 'iOS设备请点击"前往支付"按钮完成支付',
    safari_payment_notice: 'Safari浏览器请点击下方按钮进行支付',
    safari_payment_button: '点击打开支付页面',
    continue_to_wallet: '返回充值页面',
    order_status: '订单状态',
    return_to_previous: '返回上一页',
    status: {
      pending: '待支付',
      processing: '开通中',
      cancelled: '已取消',
      completed: '已完成',
      discounted: '已折抵',
      unknown: '未知状态',
      activate: '待激活'
    }
  },
  invite: {
    title: '我的返佣',
    description: '邀请好友注册使用，获取佣金收入',
    stats: {
      registeredUsers: '已注册用户数',
      pendingCommission: '确认中的佣金',
      availableCommission: '累计获得佣金',
      commissionRate: '佣金比例'
    },
    rules: {
      title: '返佣规则',
      share: {
        title: '1. 分享',
        desc: '分享邀请链接'
      },
      register: {
        title: '2. 注册',
        desc: '好友完成注册'
      },
      purchase: {
        title: '3. 购买',
        desc: '好友购买套餐'
      },
      commission: {
        title: '4. 返佣',
        desc: '获得{rate}%返佣'
      }
    },
    balance: {
      title: '佣金余额',
      available: '可用佣金',
      description: '邀请好友获得的佣金，可以直接划转到消费余额',
      transferToBalance: '划转到余额',
      withdraw: '提现'
    },
    transfer: {
      title: '划转佣金',
      warning: '注意',
      warningDesc: '划转后的余额仅用于消费使用，无法提现',
      amount: '划转金额',
      amountPlaceholder: '请输入划转金额',
      availableCommission: '可用佣金',
      confirm: '确认划转',
      processing: '处理中...',
      success: '划转成功',
      failure: '划转失败',
      insufficientFunds: '可用佣金不足',
      invalidAmount: '请输入有效的金额'
    },
    withdraw: {
      title: '提现佣金',
      platform: '提现平台',
      account: '提现账号',
      accountPlaceholder: '请输入提现账号',
      amount: '提现金额',
      amountPlaceholder: '请输入提现金额',
      availableCommission: '可提现佣金',
      noPlatforms: '没有可用提现平台',
      confirm: '确认提现',
      processing: '处理中...',
      success: '提现申请已提交',
      failure: '提现申请失败',
      tip: '提示',
      invalidAmount: '请输入有效的金额',
      insufficientFunds: '可用佣金不足',
      belowMinAmount: '提现金额不能低于{amount}',
      minWithdrawAmount: '最低提现金额'
    },
    inviteLink: {
      title: '邀请链接',
      createCode: '创建邀请码',
      creating: '生成中...',
      inviteCode: '邀请码',
      registeredCount: '已注册',
      scanDescription: '扫码注册可获得额外福利',
      createdAt: '创建于 {date}',
      placeholder: '生成的邀请链接将显示在这里',
      copyLink: '复制链接',
      copied: '已复制',
      noInviteCode: '暂无可用邀请码',
      created: '邀请码生成成功，可以分享给好友了'
    },
    share: {
      wechat: '微信',
      qq: 'QQ',
      twitter: 'Twitter',
      telegram: 'Telegram',
      noLinkAvailable: '无可用邀请链接',
      scanTitle: '使用微信扫描分享',
      scanQRCode: '请使用微信扫描二维码',
      inviteQRCode: '邀请链接二维码',
      orCopyLink: '或者复制链接',
      shareTitle: '邀请您使用我们的服务',
      shareDescription: '我正在使用这个服务，推荐您也来体验'
    },
    records: {
      title: '返佣记录',
      empty: '暂无返佣记录',
      date: '时间',
      commission: '佣金',
      details: '详情',
      user: '用户',
      registerTime: '注册时间',
      amount: '消费金额',
      userPlaceholder: '用户',
      noRecords: '您还没有邀请记录，生成邀请码并分享给朋友吧！',
      refresh: '刷新',
      refreshing: '刷新中...',
      refreshingData: '正在刷新数据...',
      fetchDataError: '获取数据时出错',
      fetchError: '获取数据失败',
      status: {
        title: '状态',
        confirmed: '已确认',
        pending: '确认中',
        waiting: '等待中',
        processing: '处理中',
        invalid: '无效',
        unknown: '未知'
      },
      types: {
        confirmed_commission: '已确认佣金',
        pending_commission: '确认中佣金',
        all: '全部'
      }
    }
  },
  docs: {
    title: '文档中心',
    searchPlaceholder: '搜索文档...',
    loading: '正在加载文档...',
    retry: '重试',
    clearSearch: '清除搜索',
    backToList: '返回文档列表',
    lastUpdated: '最后更新',
    noDocuments: '暂无文档',
    noSearchResults: '未找到相关文档',
    fetchError: '获取文档失败',
    unknownError: '发生未知错误',
    docNotFound: '文档不存在',
    invalidDocId: '无效的文档ID',
    contentFormatError: '文档内容格式错误，无法正常显示',
    languageHint: '当前语言 {currentLang} 暂无文档，请尝试切换到其他语言',
    networkError: '网络错误',
    welcome: {
      title: '文档中心',
      description: '查找并阅读有关使用和配置的详细文档。'
    }
  },
  browserRestricted: {
    title: '浏览器访问受限',
    subtitle: '当前浏览器不受支持',
    description: '为了保证最佳的浏览体验和安全性，本网站不支持您正在使用的浏览器。',
    recommendText: '请使用以下推荐的浏览器访问：',
    currentBrowser: '您当前正在使用：',
    currentUrl: '当前网址：',
    downloadChrome: '下载 Chrome 浏览器',
    downloadEdge: '下载 Edge 浏览器',
    downloadSafari: '下载 Safari 浏览器',
    openWithRecommended: '使用推荐浏览器打开当前页面',
    whyRestricted: '为什么限制某些浏览器？',
    whyRestrictedDesc: '一些浏览器可能存在安全问题或不支持必要的功能，我们限制这些浏览器是为了确保您的账户安全和提供更好的用户体验。',
    supportedBrowsersTitle: '支持访问的浏览器列表',
    browserNames: {
      Chrome: 'Chrome 浏览器',
      Edge: 'Edge 浏览器',
      Firefox: 'Firefox 浏览器',
      Safari: 'Safari 浏览器',
      Opera: 'Opera 浏览器',
      UC: 'UC 浏览器',
      Maxthon: '傲游浏览器',
      Unknown: '未知浏览器'
    }
  },
  trafficLog: {
    title: '流量明细',
    description: '查看您的流量使用情况明细记录',
    uploadTraffic: '上行流量',
    downloadTraffic: '下行流量',
    totalTraffic: '总流量',
    date: '日期',
    serverRate: '倍率',
    actualTraffic: '实际使用',
    deductedTraffic: '扣除流量',
    formula: '计算公式',
    formulaContent: '(实际上行 + 实际下行) × 倍率 = 扣除流量',
    noTrafficData: '暂无流量使用记录',
    loadingTraffic: '正在加载流量数据...',
    errorLoadingTraffic: '加载流量数据失败',
    retry: '重试',
    viewTrafficLog: '查看流量明细',
    days: '天',
    trafficLogDesc: '查看详细的流量使用记录和统计',
    trafficChart: '流量趋势图'
  },
  wallet: {
    balance: {
      title: '账户余额',
      description: '充值后的余额仅限消费'
    },
    deposit: {
      title: '充值余额',
      notice: '充值后的余额仅限消费，无法提现',
      customAmount: '自定义金额',
      customAmountPlaceholder: '请输入充值金额',
      button: '立即充值',
      success: '充值订单创建成功',
      failed: '创建充值订单失败',
      amountError: {
        required: '请选择或输入充值金额',
        invalid: '请输入有效金额',
        minimum: '最低充值金额为1元'
      }
    },
    welcome: {
      title: '账户充值',
      description: '在这里您可以轻松地为您的账户充值，选择预设金额或输入自定义金额进行充值。充值后的余额将立即到账并可用于购买我们的服务。'
    }
  }
}; 
