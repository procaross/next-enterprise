export default {
  metaData: {
    authTitle: "认证 CryptoInsight Pro",
    homePageTitle: "链见未来 | CryptoInsight Pro",
    homePageDescription: "链见未来，CryptoInsight Pro",
    authDescription: "链见未来，CryptoInsight Pro",
    appUnavailable: "CryptoInsight Pro 暂不可用",
    klineTitle: "实时K线 | CryptoInsight Pro",
    newsTitle: "市场行情 | CryptoInsight Pro"
  },
  page: {
    auth: {
      alreadyHaveAccount: "已有账号？登录",
      noAccount: "还没有账号？注册",
      emailLabel: "电子邮箱",
      emailPlaceholder: "you@example.com",
      passwordLabel: "密码",
      passwordPlaceholder: "请输入密码",
      registerButton: "注册",
      loginButton: "登录",
    },
    unavailable: {
      pageTitle: "CryptoInsight Pro 不可用",
      whySeeThisPage: "为什么我会看到这个网页？",
      whyContent: `
    在您的国家/地区中，您正试图访问的服务可能受到
    《关于进一步防范和处置虚拟货币交易炒作风险的通知》
    的影响。
    该政策旨在减少虚拟货币交易和投机行为的风险，可能影响了CryptoInsight Pro
    的可用性。
    我们正密切关注相关政策变化，并将根据最新的法律法规更新我们的服务。
  `,
      whatCanIDo: "我能做什么？",
      whatCanIDoContent: `
    尽管 CryptoInsight Pro
    目前在您的地区不可用，但我们建议您定期检查我们的网站和社交媒体更新，获取最新信息。
    同时，您可以利用这段时间学习Web 3.0 token的相关知识，提高个人投资技能。
  `,
      isMyInfoStillSafe: "我的个人信息是否仍然安全？",
      infoSafetyContent: `
    绝对是的。我们深知隐私和数据安全的重要性，即便服务暂时不可用，我们也会继续采取严格的安全措施来保护所有存储的用户信息，防止未经授权的访问和使用。
  `,
      howWillAdaptPolicies: "CryptoInsight Pro 将如何适应这些政策变化？",
      adaptPoliciesContent: `
    我们的团队正在积极探索各种合规方案，以便在遵守适用法律和规定的前提下，未来能在更多地区提供我们的服务。
    我们致力于不断优化产品，确保一旦有可能，就能迅速恢复服务。
  `,
      policyNoticeLink:
        "https://www.gov.cn/zhengce/zhengceku/2021-10/08/content_5641404.htm",
      policyNoticeLinkText: "《关于进一步防范和处置虚拟货币交易炒作风险的通知》",
    },
  },
  form: {
    validation: {
      emailRequired: "电子邮箱为必填项",
      emailInvalid: "请输入有效的电子邮箱地址",
      passwordRequired: "密码为必填项",
      passwordMinLength: "密码长度至少为8个字符",
    },
  },
} as const
