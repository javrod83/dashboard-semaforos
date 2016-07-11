angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('distribution/distribution.html','<div ng-controller="DistributionCtrl">\n    <div class="zone-picker">\n        <div class="areas">\n            <ul class="list-group">\n                <drag-ul ng-repeat="area in areas" data="area"></drag-ul>\n            </ul>\n        </div>\n        <div class="drop-container">\n            <drop-div dropzone="zone" ng-repeat="zone in dropzones"></drop-div>\n        </div>\n    </div>\n    <div class="charts">\n    \t<bar-chart id="global" chartData="fake"></bar-chart>\n    \t<bar-chart id="rubroA" chartData="fake"></bar-chart>\n    \t<bar-chart id="rubroB" chartData="fake"></bar-chart>\n    \t<bar-chart id="rubroC" chartData="fake"></bar-chart>\n    </div>\n</div>\n');
$templateCache.put('distribution/drag.html','<li draggable="true" ng-show="!data.assigned" class="list-group-item noselect">{{data.name}}</li>');
$templateCache.put('distribution/drop.html','<div>\n\t<span>Zona {{dropzone.name}}</span>\n    <div ng-class="zone" class="dropzone"></div>\n</div>\n');}]);