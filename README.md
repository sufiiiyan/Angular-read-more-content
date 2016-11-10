# Collapsing and expanding long blocks of text/html content with "Read more"
Angular-read-more  [Demo](http://sufiiiyan.github.io/Angular-read-more-content/) 
 :sparkles: Add read more to text and HTML content too  :+1:  :+1:
---------------------------------------------------

#### **Add in your file**
```
<script src="readmore.js"></script>
<script src="angular-read-more.js"></script>
```
####  **Add dependency in your module**

    var app=angular.module("you app name",['angular-read-more'])
    
#### **In controller**
```
$scope.options = {
        speed: 500,
        collapsedHeight:100,
        moreLink: '<a href="#">Read more</a>',
        lessLink: '<a href="#">Read Less</a>'
    };
    
    e.g.
    $scope.descriptionTEXT = "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    $scope.descriptionHTML = "<span style="font-weight: bold;"><h><span style="text-decoration: underline;"><span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span></span><ul><li><span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span></li></ul><h><span> when an unknown printer took a galley of type and scrambled it to make a type specimen book</span><ul><li><span>It has survived not only five centuries, but also the leap into electronic</span></li></ul></h></h></span>"
```
    
####  **Using directive**

    <div read-more="{{descriptionHTML}}" read-more-options="options"></div>
    
    OR
    
    <p read-more="{{descriptionTEXT}}" read-more-options="options"></p>

-------------------------------------------------------------------------------------------------------------------------------
based on readmorejs [more documentation at](https://github.com/jedfoster/Readmore.js) 
### Copyright

Copyright (c) 2015-2016 (Sufiyan Momin)

## License

 Use this guide. Attributions are appreciated.

### (The MIT License)
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
