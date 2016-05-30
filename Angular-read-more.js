/**
 * @author Sufiyan momin
 * @description collapsing and expanding long blocks of text/html content with "Read more" and "Read less" 
 * for example <div read-more="{{descriptionHTML}}" read-more-options="options"></div> 
 * OR 
 * <p read-more="{{descriptionTEXT}}" read-more-options="options"></p>
 */

angular.module('angular-read-more', []).directive('readMore', ['$timeout', '$compile', function ($timeout) {
    return {
      

        link: function (scope, element, attr) {
            
             var readMoreOption = scope.$eval(attr.readMoreOptions);
            
            $(element).append(attr.readMore);
            
            $timeout(function(){
                $(element).readmore(readMoreOption);
            });

        }
    };
}]);
