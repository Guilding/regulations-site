define(["jquery","underscore","backbone","main-view","reg-model","definition-view","sub-head-view","drawer-view","dispatch","sidebar-view","konami","header-view","analytics-handler","regs-helpers","./regs-router","./reg-view","search-results-view"],function(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m){return{getTree:function(t){var n=this;t.children().each(function(){var t=e(this),r=t.attr("id"),s=t.find("ol"),o;i.set({text:r,content:t.html()}),typeof (r,s)!="undefined"&&(o=s?e(s):t,n.getTree(o))})},bindEvents:function(){new l(function(){document.getElementById("menu-link").className+=" hamburgerify",e(".inline-interpretation .expand-button").addClass("carrotify"),e("#about-tool").html('Made with <span style="color: red"><3</span> by:'),e("#about-reg").html("Find our brilliant attorneys at:")})},init:function(){var t,n=e("#menu").data("reg-id"),s=e("section[data-base-version]"),l=s.data("base-version");a.set("reg",n);if(window.location.pathname.indexOf("search")>0){var g=p.parseURL(window.location.href),y=g.params;a.setContentView(new m({query:y.q,version:y.version}))}else typeof s!="undefined"&&(t=s.attr("id"),i.set(t,e("#content-body").html()),a.setContentView(new v({id:t})));typeof l!="undefined"&&a.set("version",l),window.APP_PREFIX&&a.set("urlprefix",window.APP_PREFIX.substring(1)),window.Regs={},window.Regs.subhead=new o,window.Regs.drawer=new u,window.Regs.sidebar=new f,window.Regs.mainView=new r,window.Regs.analytics=new h,window.Regs.mainHeader=new c,d.start(),this.bindEvents()}}});