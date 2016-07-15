angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('controladores/controladores.html','<h1>Recambio T\xE9cnico</h1>\r\n\r\n<div class="data-controladores" ng-controller="ControladoresCtrl">\r\n    \r\n    <div class="coeficients">\r\n        <h3>Coeficientes</h3>\r\n        <div class="controladores" >\r\n            <h4>Controladores</h4>\r\n            <input type="number" name="costo-controlador"  class="form-control" ng-enter="updateControladores()" ng-model="coef.controladoresCosto" placeholder="Costo" title="Costo">\r\n            <input type="number" name="factor-controlador"  class="form-control" ng-enter="updateControladores()" ng-model="coef.controladoresFactor" placeholder="Factor" title="Factor">\r\n                            \r\n        </div>\r\n        <div class="nodos" >\r\n                        <h4>Nodos</h4>\r\n            <input type="number" name="costo-controlador"  class="form-control" ng-enter="updateNodos()" ng-model="coef.nodoCosto" placeholder="Costo" title="Costo">\r\n            <input type="number" name="factor-controlador"  class="form-control" ng-enter="updateNodos()" ng-model="coef.nodoFactor" placeholder="Factor" title="Factor">                    \r\n        </div>\r\n        <div class="controladores-por-nodo" >\r\n            <h4>Controladores por Nodo</h4>\r\n            <input type="number" name="costo-controlador"  class="form-control" ng-enter="updateNodos()" ng-model="coef.controladoresPorNodo" placeholder="Controladores por Nodo" title="Controladores por Nodo">\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class="costos-wrapper">\r\n    <h3>Costos por zonas</h3>\r\n        <div ui-grid="gridController" ui-grid-edit ui-grid-row-edit ui-grid-cellNav ui-grid-resize-columns class="grid"></div>\r\n    </div>\r\n</div>');
$templateCache.put('distribution/distribution.html',' <h1>Distribuci\xF3n de \xC1reas</h1>\r\n<div class="dragg-and-drop-area" ng-controller="DistributionCtrl">\r\n    <div class="zone-picker">\r\n        <div class="areas">\r\n\r\n            <ul class="list-group">\r\n                <drag-ul ng-repeat="area in areas" data="area"></drag-ul>\r\n            </ul>\r\n        </div>\r\n        <div class="drop-container">\r\n            <drop-div dropzone="zone" ng-repeat="zone in dropzones"></drop-div>\r\n        </div>\r\n        <div class="Presupuestos-container">\r\n            <h5>Presupuesto</h5>\r\n            <div class="item">  Ordinario: <span class="cifra">{{cantidades.ordinario | guita}}</span></div>\r\n            <div class="item">  Recambio:  <span class="cifra">{{cantidades.recambio | guita}}</span></div>\r\n            <div class="item total">  Total:     <span class="cifra">{{(cantidades.ordinario+cantidades.recambio) | guita}}</span></div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class="charts">\r\n    \t<bar-chart id="global" chart-data="globalChartData"></bar-chart>\r\n    \t<bar-chart id="rubroA" chart-data="aChartData"></bar-chart>\r\n    \t<bar-chart id="rubroB" chart-data="bChartData"></bar-chart>\r\n    \t<bar-chart id="rubroC" chart-data="cChartData"></bar-chart>\r\n    </div>\r\n</div>');
$templateCache.put('distribution/drag.html','<li draggable="true" ng-show="!data.assigned" class="list-group-item noselect">{{data.name}}</li>');
$templateCache.put('distribution/drop.html','<div ng-class="zone" class="dropzone">\r\n    <span ng-repeat="area in dropzone.areas" class="area label label-info">{{area.name}}\r\n        \t<a ng-click="remove(area)">\r\n        \t\t<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>\r\n    </a>\r\n    </span>\r\n    <div ng-if="dropzone.total>0" class="sub-caption">\r\n        <span ng-if="dropzone.recambio>0">\r\n            <div class="ordinario">{{dropzone.total | guita }}</div> + <div class="recambio">{{dropzone.recambio | guita }}</div> = <div class="total">{{(dropzone.total+dropzone.recambio) | guita}}</div>\r\n        </span>\r\n        <div ng-if="dropzone.recambio<=0">\r\n            <div class="total">{{dropzone.total | guita}}</div> \r\n        </div>\r\n    </div>\r\n    <span class="name">Zona {{dropzone.name}}</span>\r\n</div>\r\n');
$templateCache.put('tabla/tabla.html','<h1>Tabla de Entrada</h1>\r\n\r\n<div class="data-sources">\r\n    \r\n    <div class="coeficients">\r\n        <h3>Coeficientes</h3>\r\n        <div class="rubro" ng-repeat="(key, rubro) in coeficientes">\r\n            <!-- <h6>{{rubro.id}}</h6> -->\r\n            <input type="number" name="{{rubro.id}}"  class="form-control" ng-enter="updateRowsMatching(\'RUBRO\',rubro)" ng-model="rubro.value" placeholder="{{rubro.id}}">\r\n            <div class="subrubro" ng-repeat="(subrubro_key, subrubro) in rubro.subrubro">\r\n                <!-- <h6>{{subrubro.id}}</h6> -->\r\n                <input type="number" name="{{subrubro.id}}" title="{{subrubro.id}}" class="form-control" ng-enter="updateRowsMatching(\'SUBRUBRO\',subrubro)" ng-model="subrubro.value" placeholder="{{subrubro.id}}">\r\n            </div>                \r\n        </div>\r\n    </div>\r\n\r\n    <div class="grid-wrapper">\r\n    <h3>Gastos desagregados</h3>\r\n        <div ui-grid="grid" ui-grid-edit  ui-grid-row-edit ui-grid-cellNav ui-grid-resize-columns class="grid"></div>\r\n    </div>\r\n</div>');}]);