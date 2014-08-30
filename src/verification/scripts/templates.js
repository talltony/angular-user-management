angular.module('user_management.verification').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/user_management/verification/verification.html',
    "<div verify></div>"
  );


  $templateCache.put('templates/user_management/verification/verify.html',
    "<div><div ng-show=\"status === 201\"><p>Thank you for verifying your account. You may now log in.</p></div><div ng-hide=\"status === 201\"><p>There was a problem verifying your account, you may have already verified it. Please try logging in.</p></div></div>"
  );

}]);
