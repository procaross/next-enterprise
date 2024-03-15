export default {
  metaData: {
    authTitle: "Authenticate CryptoInsight Pro",
    homePageTitle: "Chain to the Future | CryptoInsight Pro",
    homePageDescription: "Chain to the Future，CryptoInsight Pro",
    authDescription: "Chain to the Future，CryptoInsight Pro",
    appUnavailable: "CryptoInsight Pro Unavailable",
    klineTitle: "Real-time Candlestick Chart | CryptoInsight Pro",
    newsTitle: "Market Trends | CryptoInsight Pro"
  },
  page: {
    auth: {
      alreadyHaveAccount: "Already have an account? Sign in",
      noAccount: "Don't have an account? Sign up",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "Please enter your password",
      registerButton: "Register",
      loginButton: "Log In",
    },
    unavailable: {
      pageTitle: "CryptoInsight Pro Unavailable",
      whySeeThisPage: "Why am I seeing this page?",
      whyContent: `
    In your country/region, the service you are trying to access may be affected by
    the "Notice on Further Preventing and Disposing of the Risk of Speculation in Virtual Currency Transactions".
    This policy aims to reduce the risks of virtual currency trading and speculation activities, which may affect the availability of CryptoInsight Pro.
    We are closely monitoring changes in relevant policies and will update our services in accordance with the latest laws and regulations.
  `,
      whatCanIDo: "What can I do?",
      whatCanIDoContent: `
    Although CryptoInsight Pro is currently unavailable in your region, we recommend that you regularly check our website and social media updates for the latest information.
    Meanwhile, you can take this time to learn about Web 3.0 tokens and enhance your personal investment skills.
  `,
      isMyInfoStillSafe: "Is my personal information still secure?",
      infoSafetyContent: `
    Absolutely. We understand the importance of privacy and data security. Even if the service is temporarily unavailable, we will continue to take strict security measures to protect all stored user information against unauthorized access and use.
  `,
      howWillAdaptPolicies: "How will CryptoInsight Pro adapt to these policy changes?",
      adaptPoliciesContent: `
    Our team is actively exploring various compliance solutions to provide our services in more regions in the future while complying with applicable laws and regulations.
    We are committed to continuously optimizing our product to ensure that once possible, we can quickly resume services.
  `,
      policyNoticeLink:
        "https://www.gov.cn/zhengce/zhengceku/2021-10/08/content_5641404.htm",
      policyNoticeLinkText:
        "Notice on Further Preventing and Disposing of the Risk of Speculation in Virtual Currency Transactions",
    },
  },
  form: {
    validation: {
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      passwordRequired: "Password is required",
      passwordMinLength: "Password must be at least 8 characters long",
    },
  },
} as const
