angular.module("user_management.profile").run(["$templateCache",function(a){"use strict";a.put("templates/user_management/profile/profile.html","<form profile-form ng-submit=editProfile()></form><form password-change-form ng-submit=changePassword()></form>"),a.put("templates/user_management/profile/profile_form.html",'<div class="alert alert-success" ng-if="updated === true"><p>You have updated your profile.</p></div><div class=form-group ng-class="{\'has-error\': fields.name.errors}"><label for=name ng-if=fields.name.label>{{ fields.name.label }}</label><input type=text ng-model=data.name class=form-control id=name maxlength="{{ fields.name.max_length }}"><div class=help-block ng-if=fields.name.errors>{{ fields.name.errors }}</div></div><button type=submit class="btn btn-default">Update profile</button>')}]);