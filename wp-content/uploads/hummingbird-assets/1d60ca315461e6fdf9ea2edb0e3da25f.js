/**handles:wphb-global**/
!function(){"use strict";var e={init:function(){this.registerClearAllCache(),this.registerClearNetworkCache(),this.registerClearCacheFromNotice(),this.registerClearCloudflare()},clearCache:function(e){jQuery.ajax({url:wphbGlobal.ajaxurl,method:"POST",data:{nonce:wphbGlobal.nonce,action:"wphb_clear_caches",modules:[e]}}).done((function(){location.reload()}))},registerClearAllCache:function(){var e=this,n=document.getElementById("wp-admin-bar-wphb-clear-all-cache");n&&n.addEventListener("click",(function(){return e.post("wphb_global_clear_cache")}))},registerClearNetworkCache:function(){var e=document.querySelector("#wp-admin-bar-wphb-clear-cache-network-wide > a");e&&e.addEventListener("click",(function(){void 0!==window.WPHB_Admin?window.SUI.openModal("ccnw-modal","wpbody","ccnw-clear-now"):window.location.href="/wp-admin/network/admin.php?page=wphb-caching&update=open-ccnw"}))},registerClearCacheFromNotice:function(){var e=this,n=document.getElementById("wp-admin-notice-wphb-clear-cache");n&&n.addEventListener("click",(function(){return e.post("wphb_global_clear_cache")}))},registerClearCloudflare:function(){var e=this,n=document.querySelector("#wp-admin-bar-wphb-clear-cloudflare > a");n&&n.addEventListener("click",(function(){return e.post("wphb_front_clear_cloudflare")}))},post:function(e){var n=new XMLHttpRequest;n.open("POST",wphbGlobal.ajaxurl+"?action="+e),n.onload=function(){200===n.status&&location.reload()},n.send()}};document.addEventListener("DOMContentLoaded",(function(){e.init()})),window.WPHBGlobal=e}();
//# sourceMappingURL=wphb-global.min.js.map