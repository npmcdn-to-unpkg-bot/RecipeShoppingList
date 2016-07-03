System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CONFIG;
    return {
        setters:[],
        execute: function() {
            exports_1("CONFIG", CONFIG = {
                baseUrls: {
                    config: 'commands/config',
                    resetDb: 'commands/resetDb',
                    characters: 'api/recipes.json',
                    vehicles: 'api/shoppinglists.json'
                }
            });
        }
    }
});
//# sourceMappingURL=config.js.map