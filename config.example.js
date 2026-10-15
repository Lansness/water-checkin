/* 把这份文件复制为同目录下的 config.js，再填入你自己的值。
   endpoint / publishableKey 来自开通云服务时返回的 publicConfig。
   publishableKey 是给浏览器用的「可公开」密钥，但它绑定你的应用，
   因此 config.js 已排除出仓库，避免别人克隆后误连到你的数据库。 */
window.WATER_CLOUD = {
  endpoint: "https://你的应用域名.app.workbuddy.host",
  oauthRelayBaseUrl: "https://www.workbuddy.cn/v2/as/genie-baas/oauth",
  publishableKey: "wbpk_你的应用ID_你的密钥"
};
