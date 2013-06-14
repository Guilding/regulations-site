define("content-view",["jquery","underscore","backbone","jquery-scrollstop","regs-dispatch","definition-view"],function(e,t,n,r,i,s){var o=n.View.extend({openDefinition:{id:"",view:{},link:{}},events:{"click .definition":"definitionLink","click .expand-button":"expandInterp","mouseenter p":"showPermalink"},initialize:function(){var n,r;i.on("definition:remove",this.cleanupDefinition,this),e(window).on("scrollstop",t.bind(this.checkActiveSection,this)),this.$sections={},this.$contentHeader=e("#content-subhead"),this.$contentContainer=this.$el.children().last().children(),this.activeSection="",this.$activeSection="",n=this.$contentContainer.length;for(r=0;r<n;r++)this.$sections[r]=e(this.$contentContainer[r])},checkActiveSection:function(){var e=this.$contentHeader.offset().top,n=this.$contentContainer.length;for(var r=0;r<n;r++)if(this.$sections[r].offset().top>=e){r-=1;if(t.isEmpty(this.activeSection)||this.activeSection!==this.$sections[r].id){this.activeSection=this.$sections[r][0].id,this.$activeSection=this.$sections[r][0],i.trigger("activeSection:change",this.activeSection);return}}return this},cleanupDefinition:function(){return delete this.openDefinition.id,delete this.openDefinition.view,this.openDefinition.link&&this.openDefinition.link.removeClass("active").removeData("active"),delete this.openDefinition.link,this},definitionLink:function(n){n.preventDefault();var r=e(n.target),i;return r.data("active")?(this.openDefinition.view.remove(),this):(i=r.attr("data-definition"),r.addClass("active").data("active",1),i===this.openDefinition.id?(this.openDefinition.link.removeClass("active").removeData("active"),this.openDefinition.link=r,this):(t.isEmpty(this.openDefinition.view)||this.openDefinition.view.remove(),this.storeDefinition(r,i),this))},storeDefinition:function(e,t){this.openDefinition.link=e,this.openDefinition.id=t,this.openDefinition.view=new s({id:t,$anchor:e})},expandInterp:function(t){var n=e(t.target);return n.toggleClass("open").next(".hidden").slideToggle(),n.html(n.hasClass("open")?"Hide":"Show"),this},showPermalink:function(t){e(".permalink-marker").remove();var n=e(t.currentTarget),r=n.parent(),i=r.attr("id"),s='<a href="http://google.com" title="Link to this paragraph" class="permalink-marker">&infin;</a>';i!==undefined&&e(n).one().append(s)}});return o});