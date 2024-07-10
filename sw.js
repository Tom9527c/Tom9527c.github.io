/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9f7340573d855111c667c79f98d6a4e1"],["/404/index.html","9fb17cf9ecc8ee21df736b8e2744a2cc"],["/about/index.html","66d17dece3fa92c9fb05b62a55210a70"],["/album/index.html","e81f1d993c427bcb2d2034ccecea0653"],["/anzhiyu/random.js","be5a39f0f54c4eeb09ad38ec3810a3a4"],["/archives/2022/04/index.html","360fafd4a90a4200c3f26b5aae9901e3"],["/archives/2022/08/index.html","f78af30eeea0ce4d6f296bcf9cc6d0b4"],["/archives/2022/index.html","33a6fabaeeafb31b7bff41398b6f158f"],["/archives/2023/04/index.html","49828d31948f08b879e1174c35af3cec"],["/archives/2023/05/index.html","85cd7c5177db0af2a75da2c3d6044807"],["/archives/2023/05/page/2/index.html","96e5e3ccb8ea5eb430306d1b4d1793a9"],["/archives/2023/06/index.html","8a7d502c4f4f54e6a1bfc0c7f2dddb0a"],["/archives/2023/07/index.html","631d33be00b3f01987a9c8343e3b6300"],["/archives/2023/08/index.html","3cfbb8cf5cf7ee20d9cc2e9d05153a6d"],["/archives/2023/09/index.html","abc555faed0175bd5581544ff3eeb553"],["/archives/2023/09/page/2/index.html","413e208d682b567dab119aff45c095bf"],["/archives/2023/09/page/3/index.html","c74cda298fdcf5d0ef37e15316a8da3e"],["/archives/2023/10/index.html","ec97768e83bd8732ce27dda4055951be"],["/archives/2023/11/index.html","9fe003ac3f4ea8ec528115652fee6e8d"],["/archives/2023/12/index.html","090989eeb2ca732c1668bd89f5c18fea"],["/archives/2023/index.html","e4893859c6cfa54cc0d52ae0ee8bf3cb"],["/archives/2023/page/2/index.html","e26932c5173e9a71376b6c0883e50dd0"],["/archives/2023/page/3/index.html","15ab0e1443de361e2f53532ca8d585ff"],["/archives/2023/page/4/index.html","cd00e299314dd4d6177e135a818d3c8e"],["/archives/2023/page/5/index.html","bdec06ee6f112305f9d1f209e9c6739b"],["/archives/2023/page/6/index.html","99d357b58aeaac3d76129faa914732cc"],["/archives/2024/02/index.html","eaac53d0e5af1e979da686651d7fe31b"],["/archives/2024/03/index.html","81c5c7307585c3b5ebd4836e18572881"],["/archives/2024/07/index.html","22b5075b0e610d8df82f27f556f459bf"],["/archives/2024/index.html","9bdef121a8962d80447dfbfa42f65154"],["/archives/index.html","7bde236707e21732fa4803fe5d7e83d8"],["/archives/page/2/index.html","c854ddca9fc23eac5e00f3f6174e8944"],["/archives/page/3/index.html","f39468be8c27298eeff3e054880f9978"],["/archives/page/4/index.html","f8726f759e0189d8c65e210f624deec9"],["/archives/page/5/index.html","6ddba834c5017926d5100ee0c84e4ffc"],["/archives/page/6/index.html","c8747b7a13ea0be72b7bfef60cacb697"],["/archives/page/7/index.html","fd768277f27d9b06409e1e035db90a30"],["/assets/404_1.jpg","6a03964ef10984e27b67b363df50a77f"],["/assets/QRCode.jpg","15e0619610ff202cfa6ffc5473bfcda7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/coffee.png","8bc664cc136eebecc529be389fabb8f3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/gulp/404.jpg","079dd1d59bb349b3afa6dc57f6b0b6d2"],["/assets/gulp/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/assets/gulp/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/assets/gulp/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/assets/gulp/siteicon/128.png","8bc664cc136eebecc529be389fabb8f3"],["/assets/gulp/siteicon/144.png","d31a800162cb3e8304f06371ee5b3994"],["/assets/gulp/siteicon/16.png","426a14e28dc14177d0f082c870e698e5"],["/assets/gulp/siteicon/192.png","17f8e26eb7f0e990b10b36d6b5236929"],["/assets/gulp/siteicon/32.png","48ffb22693c2ea9952632c08723067ff"],["/assets/gulp/siteicon/48.png","505751c8eb85869c41082f708e160657"],["/assets/gulp/siteicon/512.png","d0a6cc66341546a81c914ffe6f3bc9a1"],["/assets/gulp/siteicon/64.png","90b09dc4861140b6a013e8ca4f85887a"],["/assets/head.jpg","7b0cfaf33b375df6a76087ca9ba132ec"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/assets/loading2.gif","4cd620a17094f1e2dd58460b477e1fec"],["/assets/loading3.gif","bdaea39db57dc0b48d763262514268db"],["/assets/r1.jpg","1baeeb410bdd5e1b155aa77153eadd4c"],["/assets/r2.jpg","079dd1d59bb349b3afa6dc57f6b0b6d2"],["/bangumis/index.html","e8e4116ed293fe98e7a78019254d5190"],["/categories/index.html","587a079afa2ed54e8568617bc4fccf6b"],["/categories/人类补完计划/index.html","07f9ff79416d237afb962726ce1b5d55"],["/categories/人类补完计划/page/2/index.html","ce4ed182a1b5abdc835230aacb0b369c"],["/categories/人类补完计划/page/3/index.html","d359c8271a8a33742d6b06b8c8f82bae"],["/categories/前端/index.html","8765341ff9f55d8061c8900691c44f2d"],["/categories/前端/page/2/index.html","f3b4035171ab608533580ff1f0dcfd35"],["/categories/前端/page/3/index.html","8ae3e65cc37fd22791cefe78c38118e0"],["/categories/命令/index.html","a7e8c2545ab38fa24ea168f934d9d82a"],["/categories/唐诗/index.html","2b20866aaadd3ee09c8b2cd80329ef0b"],["/categories/时刻准备着/index.html","bce5f6da058eb1b27352f9d17952192b"],["/categories/时刻准备着/page/2/index.html","78b0bc58e45d4ff1235f757d8c79772b"],["/categories/演示/index.html","cba223638e6b579ea096fe4c53d7ba0f"],["/categories/生活多美好/index.html","460223ac40ebbb60c5f5e68915d97ee1"],["/collect/index.html","da5f2c8cec7bb887fc1c4bc004098736"],["/comments/index.html","ae563e3f41bba1d87fddff4cfe562633"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","72c618c2c7be5e3007787e3a5cd37f52"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/custom/css/about-tag.css","22441fa2a24dc221c63279428be40685"],["/custom/css/aurora.css","5d18ad2eb35864b45ec43c35e89ca2d9"],["/custom/css/bber-talk.css","af075c123c95af10dcefb0a8c03e7048"],["/custom/css/custom.css","f9641344b3d04e6a75d09b58045ab7b5"],["/custom/css/elementUI.min.css","27474edeabad5a86b17a4e2dcf3b6ece"],["/custom/css/essay.css","f5e46c10fc34aaccac174e4e00dd1a07"],["/custom/css/imgloaded.css","2126a343357bef4413aab63c50cbe35f"],["/custom/js/aindividual/bibi.js","38d1ddfe681559cb5be57700e772b66f"],["/custom/js/aindividual/census.js","bf828e79827c3edebee617658487bfe8"],["/custom/js/aindividual/coin.js","700e0d15ec466e9d4426377495af3fec"],["/custom/js/aindividual/fomal.js","ac79ecb7cb190b0aeef7dde1374d17df"],["/custom/js/aindividual/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/custom/js/aindividual/txmap.js","f3edeb8463cb76a358c5a5ae12b09161"],["/custom/js/aurora.js","1eaf1b32294ac6e185d51ff0060b6315"],["/custom/js/bber-talk.js","9f7a0917c8b7cfa377efdb6c5b32efa4"],["/custom/js/dailyPhoto.js","3df092982a06744550f4cffb0d18b08d"],["/custom/js/elementUI.min.js","693f98461ce3fa58cbe5ac24d9a21b1e"],["/custom/js/essay.js","691d009d5b54bf25318aeba72bc43537"],["/custom/js/fps.js","eca2361d5b3b296ffc35a25dacf89621"],["/custom/js/imgStatus.min.js","8e3e537f2e422ed2ffe5a821a7d66a88"],["/custom/js/lately.min.js","91b22a955fef69259d3885e61a8bdfef"],["/custom/js/sakura.js","de14ab31569c465d18dcdf1be67eb8f0"],["/custom/js/vue.min.js","b21b8531847604ab5f2f5caaef51ba31"],["/custom/js/welcome.js","730d853c2d72e171cb794f1493d5c1bc"],["/custom/js/winBox/meihua.js","b3425e499ffe6fa5704b54f47cbed782"],["/custom/js/winBox/winbox.bundle.min.js","ccb6898fbe931a4635482594dec1f7c5"],["/custom/js/winBox/winbox.js","41c2f4dca63ef17c068990f38caa5f95"],["/dailyPhoto/index.html","20ac3795aac88809cc67a87bcb66448f"],["/essay/index.html","6606bd432eadcd0c67b441e53c384c0e"],["/fcircle/index.html","1e2fc9f7936f1cb94e5d8ce18ff9c6c1"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/old_512.png","1fd4e979044d74cec0da0b4b73f90d36"],["/img/old_siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/old_siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/old_siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/old_siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/old_siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/android-chrome-512x512.png","682e2759cff814974775467c99f62a25"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/coffee.png","8bc664cc136eebecc529be389fabb8f3"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/index.html","bbb0d0777aef1b4e0ddf3acb3a713f76"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","b2bbde9d96fc4ded6c7a163038818ae5"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","4701ed65bbcadc0947ff6613b3a6e3f5"],["/lovePic/index.html","0755246b7a4e0aa381028c929d3260ff"],["/music/index.html","d5c57ed278ee630bdb4e0264c70e3e50"],["/page/2/index.html","c61e9ea78fe56a191b4249491ee79007"],["/page/3/index.html","a3f7e0c0cd92a9186ad4526af143026f"],["/page/4/index.html","93e6fac6f87fb700c937986aa7835e2f"],["/page/5/index.html","c74c8b923373c0701fd88aaabeb5c35a"],["/page/6/index.html","5fe1c5c15e140df5c0e946c482f94f8b"],["/page/7/index.html","dfc2b804ee73b9402e82931db536801c"],["/posts/14b0.html","821f7b928b23940aa257933c06b9037c"],["/posts/187b.html","5f6c0443c08c87236e12fec1462aca00"],["/posts/1941.html","cce7d0ff7121039655f6a3e98ee65d6a"],["/posts/1d18.html","98762a201cd1c1a48b6b4f2c50c32482"],["/posts/1f2a.html","dacabb6dbac51c6a7fe2d431c28b8a0b"],["/posts/2013454d.html","98fae13b74942aa68d99b7085c948634"],["/posts/2201da6a.html","5df6dfb81326fd22f9e47830daa50d29"],["/posts/2a87be94.html","c4a4553ad854fbcb333193e1ed42075d"],["/posts/31861.html","71cba13bc17c819625f39e91e11ec027"],["/posts/379319a1.html","fa0b9a038cc984dac1f57311e8322795"],["/posts/450.html","68307493700a3843d439e02d16bc673e"],["/posts/4fe0ff4.html","a2b0c8f047a425d4ead15fd553f0a358"],["/posts/52f6.html","33078bd8102ac14dee10663e0c1ae122"],["/posts/53d0684b.html","188ea6c17de3231ed2fb1466b086a395"],["/posts/5459.html","ac0bb17fd44757404f00d8552420c80d"],["/posts/560a971e.html","8ba23b381d222098ff6834a8b402d1ad"],["/posts/5899.html","966a883eb6df0773c46453745a7b4c95"],["/posts/599b70c0.html","2fed202d8ef1693e453ef3ae7b9aa46b"],["/posts/5b5a.html","db6f9f0e2e5b5d68372769e24ee76ed0"],["/posts/5f3c0533.html","04c6fef1aafd6b61a5a7798128bf317a"],["/posts/5fb7.html","3724b5004bb195854082815a726f51ff"],["/posts/5fcd.html","4e7c86a5f11e7bbf55dcccb1e600c67f"],["/posts/6.html","9ef4f94986bb9934549d74f4798bbaf1"],["/posts/6271.html","01ce00e9ee8e19db6f746a04f0d45a52"],["/posts/63af.html","83dd95bbd3153150f751a87c3cbbd4ba"],["/posts/66bc.html","e7b5ac7b3472072ae369f00809e814ac"],["/posts/73843be1.html","a667688c392c39696345213e3ee2b8af"],["/posts/764f33bc.html","c3e10c7c011fb66d365df119352c5778"],["/posts/7796.html","2521e112019e76cb7685d0484f6be5d2"],["/posts/7a0d2fdf.html","67b62861e9163376fb9aea0448be0292"],["/posts/7cda.html","cd0e60892d813d08e39c37c3b1cdfb66"],["/posts/7cf7d4f4.html","c891c31ea8dc7084fb4bf3af79a127fa"],["/posts/85fb390f.html","2d56d2208ebc2304297f694438867df8"],["/posts/87a8.html","9fa435bf4c05096678b74a83a60dfaf6"],["/posts/87e72661.html","bdfcdd9aa035ae5aef660b070b799782"],["/posts/8b9.html","886ea3da6181c366b156a37a268c4f07"],["/posts/9046.html","a94c17504e4818948192756bf7c5a0b1"],["/posts/98f3a6d9.html","7db73325e91d09342ef785fea3139c29"],["/posts/9c59.html","3e24f4e60972ac9558925dbeb5ea9f12"],["/posts/9d362be7.html","5842cb84ff4d18922c2970f8ec438b09"],["/posts/ae6.html","27f9731366008d54d663b73207afd650"],["/posts/b18b9acc.html","9676b2e63ab5b48d10cc163140f14c80"],["/posts/b528.html","d431c32449bc2c822ec653a4c3c2ceeb"],["/posts/b5bf5235.html","4adeeac820189974707431e827704cad"],["/posts/bb28.html","9d8e46c82921caa954fa8fd1ba2ab700"],["/posts/bb44c5f1.html","730323ef293b5d4636cd67976b71df6a"],["/posts/c05a.html","c8646a8a7c90a4ef4398f5dd7547d9cc"],["/posts/c6aa.html","425f2f23fee62a6f6441661404a98358"],["/posts/c793072c.html","220d40dcc0d0d691104d09b39afc269b"],["/posts/c803.html","837769bd290f017cdc6c24e44f16248a"],["/posts/c8d1.html","2dd1b480d6a0405e7bff9efa4ef132d2"],["/posts/ca87.html","2abcc3df5ee59a8edc780c6727e9f7b9"],["/posts/d044eab7.html","4a0eae0cb573dfdf6ff322e2ed4aed25"],["/posts/d37c.html","94636b2195b6c2f1b81ab283860bff19"],["/posts/d3a9.html","e92c2779e620a803dcdfc9b9811dbd03"],["/posts/d73c0d37.html","15a1b7c34aa08c22f92d85922f240c8d"],["/posts/deb23485.html","dc4f5eda0100018d300b68f7a0c25c5a"],["/posts/e173abca.html","e084eef5c7f1af9637d885cce0726d94"],["/posts/e538.html","bbe7a9cad7e9fc49180fc4766319bd0d"],["/posts/e859d7a7.html","9dd0115a84248fa8f74441ade7189bb5"],["/posts/ee31ad65.html","fe18f27ab24e0edc3b993d0f0597af0b"],["/posts/f09f.html","eb1b5206d205777316288f4ba5e47226"],["/posts/f188.html","fcf6e5916bdf294bf0f6ed626b27fd8a"],["/posts/f3334fd0.html","02b0ff2105eac594b2fbf215c448df04"],["/posts/f3fc.html","12f675e51e5dd365701a823d8190cbfa"],["/posts/f8df.html","50b96a7fdbb82f89557c02e3a6888a37"],["/posts/fa32cf69.html","bf1dd43329bd7d4e44ab4675dc315c18"],["/posts/fbf6.html","307a99942692222c17a509e1b3a4b8d1"],["/sw-register.js","421ad71be1f29b3e904ae8a2165b16cc"],["/tags/AJAX/index.html","472f026d704a8ae2bbed5e12fd6240cd"],["/tags/AXIOS/index.html","8ae7ee7f7b026aaadd4899978499197c"],["/tags/CSS/index.html","6185d4e94bf6bc03b5eb7e0d260df413"],["/tags/CSS3/index.html","456797e276df3619fcc0e9edf2012bb5"],["/tags/DOS-命令/index.html","4b97ee7bb408bc43867e5a6e31791eaa"],["/tags/ES6/index.html","26c2276fc5472745a23670f17a76b133"],["/tags/Element-Plus/index.html","931cfb4cc373077fc01e32c7ce812775"],["/tags/HTML/index.html","f1df369145736426ba0585e1b9131084"],["/tags/HTML5/index.html","2a1513fa5251f0f442ff5bc7900670bb"],["/tags/JS/index.html","92aea5f9c544902076e687428a5e3936"],["/tags/Javascript/index.html","70734bb230207793829bb0410c3e2c65"],["/tags/Koa/index.html","691675c9da04769e31784fa265bd34cb"],["/tags/Less/index.html","1fe825630a3a9aa5d6c8da276f9e0052"],["/tags/Linux/index.html","b87320387679a4ce3d5d341ec007a3c9"],["/tags/Markdown/index.html","f834ba8299a1cfd912ad867b3bcc34c6"],["/tags/Mobile-移动端开发/index.html","b96b1a37366038d88ac53ad8c0d3da40"],["/tags/NPM/index.html","73a04b628c8fdc7ffff670a00cf93cd1"],["/tags/SSL/index.html","4b405816446b45e1233aa8818a826e09"],["/tags/Sass/index.html","3f739d7d6dd49bde83d68ce53c23f7ca"],["/tags/TypeScript/index.html","f48fe66f58c15108fabbd739dabc7a92"],["/tags/UI/index.html","be44e7b16d47b9f38372856c8ee8f58c"],["/tags/VUE/index.html","1c11dfa2ef83b6feb0280a187c39ee08"],["/tags/Vue3/index.html","cc5d5b86f57643f0329324e6683fd28b"],["/tags/Vuex/index.html","24ecc5530497d3d6c65819c9d71a1b65"],["/tags/WebSocket/index.html","843a02fb1ed2913a0c1600f3ace6d6bb"],["/tags/Webpack/index.html","13a4cb9b47deee72bb49cdd8683d6350"],["/tags/brew/index.html","3f6d91f8d3e08c353e5f5bd755b8a30e"],["/tags/eggjs/index.html","a4e12879daa4602ac035886fcdfd489e"],["/tags/git/index.html","7f9bef8729788796c1d55b0487900e71"],["/tags/hexo/index.html","b0d5d12b39f029df8a84dc1ad82efc58"],["/tags/index.html","7be0025eb907a092b9380f22374695d3"],["/tags/jquery/index.html","823d39038750b11cb540a7439dd94e60"],["/tags/mysql/index.html","ddb9e678ead6c24d4d92e70c57275f6e"],["/tags/node/index.html","b032f66321dada93db9ec6e80d2ce918"],["/tags/nvm/index.html","c9e1b5c181329cf1da5498b4f8992938"],["/tags/react/index.html","78ed578bf6059e5f5c3839112f8602c4"],["/tags/uniapp/index.html","8a21492658225ca086ad0ab65791bf4b"],["/tags/vue-i18n/index.html","f0a081170bebef99a9ba8cee3e0e1a7a"],["/tags/yarn/index.html","59849594d2b3b9ddcd87010edc4b81e7"],["/tags/前端/index.html","a32639e5979f8af65afa14c3ff6e9188"],["/tags/前端/page/2/index.html","c74af2d87d055b2d9e334935797c2f1c"],["/tags/前端/page/3/index.html","916228184eb4e610d1a5410d0087fd9a"],["/tags/前端框架/index.html","5cc880498e68f999e471cef27d0a7532"],["/tags/包管理工具/index.html","5d5772d5229d9a3a5e1235f03bec446e"],["/tags/原生JS/index.html","3dad34ed626778cb0d6d00eaddc185d8"],["/tags/命令/index.html","64fc97981e9c0eb2a79ca37691d52015"],["/tags/外挂标签/index.html","f0f184c471c781e5a69832eee7771e35"],["/tags/工具/index.html","121d1e2f370776c960d1c5dfdd2ea9b8"],["/tags/微信小程序开发/index.html","4afbb271ae022e4979f690ad6701079e"],["/tags/总结/index.html","bed105f17fc341e191f2855237dec566"],["/tags/服务器/index.html","a81a11e00fbc5bf2aecf78442bb0604e"],["/tags/正则/index.html","b879fe24ae0fcd485c47a21304a6309a"],["/tags/源码/index.html","839f02b6ecbb9429b3bbe60e6672ba0b"],["/tags/知其所以然/index.html","995db7c19d62c67604fafef95ad12452"],["/tags/笔记/index.html","eebb6fd6ae20e199d50ec7a0fcea8d23"],["/tags/算法/index.html","9fdc465413edabe71480505e0fea6044"],["/tags/练习/index.html","0a7a63e2b1ab95ed030378d049ab7f5e"],["/tags/读书/index.html","f1dfe1f8adee3416c96cba1e5a42d72f"],["/tags/静态模块打包器/index.html","0e2e5f66f84f9527dbccb75d24679087"],["/wordScenery/index.html","64b6200b7344b794b1eb54ea39547717"]];
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
