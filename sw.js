/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9b089d9fdb714b9fcf5001321a5d9b29"],["/404/index.html","9fb17cf9ecc8ee21df736b8e2744a2cc"],["/about/index.html","4911e1944208c090521c5e97d1010ff9"],["/album/index.html","72ab2aedd0caa82861f600946172d06a"],["/anzhiyu/random.js","edda48562d9af80ef1e07ed2b31a1a34"],["/archives/2022/04/index.html","1e78004112eff00f8c342d1b3b163e06"],["/archives/2022/08/index.html","02297e656c59cca7f109c56c7bd8c56b"],["/archives/2022/index.html","f5902f905f620251cf32be9e7a51cfbb"],["/archives/2023/04/index.html","742b637fef416efa5ac8c2eae88c305a"],["/archives/2023/05/index.html","936e98a9ce72bf1e5db0ea4962d4c952"],["/archives/2023/05/page/2/index.html","a01b9ac680929406b63a553aad936a24"],["/archives/2023/06/index.html","cf24d7b6b36489fe6ab5d3f006f5eff1"],["/archives/2023/07/index.html","9f8929b1fb8b56e7ff9447a7535c9fe3"],["/archives/2023/08/index.html","1247eb4409a354cc5faf2a4720b9492f"],["/archives/2023/09/index.html","e2a95f8e7c5d6d966f457e4b6cd723a7"],["/archives/2023/09/page/2/index.html","3166e1815b590736b2f74bb49601e53a"],["/archives/2023/09/page/3/index.html","02eadb3a940a69c08a6db4b4acd79316"],["/archives/2023/10/index.html","3d22e21b392b33744bec8280a0f49d0d"],["/archives/2023/11/index.html","c05d5fa8946c0537dc21792ac0185d8d"],["/archives/2023/12/index.html","7aacf9bb995062921e640df6b7819d93"],["/archives/2023/index.html","ddaca5309d43d3c53a68d3bd2e8922ca"],["/archives/2023/page/2/index.html","9a87f77c6319b2b576a58c9d7963c1b9"],["/archives/2023/page/3/index.html","e8c5f5d705d04161e446daf809eea620"],["/archives/2023/page/4/index.html","33562546565ed23185575477dbb590df"],["/archives/2023/page/5/index.html","6f3fe84c5d03691266d30a848ccc3f83"],["/archives/2023/page/6/index.html","2d896735a9e9a78cdc355d45963e667b"],["/archives/2024/02/index.html","df4ad11440ff0cddf724ba379a44df60"],["/archives/2024/03/index.html","a00bf37f472f4e0dacc3e2c898eb8b35"],["/archives/2024/06/index.html","38136c543d856296461c4cc2a5316aad"],["/archives/2024/index.html","c0701e323538483c0a38030e9df74c78"],["/archives/index.html","225eb4cf20c7763c1949719915b127e1"],["/archives/page/2/index.html","f91f19dd052bf07fd5035e06ff71f593"],["/archives/page/3/index.html","15150ce2e039aa33eea67d8a783eed50"],["/archives/page/4/index.html","dcdd73fbd8aa0796df46b2210fa9b6e0"],["/archives/page/5/index.html","d089640203094fbcfeb298d8b3da2d55"],["/archives/page/6/index.html","8c7a87cd29740da441d5bd3b5878d827"],["/archives/page/7/index.html","0d14db387acc33f99a814d917f3989a4"],["/assets/404_1.jpg","6a03964ef10984e27b67b363df50a77f"],["/assets/QRCode.jpg","15e0619610ff202cfa6ffc5473bfcda7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/coffee.png","8bc664cc136eebecc529be389fabb8f3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/gulp/404.jpg","079dd1d59bb349b3afa6dc57f6b0b6d2"],["/assets/gulp/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/assets/gulp/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/assets/gulp/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/assets/gulp/siteicon/128.png","8bc664cc136eebecc529be389fabb8f3"],["/assets/gulp/siteicon/144.png","d31a800162cb3e8304f06371ee5b3994"],["/assets/gulp/siteicon/16.png","426a14e28dc14177d0f082c870e698e5"],["/assets/gulp/siteicon/192.png","17f8e26eb7f0e990b10b36d6b5236929"],["/assets/gulp/siteicon/32.png","48ffb22693c2ea9952632c08723067ff"],["/assets/gulp/siteicon/48.png","505751c8eb85869c41082f708e160657"],["/assets/gulp/siteicon/512.png","d0a6cc66341546a81c914ffe6f3bc9a1"],["/assets/gulp/siteicon/64.png","90b09dc4861140b6a013e8ca4f85887a"],["/assets/head.jpg","7b0cfaf33b375df6a76087ca9ba132ec"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/assets/loading2.gif","4cd620a17094f1e2dd58460b477e1fec"],["/assets/loading3.gif","bdaea39db57dc0b48d763262514268db"],["/assets/r1.jpg","1baeeb410bdd5e1b155aa77153eadd4c"],["/assets/r2.jpg","079dd1d59bb349b3afa6dc57f6b0b6d2"],["/bangumis/index.html","f37f947fd8962577f941d56972de5d4d"],["/categories/index.html","3f96a3863ab3afe5db2a22653f5d5ef6"],["/categories/人类补完计划/index.html","5b85e7343361b986447154e21d6e0468"],["/categories/人类补完计划/page/2/index.html","e01d7c56add2f9160831dbad5a7e39ab"],["/categories/前端/index.html","98422094fa6d1853de7d74372337480f"],["/categories/前端/page/2/index.html","732decbae0c7600851837963cbb332e6"],["/categories/前端/page/3/index.html","94f03e47447e7d88b563468d46e89c7b"],["/categories/命令/index.html","54e5e1967cd80d9829d38ede060d7eb9"],["/categories/唐诗/index.html","3cd60c1245089ede2587a515cd969d79"],["/categories/时刻准备着/index.html","6543eb7cd3140c25a5518638bc46b577"],["/categories/时刻准备着/page/2/index.html","e4a44ed0b8020312612594fa56e7468b"],["/categories/演示/index.html","8c9368f570428fd585719951e1f300f9"],["/categories/生活多美好/index.html","d58d608e7b6869e82873796d075f1108"],["/collect/index.html","70167d0abc9566f2c077f0d54308a1c5"],["/comments/index.html","6445b5fbde5e624af68c39dc079fd6a2"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","72c618c2c7be5e3007787e3a5cd37f52"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/custom/css/about-tag.css","22441fa2a24dc221c63279428be40685"],["/custom/css/aurora.css","19d2b2aa21f8109656b61c2da99ff529"],["/custom/css/bber-talk.css","af075c123c95af10dcefb0a8c03e7048"],["/custom/css/custom.css","f9641344b3d04e6a75d09b58045ab7b5"],["/custom/css/elementUI.min.css","27474edeabad5a86b17a4e2dcf3b6ece"],["/custom/css/essay.css","f5e46c10fc34aaccac174e4e00dd1a07"],["/custom/css/imgloaded.css","2126a343357bef4413aab63c50cbe35f"],["/custom/js/aindividual/bibi.js","38d1ddfe681559cb5be57700e772b66f"],["/custom/js/aindividual/census.js","bf828e79827c3edebee617658487bfe8"],["/custom/js/aindividual/coin.js","700e0d15ec466e9d4426377495af3fec"],["/custom/js/aindividual/fomal.js","ac79ecb7cb190b0aeef7dde1374d17df"],["/custom/js/aindividual/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/custom/js/aindividual/txmap.js","f3edeb8463cb76a358c5a5ae12b09161"],["/custom/js/aurora.js","1eaf1b32294ac6e185d51ff0060b6315"],["/custom/js/bber-talk.js","9f7a0917c8b7cfa377efdb6c5b32efa4"],["/custom/js/dailyPhoto.js","3df092982a06744550f4cffb0d18b08d"],["/custom/js/elementUI.min.js","693f98461ce3fa58cbe5ac24d9a21b1e"],["/custom/js/essay.js","691d009d5b54bf25318aeba72bc43537"],["/custom/js/fps.js","eca2361d5b3b296ffc35a25dacf89621"],["/custom/js/imgStatus.min.js","8e3e537f2e422ed2ffe5a821a7d66a88"],["/custom/js/lately.min.js","91b22a955fef69259d3885e61a8bdfef"],["/custom/js/sakura.js","de14ab31569c465d18dcdf1be67eb8f0"],["/custom/js/vue.min.js","b21b8531847604ab5f2f5caaef51ba31"],["/custom/js/welcome.js","730d853c2d72e171cb794f1493d5c1bc"],["/custom/js/winBox/meihua.js","b3425e499ffe6fa5704b54f47cbed782"],["/custom/js/winbox.bundle.min.js","ccb6898fbe931a4635482594dec1f7c5"],["/custom/js/winbox.js","5a12ae8f1d3100a90f249806972b712f"],["/dailyPhoto/index.html","563e362d72f3d35fa5b7a1affe45118c"],["/essay/index.html","25690ec639dee6d06fd5abce179b23c2"],["/fcircle/index.html","410a236984c7d5c1b6a667fa6be2b503"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/old_512.png","1fd4e979044d74cec0da0b4b73f90d36"],["/img/old_siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/old_siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/old_siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/old_siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/old_siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/android-chrome-512x512.png","682e2759cff814974775467c99f62a25"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/coffee.png","8bc664cc136eebecc529be389fabb8f3"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/index.html","8d2f8b6592da4b91bcfa3de6899eb429"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","b2bbde9d96fc4ded6c7a163038818ae5"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","cecb95ee8b35387f2cdf2bbafbf0e767"],["/lovePic/index.html","5cfe8700961cffb9e715af9c6b2f45df"],["/music/index.html","17433c2c957855bbff6d99c4aee01000"],["/page/2/index.html","a688efba4217ababd79a8f1a2e481384"],["/page/3/index.html","b8ea0ddfca4bec83b1b90fa414873453"],["/page/4/index.html","5202e7a0b2400aa6d1a18b08e3c926ec"],["/page/5/index.html","007bec56a74f2f5d427b82a1d1ab267d"],["/page/6/index.html","75c5f977ee9eb35516fb74be9a664d12"],["/page/7/index.html","5083881581e147971c8fbf215fd5dbf1"],["/posts/14b0.html","5523ad9db2f3a43c9bc80c57df127255"],["/posts/187b.html","e7569e2bef121bdb3b3058037d6f71d0"],["/posts/1941.html","1bcca184367dfa061eb30d8a56849fa1"],["/posts/1d18.html","3cbcb8aebb8e3683d9c868be4d3cdba3"],["/posts/1f2a.html","5bd516f6d0cbe86f03fb7071cc1bca8e"],["/posts/2013454d.html","7b567bfc244c83fd9fc483c60f5b0679"],["/posts/2201da6a.html","8f835e9461b42f23d1acc0e1f6b5cf18"],["/posts/2a87be94.html","b90972f79c2fe16c6388e41383b85e65"],["/posts/31861.html","15739dd820b86c3d8b31ffc256ca82c9"],["/posts/379319a1.html","1889db5128678ea12e8c5a71ae0a5340"],["/posts/450.html","80f2a22c6e4155f7eb776996f25568e0"],["/posts/4a17b156.html","710258415f0bdbb5c43d4d55f316e12f"],["/posts/4fe0ff4.html","c77ae34e981a9da2d77b4e1df6ed12cd"],["/posts/52f6.html","14b5844f02b26f749e4133c1fedaafad"],["/posts/53d0684b.html","cce9f9450e4446c066623f56138fd4b7"],["/posts/5459.html","359422ae21449dad761ad6abc0d9bf67"],["/posts/560a971e.html","6d2ffdccee78ec88101846eb5578d08f"],["/posts/5899.html","14ba8372cdc9d6bad24360b7c1cf460f"],["/posts/599b70c0.html","b891619cb8823e6e1286086c9452e7ce"],["/posts/5b5a.html","bd730e2bbff01bd718412c8c75e43708"],["/posts/5f3c0533.html","e060ca9252cbad7aa25d333d0314358e"],["/posts/5fb7.html","3cd2770e585aa032255300544b9fd9cf"],["/posts/5fcd.html","2c06994bf4e5e4c0f5d05f7eec091717"],["/posts/6.html","4d436c8a983c3b03892408953453d6c8"],["/posts/6271.html","1e1ff49269cde8e963ea8a30e0a3ae93"],["/posts/63af.html","adf6e69994f589a04f10621386721ae3"],["/posts/66bc.html","59933624710d3b4bc6077473a8b6c735"],["/posts/73843be1.html","1681e278c35ef6c2663f58eacb5c470b"],["/posts/764f33bc.html","91842d16f66af95d9e1d899d7107ba8c"],["/posts/7796.html","d3281f7b4b44ebfdf5b7f68922045d92"],["/posts/7a0d2fdf.html","f9f2c4d5533e549f099be123a7e2d58d"],["/posts/7cda.html","16834c4554f9eb9dd6122d1388d5ed85"],["/posts/7cf7d4f4.html","d62d2d42578c8e9fa49982c733b03d4c"],["/posts/85fb390f.html","2a4864fb4f23cc29e5b417242b3e2083"],["/posts/87a8.html","5d4511e3267a804dc5ee06e1af1843df"],["/posts/8b9.html","9a1bc771db5216313b5b92687c0daa7e"],["/posts/9046.html","64b4f37e85231f6fe22b6d2994a13104"],["/posts/98f3a6d9.html","23b900dd2069e62d2846d2363aa6a652"],["/posts/9c59.html","936e6f90a725accd4cefe657b82ba09d"],["/posts/9d362be7.html","b0466ad4c4ede534f92201bc4ae92eb1"],["/posts/ae6.html","cf03179337fb0caef2bec5f07c3b951a"],["/posts/b18b9acc.html","469ebab9a0986db7bc16aba84bfbe6ee"],["/posts/b528.html","8cf1e7631671faf4fc95566693f7bec5"],["/posts/b5bf5235.html","7a10f5de99f13dcfe8d8869d68fb43d5"],["/posts/bb28.html","7e745cd5c10e260a2fdd85825a313709"],["/posts/bb44c5f1.html","d4c51e153d8eac5a0a3f27714df6c11a"],["/posts/c05a.html","ee15bb093d92cb37f061ee9cd9cc25eb"],["/posts/c6aa.html","0d5b44bab8f75923d46fec76834a6adb"],["/posts/c793072c.html","f97349a2570e700ee862d24226836283"],["/posts/c803.html","4f476f60d527643771f691d66dffe31c"],["/posts/c8d1.html","38f291bbd8247b8473600dae005cc27e"],["/posts/ca87.html","e99d761cae57088414840607ab769784"],["/posts/d044eab7.html","107fff21063d70ac601ffd786c67bd8a"],["/posts/d37c.html","921879af97f11365075e0af60e71193f"],["/posts/d3a9.html","ef4cf5e5d4c4f231edde500139f933d4"],["/posts/d73c0d37.html","494159140a64d596955fa394a8bf148b"],["/posts/deb23485.html","e47edf2feb1dede3f624a279a1615bb4"],["/posts/e173abca.html","f7388067fd41b3cdfe63e87fd10a4f8d"],["/posts/e538.html","f30c771952020b444c3d64a12a307ba4"],["/posts/e859d7a7.html","64bd32c77bad3043005d3f34cddab638"],["/posts/ee31ad65.html","af0e95e528c477ad1e54b4ad59c9067a"],["/posts/f09f.html","c82eec7bb3af30c85c8afc9f0ccfdb4e"],["/posts/f188.html","1786a7fae78fc2dc3e55e1bfed57c967"],["/posts/f3334fd0.html","d80b05577b95dd58010f1d819d9570e6"],["/posts/f3fc.html","919027f54335129e60de5afb34837058"],["/posts/f8df.html","50d194648468e180c5aa23744de389c5"],["/posts/fa32cf69.html","bd62d7ceb3c73eec24de270bbb7376b1"],["/posts/fbf6.html","d54fab8999ea184eca9015281e1d065b"],["/sw-register.js","b56c4687fec7eb2190aadd17deef11b7"],["/tags/AJAX/index.html","3c0e6ebf351a01d6c1e38645d921f9b6"],["/tags/AXIOS/index.html","38fdf86b0fbe44ca5acbb28c98552801"],["/tags/CSS/index.html","5d5b7e09a080288fc2b645e15eb1b8bc"],["/tags/CSS3/index.html","08201d4d545256171a184d52c35bb8c4"],["/tags/DOS-命令/index.html","e80bf8348d6e9d70992faf6ebd8de74e"],["/tags/ES6/index.html","38ba36b0de1c20b22de8664422cfbd5e"],["/tags/Element-Plus/index.html","c4dd6262088a99b4a8b7e3fb0df3fda5"],["/tags/HTML/index.html","dfd1cb11a75963f9a539e1a5d587f9ab"],["/tags/HTML5/index.html","b7a64fc87797afb20a0c8a93a3425935"],["/tags/JS/index.html","e5f47634e0514929375dd78bde745308"],["/tags/Javascript/index.html","fa456d641c154de0f3b7d30bcafba1a3"],["/tags/Koa/index.html","d740698bb48274e2fecbd99dbc15b438"],["/tags/Less/index.html","340aa6e686aab5f67f8cfb31ac0f15aa"],["/tags/Linux/index.html","9414941ed3846e97730da86d46283e82"],["/tags/Markdown/index.html","4537cee4bf5468da31c9cb7105f86740"],["/tags/Mobile-移动端开发/index.html","57ad449fe5d6217326d9b8f1d20481c2"],["/tags/NPM/index.html","9d9ee508b7ce56a95a9f3d544a6d9c4b"],["/tags/SSL/index.html","19fc1ceb219a20294fde2fff739540e2"],["/tags/Sass/index.html","b81464988323c90ab0108026bfbf45d4"],["/tags/TypeScript/index.html","6f1ef8743c1f77def411341127552a28"],["/tags/UI/index.html","ed9cce1e6bf5ad969e1eea77c63ce869"],["/tags/VUE/index.html","45c6e397daa8993313cf4c4bcb775347"],["/tags/Vue3/index.html","7df91b16be3f3df06fa9ecc867784856"],["/tags/Vuex/index.html","f67d00efa8d2ad29b6c6352d56a747cc"],["/tags/WebSocket/index.html","0e97b6b697d1b895c87e6b265c3f8d25"],["/tags/Webpack/index.html","bc152f1e7244ff9bf99ede6652e728cd"],["/tags/brew/index.html","62536a9cff75cc91535471c900d2e040"],["/tags/eggjs/index.html","31a132f1a2ab84dab6886490cc08e93c"],["/tags/git/index.html","12be7f2ee8c2dfcc6211343baae4b323"],["/tags/hexo/index.html","d477c91872db771741564ed716c96692"],["/tags/index.html","39e4e94b21164cd8856e86dc3f417a39"],["/tags/jquery/index.html","dcd3eec2110fe532136fff708afaf80b"],["/tags/mysql/index.html","f5a9ed0e885ded4b6c8d19a4c240ed80"],["/tags/node/index.html","ea5bc35622674529232e5f224896de64"],["/tags/nvm/index.html","c5ac6ca555995365d5d56568cda81652"],["/tags/react/index.html","7955854fbee427afbe99e0e6f2b1d869"],["/tags/vue-i18n/index.html","56760c12fed08205feb0401011f5609d"],["/tags/yarn/index.html","02e75bd41942e25217543250a1a70d61"],["/tags/前端/index.html","40555ff079dbf9bcbfb61d0cdb12cce7"],["/tags/前端/page/2/index.html","6041033dac381acc26e00dd6c61c9926"],["/tags/前端/page/3/index.html","cbe6c4886bb3fba576b682a2938cce19"],["/tags/前端框架/index.html","059981b893853d73d63de5bc89a8f9ca"],["/tags/包管理工具/index.html","1f19e82bde167c083fe64fef765ba9b1"],["/tags/原生JS/index.html","8da98175c1c46970c0658eca22ee9144"],["/tags/命令/index.html","42f444717455e3ddc7e2c615fe45845c"],["/tags/外挂标签/index.html","d1bdc712eb5044655609cf5bdc831a57"],["/tags/工具/index.html","c24b3908c0e8c334f38a7b6597d7a9fe"],["/tags/微信小程序开发/index.html","fc1de8b5e630e0d01eb11aa94119bc66"],["/tags/总结/index.html","5082359392b1a0be95720d1231ccf47d"],["/tags/服务器/index.html","4383dd0575f53386cf167aee90aad0a6"],["/tags/正则/index.html","a4596bb186e2475e75760d40bdf7a685"],["/tags/源码/index.html","35d108067c4e68a66751eb796c33b8c1"],["/tags/知其所以然/index.html","cd6b6c6d94970e2e1202c09cc4a7226d"],["/tags/笔记/index.html","d7d40aab4dc68b57afa16c532bd5b52b"],["/tags/算法/index.html","8d95366d999109b5d9ddab6924ae7cd4"],["/tags/练习/index.html","b0ed36d877826d2cd44d00bac7f3ca03"],["/tags/读书/index.html","bdb68aef35559b42bcfde59b0be0c315"],["/tags/静态模块打包器/index.html","3ec0fdecb9e336781485174807d186f3"],["/wordScenery/index.html","6f81c860fd7ef81e62d0b26b4708e72d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
