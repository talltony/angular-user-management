!function(a){"use strict";a.module("user_management.registration",["ngRoute"])}(window.angular),function(a){"use strict";var b=a.module("user_management.registration");b.provider("userManagementRegistrationConfig",function(){var a="",b="/register";return{$get:function(){return{apiRoot:function(){return a},registrationEndpoint:function(){return b}}},setApiRoot:function(b){a=b},setRegistrationEndpoint:function(a){b=a}}})}(window.angular),function(a){"use strict";var b=a.module("user_management.registration");b.config(["$routeProvider",function(a){a.when("/register/",{templateUrl:"templates/user_management/registration/register.html",controller:"RegistrationCtrl",anonymousOnly:!0})}])}(window.angular),function(a){"use strict";var b=a.module("user_management.registration");b.factory("registrationFactory",["$http","userManagementRegistrationConfig",function(a,b){var c=b.apiRoot(),d={url:c+b.registrationEndpoint(),options:function(){return a({method:"OPTIONS",url:d.url})},post:function(b){return a({method:"POST",url:d.url,data:b})}};return{register:d}}])}(window.angular),function(a){"use strict";var b=a.module("user_management.registration");b.controller("RegistrationCtrl",[function(){}])}(window.angular),function(a){"use strict";var b=a.module("user_management.registration");b.directive("registerForm",["registrationFactory",function(b){return{restrict:"A",scope:!0,templateUrl:"templates/user_management/registration/register_form.html",link:function(c){c.data={};var d=b.register.options();d.then(function(a){c.fields=a.data.actions.POST}),c.register=function(){d.then(function(){c.loading=!0,c.registered=!1,c.successData=void 0,c.errorData=void 0,a.forEach(c.fields,function(a){a.errors=""}),c.errors={},b.register.post(c.data).then(function(a){c.data={},c.registered=!0,c.successData=a.data},function(b){c.errorData=b.data,a.forEach(b.data,function(b,d){b=a.isArray(b)?b[0]:b,a.isDefined(c.fields[d])&&(c.fields[d].errors=b),c.errors[d]=b})})["finally"](function(){c.loading=!1})})}}}}])}(window.angular);