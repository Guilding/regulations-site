define('regs-router', ['underscore', 'backbone', 'dispatch', 'queryparams'], function(_, Backbone, Dispatch) {
    'use strict';

    var RegsRouter = Backbone.Router.extend({
        routes: {
            ':section/:version': 'loadSection',
            'search/:reg': 'backToSearchResults'
        },

        loadSection: function(section, versionAndHash) {
            var poundPosition,
                options = {id: section};

            if (typeof versionAndHash !== 'undefined') {
                poundPosition = versionAndHash.indexOf('#');
            }

            if (poundPosition !== -1) {
                options.scrollToId = versionAndHash.substr(poundPosition);
            }

            Dispatch.trigger('regSection:open', section, options, 'regSection'); 
            Dispatch.trigger('sxs:close');
        },

        backToSearchResults: function(reg, params) {
            var config = {
                query: params.q,
                version: params.version
            };

            if (typeof params.page !== 'undefined') {
                config.page = params.page;
            }

            Dispatch.trigger('search:submitted', config, 'searchResults');
        },

        start:  function() {
            var root = Dispatch.getURLPrefix() || '/';

            Backbone.history.start({
                pushState: 'pushState' in window.history,
                silent: true,
                root: root
            });
        }
    });

    if (typeof window.history === 'undefined' && typeof window.history.pushState === 'undefined') {
        RegsRouter = function() {
            this.start = function() {};
            this.navigate = function() {};
        };
    }

    var router = new RegsRouter();
    return router;
});
