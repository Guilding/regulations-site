define("analytics-handler",["jquery","underscore","backbone","dispatch"],function(e,t,n,r){var i=n.View.extend({initialize:function(){this.bindListeners(),r.on("ga-event:definition",this.sendEvent,"Inline Definition"),r.on("regSection:open",this.sendEvent,"Table of Contents"),r.on("interpretation:toggle",this.sendEvent,"Inline interpretation"),r.on("ga-event:permalink",this.sendEvent,"Permalink"),r.on("search:submitted",this.sendEvent),r.on("ga-event:sxs",this.sendEvent)},sendEvent:function(e){var t,n,r;if(typeof window.ga=="undefined")return;typeof e=="object"?typeof e.data!="undefined"?(r=e.data,n=r.action,t=r.object,typeof r.action=="function"&&(n=r.action.call())):typeof e.query!="undefined"?(n="submitted search",t=e.query+" "+e.version):typeof e.opensxs!="undefined"?(n="opened SxS",t=e.opensxs):(n=e.action+" "+e.context,t=this):typeof e=="string"&&(n=e,t=this),window.ga("send","event",t,n)},bindListeners:function(){e("#menu-link").on("click",{object:"Table of Contents",action:function(){return e("#menu").hasClass("active")?"close":"open"}},this.sendEvent),e("#toc-close").on("click",{object:"Table of Contents",action:"close (bottom link)"},this.sendEvent)}});return i});