﻿
import { SITE_CONFIG } from '../../utils/baseConfig';

export default {
  common: {
    appName: SITE_CONFIG.siteName,
    welcome: `${SITE_CONFIG.siteName}에 오신 것을 환영합니다`,
    login: '로그인',
    register: '회원가입',
    logout: '로그아웃',
    email: '이메일',
    password: '비밀번호',
    confirmPassword: '비밀번호 확인',
    forgotPassword: '비밀번호를 잊으셨나요?',
    resetPassword: '비밀번호 재설정',
    rememberMe: '로그인 유지',
    submit: '제출',
    cancel: '취소',
    save: '저장',
    delete: '삭제',
    edit: '편집',
    add: '추가',
    search: '검색',
    filter: '필터',
    refresh: '새로고침',
    back: '뒤로',
    optional: '(선택)',
    next: '다음',
    previous: '이전',
    loading: '로딩 중...',
    success: '성공',
    error: '오류',
    warning: '경고',
    info: '정보',
    toggleTheme: '테마 전환',
    language: '언어',
    noData: '데이터 없음',
    confirm: '확인',
    dashboard: '대시보드',
    profile: '프로필',
    settings: '설정',
    help: '도움말',
    about: '소개',
    verificationCode: '인증 코드',
    sendCode: '인증 코드 전송',
    verify: '인증',
    enterEmail: '이메일 주소를 입력하세요',
    enterVerificationCode: '인증 코드를 입력하세요',
    enterPassword: '비밀번호를 입력하세요',
    selectEmailDomain: '이메일 도메인 선택',
    domainNotAuthorized: '도메인이 승인되지 않음',
    contactAdmin: '관리자에게 문의하여 승인을 받으세요',
    prevNotice: '이전 공지',
    nextNotice: '다음 공지',
    noticeCount: '총 {total}개 중 {current}번째',
    copied: '클립보드에 복사됨',
    userCenter: '사용자 센터',
    myWallet: '내 지갑',
    changePassword: '비밀번호 변경',
    logoutText: '로그아웃',
    loadingQRCode: 'QR 코드 생성 중...',
    qrCodeLoadFailed: 'QR 코드 로드 실패',
    qrCodeGenerationFailed: 'QR 코드 생성 실패',
    retry: '재시도',
    copyFailed: '복사 실패',
    page: '페이지',
    networkError: '네트워크 오류',
    swipeHint: '슬라이드하여 전환',
    on: '켜기',
    off: '끄기',
    copy: '복사',
    viewDetails: '자세히 보기',
    close: '닫기',
    error_occurred: '오류가 발생했습니다. 나중에 다시 시도하세요',
    apiChecking: 'API 가용성 확인 중...',
    checking: '확인 중',
    completed: '완료'
  },
  auth: {
    loginTitle: '다시 오신 것을 환영합니다',
    loginSubtitle: '계정에 로그인하세요',
    registerTitle: '계정 생성',
    registerSubtitle: '새 계정을 등록하세요',
    emailPlaceholder: '이메일 주소를 입력하세요',
    passwordPlaceholder: '비밀번호를 입력하세요',
    confirmPasswordPlaceholder: '비밀번호를 다시 입력하세요',
    emailVerificationSent: '인증 코드가 이메일로 전송되었습니다',
    emailVerificationFailed: '인증 코드 전송 실패',
    verificationCodePlaceholder: '인증 코드를 입력하세요',
    inviteCodePlaceholder: '초대 코드를 입력하세요 (선택)',
    forgotPasswordTitle: '비밀번호 찾기',
    forgotPasswordSubtitle: '이메일로 인증 코드를 전송합니다',
    registerSuccess: '회원가입 성공',
    registerFailed: '회원가입 실패',
    loginSuccess: '로그인 성공',
    loginFailed: '로그인 실패',
    logoutSuccess: '로그아웃 성공',
    forgotPasswordSuccess: '비밀번호 재설정 이메일 전송됨',
    forgotPasswordFailed: '비밀번호 재설정 요청 실패',
    alreadyLoggedIn: '이미 로그인되어 있습니다. 대시보드로 이동합니다',
    emailRequired: '이메일 주소를 입력하세요',
    passwordRequired: '비밀번호를 입력하세요',
    emailInvalid: '유효한 이메일 주소를 입력하세요',
    passwordMismatch: '입력한 비밀번호가 일치하지 않습니다',
    noAccount: '계정이 없으신가요?',
    createAccount: '계정 생성',
    haveAccount: '이미 계정이 있으신가요?',
    loginHere: '여기서 로그인',
    passwordMatchError: '입력한 비밀번호가 일치하지 않습니다',
    captchaSuccess: '인증 성공',
    captchaFailed: '인증 실패',
    
    loginNow: '지금 로그인',
    resetNow: '비밀번호 재설정',
    alreadyHaveAccount: '이미 계정이 있으신가요?',
    rememberPassword: '비밀번호 기억하기',
    codeRequired: '인증 코드를 입력하세요',
    codeInvalid: '인증 코드가 유효하지 않습니다',
    codeSent: '인증 코드 전송됨',
    sendCodeFailed: '인증 코드 전송 실패',
    passwordResetSuccess: '비밀번호 재설정 성공',
    passwordResetFailed: '비밀번호 재설정 실패, 나중에 다시 시도하세요',
    inviteCode: '초대 코드',
    agreeToTerms: '읽고 동의했습니다',
    termsOfService: '서비스 약관',
    mustAgreeToTerms: '회원가입하려면 서비스 약관에 동의해야 합니다',
    emailPrefixPlaceholder: '이메일 접두사를 입력하세요',
    newPasswordPlaceholder: '새 비밀번호를 입력하세요',
    requiresAuth: '로그인 필요',
    captcha: '인증',
    captchaRequired: '인증을 완료하세요',
    captchaInvalid: '인증 실패, 다시 시도하세요',
    captchaExpired: '인증이 만료되었습니다. 다시 인증하세요',
    captchaError: '인증 오류, 다시 시도하세요',
    captchaLoading: '인증 컴포넌트 로딩 중...',
    verifyTokenSuccess: '토큰 인증 성공',
    verifyTokenFailed: '토큰 인증 실패, 다시 시도하세요'
  },
  validation: {
    required: '{field}은(는) 필수 입력 항목입니다',
    email: '유효한 이메일 주소를 입력하세요',
    minLength: '{field}의 길이는 {length}자 이상이어야 합니다',
    maxLength: '{field}의 길이는 {length}자를 초과할 수 없습니다',
    passwordMatch: '입력한 비밀번호가 일치하지 않습니다',
    emailRequired: '이메일 주소를 입력하세요',
    emailInvalid: '유효한 이메일 주소를 입력하세요',
    passwordRequired: '비밀번호를 입력하세요',
    confirmPasswordRequired: '비밀번호를 확인하세요',
    passwordsDontMatch: '입력한 비밀번호가 일치하지 않습니다',
    codeRequired: '인증 코드를 입력하세요'
  },
  errors: {
    networkError: '네트워크 오류, 연결을 확인하세요',
    serverError: '서버 오류, 나중에 다시 시도하세요',
    unauthorized: '승인되지 않음, 로그인하세요',
    forbidden: '접근 금지, 권한 부족',
    notFound: '페이지를 찾을 수 없음',
    notFoundDescription: '죄송합니다, 방문한 페이지가 존재하지 않거나 삭제되었습니다',
    backToHome: '홈으로 돌아가기',
    unknown: '알 수 없는 오류 발생',
    browserRestricted: '브라우저 접근 제한'
  },
  messages: {
    loginSuccess: '로그인 성공',
    loginFailed: '로그인 실패, 로그인 정보를 확인하세요',
    registerSuccess: '회원가입 성공',
    registerFailed: '회원가입 실패, 나중에 다시 시도하세요',
    passwordResetSuccess: '비밀번호 재설정 성공',
    passwordResetFailed: '비밀번호 재설정 실패, 나중에 다시 시도하세요',
    logoutSuccess: '로그아웃 성공',
    codeSent: '인증 코드 전송됨',
    sendCodeFailed: '인증 코드 전송 실패',
    configLoadFailed: '구성 로드 실패, 페이지를 새로고침하세요'
  },
  landing: {
    mainText: SITE_CONFIG.landingText['ko-KR'] || '글로벌 네트워크의 무한한 가능성을 탐험하세요',
    scrollText: '아래로 스크롤하여 로그인',
    exploreButton: '탐험 시작'
  },
  dashboard: {
    welcome: '다시 오신 것을 환영합니다',
    welcomeDesc: '서비스 및 사용 현황을 확인하세요',
    siteAnnouncement: '사이트 공지',
    subscriptionInfo: '구독 정보',
    planName: '플랜 이름',
    expiryDate: '만료일',
    planTraffic: '플랜 트래픽',
    remainingTraffic: '남은 트래픽',
    remainingDays: '남은 일수',
    accountBalance: '계정 잔액',
    permanent: '영구',
    none: '없음',
    days: '일',
    noPlanPrompt: '현재 유효한 플랜이 없습니다. 플랜을 구매하여 서비스를 이용하세요',
    importSubscription: '구독 가져오기',
    purchasePlan: '플랜 구매',
    resetTraffic: '트래픽 초기화',
    renewPlan: '플랜 갱신',
    noPlanToRenew: '갱신 가능한 플랜 없음',
    resetTrafficConfirm: '트래픽 초기화 확인',
    resetTrafficDesc: '이 작업은 사용된 트래픽을 초기화하지만 플랜 기간은 연장되지 않습니다. 계속하시겠습니까?',
    resetTrafficSuccess: '트래픽 초기화 주문 생성 성공',
    resetTrafficWarning: '초기화는 사용된 트래픽에만 영향을 미치며 플랜 유효 기간을 연장하지 않습니다',
    ticketSupport: '티켓 지원',
    viewHelp: '도움말 보기',
    documentation: '사용 문서',
    pendingItems: '처리 대기 항목',
    pendingOrders: '결제 대기 주문',
    pendingTickets: '답변 대기 티켓',
    pendingInvites: '관리자 처리 대기 커미션',
    officialClients: '공식 클라이언트',
    deviceLimit: '온라인 기기',
    unlimited: '무제한',
    nextResetTime: '다음 초기화 시간',
    
    importTitle: '가져오기 방식 선택',
    copySubscription: '구독 주소 복사',
    copySubscriptionDesc: '구독 링크를 클립보드에 복사',
    scanQRCode: 'QR 코드 스캔으로 구독',
    scanQRCodeDesc: '클라이언트로 QR 코드를 스캔하여 가져오기',
    importToShadowrocket: 'Shadowrocket으로 가져오기',
    importToSurge: 'Surge로 가져오기',
    importToStash: 'Stash로 가져오기',
    importToV2rayNG: 'V2rayNG로 가져오기',
    importToClash: 'Clash로 가져오기',
    importToClashX: 'ClashX로 가져오기',
    selectPlatform: '기기 플랫폼 선택',
    subscriptionCopied: '구독 링크가 클립보드에 복사되었습니다',
    copyFailed: '복사 실패, 수동으로 복사하세요',
    manualImportRequired: '자동 가져오기가 불가능합니다. 구독 링크를 수동으로 복사하여 가져오세요',
    noSubscription: '사용 가능한 구독 없음',
    noClientsAvailable: '이 플랫폼은 빠른 가져오기 방법을 지원하지 않습니다',
    clientNotInstalled: '해당 클라이언트가 설치되어 있지 않습니다. 구독 링크를 클립보드에 복사했습니다'
  },
  platforms: {
    ios: 'iOS',
    android: 'Android',
    windows: 'Windows',
    macos: 'MacOS'
  },
  menu: {
    dashboard: '대시보드',
    shop: '상점',
    invite: '초대',
    more: '더 보기',
    commission: '커미션',
    hotSale: '인기 상품'
  },
  more: {
    title: '추가 기능',
    description: '더 많은 기능과 서비스를 탐색하세요',
    viewHelp: '사용 도움말 및 FAQ 보기',
    viewNodes: '사용 가능한 서버 노드 보기',
    manageOrders: '주문 관리',
    getTechnicalSupport: '기술 지원 받기',
    manageProfile: '프로필 관리'
  },
  nodes: {
    title: '노드 목록',
    loading: '노드 로딩 중...',
    noNodes: '사용 가능한 노드 없음',
    copiedToClipboard: '클립보드에 복사됨',
    welcome: {
      title: '노드 목록',
      description: '사용 가능한 서버 노드를 확인하고 사용하세요'
    },
    type: '노드 유형',
    rate: '비율',
    host: '도메인',
    port: '포트',
    cipher: '암호화 방식',
    security: '보안 설정',
    allowInsecure: '비보안 허용',
    secure: '보안',
    tls: 'TLS',
    quickLink: '빠른 구독 링크',
    linkView: '링크',
    qrcodeView: 'QR 코드',
    invalidNodeData: '노드 데이터가 완전하지 않아 링크를 생성할 수 없습니다',
    unsupportedNodeType: '지원되지 않는 노드 유형',
    userInfoError: '사용자 정보 가져오기 실패',
    viewSubscribeLink: '구독 링크 보기'
  },
  orders: {
    title: '주문 목록',
    loading: '주문 로딩 중...',
    tradeNo: '주문 번호',
    createdAt: '생성 시간',
    cycle: '주기',
    totalAmount: '금액',
    statusLabel: '상태',
    actions: '작업',
    viewDetail: '자세히 보기',
    cancel: '주문 취소',
    noOrders: '주문 없음',
    goShopping: '플랜 구매하러 가기',
    cancelConfirmTitle: '주문 취소 확인',
    cancelConfirmText: '이 주문을 취소하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
    cancelSuccess: '주문이 취소되었습니다',
    cancelFailed: '주문 취소 실패',
    welcome: {
      title: '주문 목록',
      description: '주문을 확인하고 관리하세요'
    },
    status: {
      pending: '결제 대기',
      processing: '활성화 중',
      cancelled: '취소됨',
      completed: '완료됨',
      discounted: '할인 적용됨',
      unknown: '알 수 없는 상태'
    },
    confirmOrder: '주문 확인',
    payment: '주문 결제',
  },
  tickets: {
    title: '티켓 시스템',
    description: '지원 팀과 연락하세요',
    
    searchPlaceholder: '티켓 검색...',
    newTicket: '새 티켓',
    createNew: '티켓 생성',
    
    subject: '제목',
    subjectPlaceholder: '티켓 제목을 입력하세요',
    message: '내용',
    messagePlaceholder: '문제를 자세히 설명하세요',
    level: '우선순위',
    levelLow: '낮음',
    levelMedium: '중간',
    levelHigh: '높음',
    
    statusOpen: '처리 중',
    statusClosed: '종료됨',
    
    noTickets: '티켓 없음',
    selectTicket: '티켓을 선택하여 자세히 보세요',
    noMessages: '메시지 기록 없음',
    loadingMessages: '메시지 로딩 중...',
    loadingTickets: '티켓 로딩 중...',
    
    formIncomplete: '티켓 정보를 완전히 입력하세요',
    createSuccess: '티켓 생성 성공',
    createError: '티켓 생성 실패',
    fetchError: '티켓 목록 가져오기 실패',
    fetchDetailError: '티켓 상세 정보 가져오기 실패',
    
    replyPlaceholder: '답변 내용을 입력하세요...',
    send: '전송',
    replySent: '답변이 전송되었습니다',
    replyError: '답변 전송 실패',
    
    admin: '고객 지원',
    you: '나',
    
    closeTicket: '티켓 종료',
    closeConfirmTitle: '티켓 종료 확인',
    closeConfirmText: '이 티켓을 종료하시겠습니까? 종료 후에는 답변을 추가할 수 없습니다.',
    closeSuccess: '티켓이 종료되었습니다',
    closeError: '티켓 종료 실패',
    ticketClosed: '이 티켓은 종료되어 답변할 수 없습니다',
    closing: '종료 중...',
    
    createdAt: '생성 시간',
    
    smallScreenNotice: '소형 화면 기기 감지됨',
    switchToMobile: '더 나은 경험을 위해 모바일 뷰로 전환하세요',
    switchToMobileView: '모바일 뷰로 전환',
    
    largeScreenNotice: '대형 화면 감지됨',
    switchToDesktop: '더 나은 경험을 위해 데스크톱 티켓 페이지를 사용하세요',
    switchToDesktopView: '데스크톱 뷰로 전환',
    
    popup: {
      close_btn: '닫기',
      wait_close_btn: '{seconds}초 후 닫기'
    }
  },
  profile: {
    title: '사용자 센터',
    basicInfo: '기본 정보',
    email: '이메일 계정',
    userId: '사용자 ID',
    planId: '플랜 ID',
    balance: '잔액',
    commission: '커미션',
    createdAt: '생성 시간',
    expiredAt: '만료 시간',
    notifications: '알림 설정',
    expireRemind: '만료 알림',
    trafficRemind: '트래픽 알림',
    expireRemindDesc: '계정 만료 알림 이메일 수신',
    trafficRemindDesc: '트래픽 소진 알림 이메일 수신',
    security: '보안 설정',
    changePassword: '비밀번호 변경',
    changePasswordTitle: '계정 비밀번호 변경',
    oldPassword: '현재 비밀번호',
    newPassword: '새 비밀번호',
    confirmPassword: '새 비밀번호 확인',
    passwordMismatch: '입력한 비밀번호가 일치하지 않습니다',
    passwordChanged: '비밀번호가 변경되었습니다',
    passwordError: '비밀번호 변경 실패, 현재 비밀번호가 올바른지 확인하세요',
    subscription: '구독 관리',
    resetSecurity: '구독 초기화',
    resetSecurityTitle: '구독 초기화',
    resetSecurityConfirm: '구독을 초기화하시겠습니까? 초기화 후 이전 구독은 무효화되며 새 구독을 다시 가져와야 합니다.',
    resetSuccess: '초기화 성공',
    resetError: '초기화 실패',
    copySubscription: '구독 링크 복사',
    subscriptionCopied: '구독 링크가 복사되었습니다',
    updateSuccess: '업데이트 성공',
    updateError: '업데이트 실패',
    settingsUpdated: '설정이 업데이트되었습니다',
    loading: '개인 정보 로딩 중...',
    error: '개인 정보 로드 실패',
    retry: '재시도',
    avatar: '아바타',
    giftCard: '기프트 카드 교환',
    giftCardTitle: '기프트 카드 교환',
    giftCardPlaceholder: '기프트 카드 코드를 입력하세요',
    giftCardSubmit: '교환',
    giftCardSuccess: '기프트 카드 교환 성공',
    giftCardError: '기프트 카드 교환 실패',
    giftCardEmpty: '기프트 카드 코드를 입력하세요',
    saveChanges: '변경 저장',
    cancel: '취소',
    noSubscription: '구독 링크 없음',
    getSubscription: '구독 링크 가져오기',
    avatarUploadSuccess: '아바타 업로드 성공',
    avatarUploadError: '아바타 업로드 실패',
    confirmLogout: '로그아웃 확인',
    logoutDesc: '로그아웃하시겠습니까?',
    logout: '로그아웃',
    recentDevices: '최근 로그인 기기',
    noDevices: '로그인 기록 없음',
    unknownDevice: '알 수 없는 기기',
    unknownIP: '알 수 없는 IP',
    unknownBrowser: '알 수 없는 브라우저',
    sessionError: '로그인 기록 가져오기 실패',
    telegramGroup: 'Telegram 커뮤니티',
    telegramBot: 'Telegram 봇',
    bindTelegram: 'Telegram 봇 연결',
    telegramStep1: '1단계',
    telegramStep2: '2단계',
    telegramSearchTip: 'Telegram 검색 열기',
    telegramSendCommand: '봇에 다음 명령을 전송하세요',
    commandCopied: '명령이 클립보드에 복사되었습니다',
    iKnow: '알겠습니다',
    telegram: 'Telegram 통신',
    telegramError: 'Telegram 정보 가져오기 실패'
  },
  contextMenu: {
    refresh: '페이지 새로고침',
    back: '이전 페이지로',
    forward: '다음 페이지로',
    copy: '복사',
    paste: '붙여넣기'
  },
  service: {
    title: '온라인 고객 지원',
    description: '고객 지원 팀과 실시간으로 대화하세요',
    loading: '고객 지원 시스템 로딩 중...',
    waitForIcon: '잠시 기다리시면 대화 아이콘이 나타납니다',
    loadError: '고객 지원 시스템 로드 실패',
    retry: '재시도',
    offline: '고객 지원이 현재 오프라인입니다',
    leaveMessage: '메시지 남기기',
    startChat: '채팅 시작',
    back: '뒤로'
  },
  shop: {
    title: '상점',
    description: '사용 가능한 플랜을 확인하고 구매하세요',
    loading: '플랜 로딩 중...',
    filter: {
      all: '전체',
      recurring: '주기적',
      onetime: '일회성'
    },
    no_plans_found: '조건에 맞는 플랜을 찾을 수 없습니다',
    try_different_filter: '다른 필터를 시도하세요',
    reset_filter: '필터 초기화',
    plan: {
      purchase: '구매',
      sold_out_btn: '품절',
      stock: {
        plenty: '재고 충분',
        warning: '재고 부족',
        sold_out: '품절'
      },
      periods: {
        month: ' / 월간',
        quarter: ' / 분기',
        half_year: ' / 반년',
        year: ' / 연간',
        two_year: ' / 2년',
        three_year: ' / 3년',
        onetime: ' / 일회성'
      },
      price_options: {
        month: '월간',
        quarter: '분기',
        half_year: '반년',
        year: '연간',
        two_year: '2년',
        three_year: '3년',
        onetime: '일회성',
        reset_price: '트래픽 초기화 패키지',
        deposit: '충전'
      },
      discount: {
        relative: '상대 할인 약',
        savings: '절약해 줍니다'
      }
    },
    stats: {
      global_nodes: '글로벌 노드',
      global_nodes_desc: '전 세계에 분포된 고속 노드',
      speed: '고속 경험',
      speed_desc: '빠르고 안정적인 네트워크 경험',
      streaming: '스트리밍 잠금 해제',
      streaming_desc: '다양한 스트리밍 서비스 잠금 해제',
      devices: '다중 기기 지원',
      devices_desc: '여러 기기에서 동시 사용 지원'
    },
    config_error: '상점 구성 가져오기 실패',
    popup: {
      close_btn: '알겠습니다',
      wait_close_btn: '{seconds}초 기다리세요'
    }
  },
  order: {
    title: '주문 확인',
    description: '주문 정보를 확인하고 결제를 완료하세요',
    existing_plan_warning_title: '이미 유효한 플랜이 있습니다',
    existing_plan_warning_desc: '새 플랜을 구매하면 현재 유효한 플랜이 대체됩니다',
    select_period: '결제 주기 선택',
    coupon: '쿠폰',
    enter_coupon: '쿠폰 코드를 입력하세요 (선택)',
    verify_coupon: '확인',
    coupon_applied: '적용됨',
    remove_coupon: '제거',
    coupon_success: '쿠폰 {code} 적용 성공',
    coupon_success_fixed: '쿠폰 {code} 적용 성공, {amount}원 할인',
    coupon_success_percent: '쿠폰 {code} 적용 성공, {percent}% 할인',
    coupon_invalid: '유효하지 않은 쿠폰',
    coupon_removed: '쿠폰이 제거되었습니다',
    order_summary: '주문 요약',
    subtotal: '소계',
    discount: '할인',
    total: '총액',
    back_to_shop: '상점으로 돌아가기',
    place_order: '주문 제출',
    order_success: '주문 생성 성공',
    order_failed: '주문 생성 실패',
    no_plan_selected: '플랜을 선택하지 않음',
    plan_not_found: '플랜이 존재하지 않음',
    failed_to_fetch_plan: '플랜 정보 가져오기 실패'
  },
  payment: {
    title: '주문 결제',
    description: '결제 방법을 선택하여 주문을 완료하세요',
    product_info: '제품 정보',
    plan_name: '플랜 이름',
    period: '주기',
    period_types: {
      reset_price: '트래픽 초기화 패키지',
      deposit: '충전'
    },
    traffic: '트래픽',
    order_info: '주문 정보',
    trade_no: '주문 번호',
    created_at: '생성 시간',
    total_price: '플랜 금액',
    total_amount: '결제 금액',
    discount_amount: '할인 금액',
    balance_amount: '잔액 사용',
    refund_amount: '환불 금액',
    use_credit: '잔액 사용',
    payment_method: '결제 방법',
    free_order: '무료 주문',
    free_order_title: '무료 주문입니다',
    free_order_desc: '아래 "활성화" 버튼을 클릭하여 서비스를 즉시 활성화하세요',
    fee: '수수료',
    cancel_order: '주문 취소',
    check_payment: '결제 상태 확인',
    activate: '활성화',
    continue_to_dashboard: '대시보드로 이동',
    confirm_cancel: '이 주문을 취소하시겠습니까?',
    cancel_success: '주문이 취소되었습니다',
    cancel_failed: '주문 취소 실패',
    payment_successful: '결제 성공',
    payment_successful_desc: '주문이 성공적으로 결제되었으며 서비스가 활성화되었습니다',
    payment_processing: '주문 처리 중, 잠시 기다리세요...',
    order_cancelled: '주문이 취소되었습니다',
    check_failed: '결제 상태 확인 실패',
    select_method_first: '결제 방법을 먼저 선택하세요',
    no_order_selected: '주문을 선택하지 않음',
    order_not_found: '주문이 존재하지 않음',
    failed_to_fetch_order: '주문 정보 가져오기 실패',
    failed_to_fetch_methods: '결제 방법 가져오기 실패',
    confirm_cancel_title: '주문 취소 확인',
    confirm_cancel_desc: '주문을 취소하면 복구할 수 없습니다. 취소하시겠습니까?',
    payment_return_description: '결제 완료 후 자동으로 돌아갑니다',
    return_to_dashboard: '대시보드로 돌아가기',
    order_expired: '주문이 만료되었습니다',
    create_new_order: '새 주문 생성',
    handling_fee: '수수료',
    total_with_fee: '수수료 포함 총액',
    pay_now: '지금 결제',
    scan_qrcode: 'QR 코드를 스캔하여 결제를 완료하세요',
    pay_success: '결제 성공',
    pay_processing: '결제 처리 중...',
    open_in_new_tab: '새 탭에서 열기',
    check_timeout: '결제 상태 확인 시간이 초과되었습니다. 나중에 다시 시도하세요',
    payment_pending: '결제 처리 중, 나중에 다시 확인하세요',
    copy_success: '클립보드에 복사됨',
    copy_failed: '복사 실패, 수동으로 복사하세요',
    check_manually: '확인 클릭',
    auto_checking: '자동 확인 중...',
    ios_notice: 'iOS 기기는 "결제 진행" 버튼을 클릭하여 결제를 완료하세요',
    safari_payment_notice: 'Safari 브라우저는 아래 버튼을 클릭하여 결제를 진행하세요',
    safari_payment_button: '결제 페이지 열기 클릭',
    continue_to_wallet: '충전 페이지로 돌아가기',
    order_status: '주문 상태',
    return_to_previous: '이전 페이지로 돌아가기',
    status: {
      pending: '결제 대기',
      processing: '활성화 중',
      cancelled: '취소됨',
      completed: '완료됨',
      discounted: '할인 적용됨',
      unknown: '알 수 없는 상태',
      activate: '활성화 대기'
    }
  },
  invite: {
    title: '내 커미션',
    description: '친구를 초대하여 등록하고 커미션 수익을 얻으세요.',
    stats: {
      registeredUsers: '등록된 사용자 수',
      pendingCommission: '확인 중인 커미션',
      availableCommission: '누적 커미션',
      commissionRate: '커미션 비율'
    },
    rules: {
      title: '커미션 규칙',
      share: {
        title: '1. 공유',
        desc: '초대 링크 공유'
      },
      register: {
        title: '2. 등록',
        desc: '친구가 등록 완료'
      },
      purchase: {
        title: '3. 구매',
        desc: '친구가 플랜 구매'
      },
      commission: {
        title: '4. 커미션',
        desc: '{rate}% 커미션 획득'
      }
    },
    balance: {
      title: '커미션 잔액',
      available: '사용 가능한 커미션',
      description: '친구 초대로 얻은 커미션은 소비 잔액으로 직접 전환 가능',
      transferToBalance: '잔액으로 전환',
      withdraw: '출금'
    },
    transfer: {
      title: '커미션 전환',
      warning: '주의',
      warningDesc: '전환된 잔액은 소비 전용이며 출금할 수 없습니다',
      amount: '전환 금액',
      amountPlaceholder: '전환 금액을 입력하세요',
      availableCommission: '사용 가능한 커미션',
      confirm: '전환 확인',
      processing: '처리 중...',
      success: '전환 성공',
      failure: '전환 실패',
      insufficientFunds: '사용 가능한 커미션이 부족합니다',
      invalidAmount: '유효한 금액을 입력하세요'
    },
    withdraw: {
      title: '커미션 출금',
      platform: '출금 플랫폼',
      account: '출금 계정',
      accountPlaceholder: '출금 계정을 입력하세요',
      amount: '출금 금액',
      amountPlaceholder: '출금 금액을 입력하세요',
      availableCommission: '출금 가능한 커미션',
      noPlatforms: '사용 가능한 출금 플랫폼 없음',
      confirm: '출금 확인',
      processing: '처리 중...',
      success: '출금 신청이 제출되었습니다',
      failure: '출금 신청 실패',
      tip: '팁',
      invalidAmount: '유효한 금액을 입력하세요',
      insufficientFunds: '사용 가능한 커미션이 부족합니다',
      belowMinAmount: '출금 금액은 {amount} 이상이어야 합니다',
      minWithdrawAmount: '최소 출금 금액'
    },
    inviteLink: {
      title: '초대 링크',
      createCode: '초대 코드 생성',
      creating: '생성 중...',
      inviteCode: '초대 코드',
      registeredCount: '등록됨',
      scanDescription: 'QR 코드를 스캔하여 등록하면 추가 혜택을 받을 수 있습니다',
      createdAt: '생성일: {date}',
      placeholder: '생성된 초대 링크가 여기에 표시됩니다',
      copyLink: '링크 복사',
      copied: '복사됨',
      noInviteCode: '사용 가능한 초대 코드 없음',
      created: '초대 코드 생성 성공, 친구와 공유하세요'
    },
    share: {
      wechat: 'WeChat',
      qq: 'QQ',
      twitter: 'Twitter',
      telegram: 'Telegram',
      noLinkAvailable: '사용 가능한 초대 링크 없음',
      scanTitle: 'WeChat으로 스캔하여 공유',
      scanQRCode: 'WeChat으로 QR 코드를 스캔하세요',
      inviteQRCode: '초대 링크 QR 코드',
      orCopyLink: '또는 링크 복사',
      shareTitle: '저희 서비스를 사용해 보세요',
      shareDescription: '이 서비스를 사용 중인데, 당신도 체험해 보세요'
    },
    records: {
      title: '커미션 기록',
      empty: '커미션 기록 없음',
      date: '시간',
      commission: '커미션',
      details: '상세',
      user: '사용자',
      registerTime: '등록 시간',
      amount: '소비 금액',
      userPlaceholder: '사용자',
      noRecords: '초대 기록이 없습니다. 초대 코드를 생성하여 친구와 공유하세요!',
      refresh: '새로고침',
      refreshing: '새로고침 중...',
      refreshingData: '데이터 새로고침 중...',
      fetchDataError: '데이터 가져오기 오류',
      fetchError: '데이터 가져오기 실패',
      status: {
        title: '상태',
        confirmed: '확인됨',
        pending: '확인 중',
        waiting: '대기 중',
        processing: '처리 중',
        invalid: '무효',
        unknown: '알 수 없음'
      },
      types: {
        confirmed_commission: '확인된 커미션',
        pending_commission: '확인 중인 커미션',
        all: '전체'
      }
    }
  },
  docs: {
    title: '문서 센터',
    searchPlaceholder: '문서 검색...',
    loading: '문서 로딩 중...',
    retry: '재시도',
    clearSearch: '검색 지우기',
    backToList: '문서 목록으로 돌아가기',
    lastUpdated: '마지막 업데이트',
    noDocuments: '문서 없음',
    noSearchResults: '관련 문서를 찾을 수 없습니다',
    fetchError: '문서 가져오기 실패',
    unknownError: '알 수 없는 오류 발생',
    docNotFound: '문서가 존재하지 않습니다',
    invalidDocId: '유효하지 않은 문서 ID',
    contentFormatError: '문서 내용 형식이 잘못되어 정상적으로 표시할 수 없습니다',
    languageHint: '현재 언어 {currentLang}에 문서가 없습니다. 다른 언어로 전환해 보세요',
    networkError: '네트워크 오류',
    welcome: {
      title: '문서 센터',
      description: '사용 및 구성에 대한 자세한 문서를 찾아 읽으세요.'
    }
  },
  browserRestricted: {
    title: '브라우저 접근 제한',
    subtitle: '현재 브라우저는 지원되지 않습니다',
    description: '최적의 브라우징 경험과 보안을 보장하기 위해 이 웹사이트는 사용 중인 브라우저를 지원하지 않습니다.',
    recommendText: '다음 추천 브라우저를 사용하여 접근하세요:',
    currentBrowser: '현재 사용 중인 브라우저:',
    currentUrl: '현재 URL:',
    downloadChrome: 'Chrome 브라우저 다운로드',
    downloadEdge: 'Edge 브라우저 다운로드',
    downloadSafari: 'Safari 브라우저 다운로드',
    openWithRecommended: '추천 브라우저로 현재 페이지 열기',
    whyRestricted: '왜 일부 브라우저가 제한되나요?',
    whyRestrictedDesc: '일부 브라우저는 보안 문제나 필수 기능을 지원하지 않을 수 있습니다. 계정 보안과 더 나은 사용자 경험을 위해 이러한 브라우저를 제한합니다.',
    supportedBrowsersTitle: '지원되는 브라우저 목록',
    browserNames: {
      Chrome: 'Chrome 브라우저',
      Edge: 'Edge 브라우저',
      Firefox: 'Firefox 브라우저',
      Safari: 'Safari 브라우저',
      Opera: 'Opera 브라우저',
      UC: 'UC 브라우저',
      Maxthon: 'Maxthon 브라우저',
      Unknown: '알 수 없는 브라우저'
    }
  },
  trafficLog: {
    title: '트래픽 상세',
    description: '트래픽 사용 내역을 확인하세요',
    uploadTraffic: '업로드 트래픽',
    downloadTraffic: '다운로드 트래픽',
    totalTraffic: '총 트래픽',
    date: '날짜',
    serverRate: '비율',
    actualTraffic: '실제 사용',
    deductedTraffic: '차감 트래픽',
    formula: '계산 공식',
    formulaContent: '(실제 업로드 + 실제 다운로드) × 비율 = 차감 트래픽',
    noTrafficData: '트래픽 사용 기록 없음',
    loadingTraffic: '트래픽 데이터 로딩 중...',
    errorLoadingTraffic: '트래픽 데이터 로드 실패',
    retry: '재시도',
    viewTrafficLog: '트래픽 상세 보기',
    days: '일',
    trafficLogDesc: '트래픽 사용 기록 및 통계 상세 보기',
    trafficChart: '트래픽 추세 그래프'
  },
  wallet: {
    balance: {
      title: '계정 잔액',
      description: '충전된 잔액은 소비 전용입니다'
    },
    deposit: {
      title: '잔액 충전',
      notice: '충전된 잔액은 소비 전용이며 출금할 수 없습니다',
      customAmount: '사용자 지정 금액',
      customAmountPlaceholder: '충전 금액을 입력하세요',
      button: '지금 충전',
      success: '충전 주문 생성 성공',
      failed: '충전 주문 생성 실패',
      amountError: {
        required: '충전 금액을 선택하거나 입력하세요',
        invalid: '유효한 금액을 입력하세요',
        minimum: '최소 충전 금액은 1원입니다'
      }
    },
    welcome: {
      title: '계정 충전',
      description: '여기서 계정에 쉽게 충전할 수 있습니다. 사전 설정된 금액을 선택하거나 사용자 지정 금액을 입력하여 충전하세요. 충전된 잔액은 즉시 반영되며 서비스 구매에 사용할 수 있습니다.'
    }
  }
};
