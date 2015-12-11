(function () {
    'use strict';

    angular.module('logging-appinsights', [])
        .config([
            '$provide', function ($provide) {
                $provide.decorator('$log', function ($delegate, appInsightsLogDecorator) {
                    return appInsightsLogDecorator($delegate);
                });
            }
        ]);

    angular.module('logging-appinsights')
        .factory('appInsightsLogDecorator', function () {
            return function ($delegate) {
                return {
                    log: overridenLog,
                    debug: overriddenDebug,
                    info: overriddenInfo,
                    error: overriddenError,
                    warn: overriddenWarn
                };

                function overridenLog() {
                    $delegate.log.apply(null, arguments);
                }

                function overriddenDebug() {
                    $delegate.debug.apply(null, arguments);
                }

                function overriddenInfo() {
                    $delegate.info.apply(null, arguments);
                }
                function overriddenError() {
                    $delegate.error.apply(null, arguments);
                }

                function overriddenWarn() {
                    $delegate.warn.apply(null, arguments);
                }
            };
        });
})();