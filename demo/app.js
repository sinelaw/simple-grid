/*global console:false, angular:false */
(function () {
    'use strict';

    angular.module('demo', ['simpleGrid'])
        .controller('MainCtrl', function ($scope, $log) {
            $log.info('test');
            $scope.gridConfig = {
                options: {
                    showDelete: true
                },
                callbacks: {
                    deleted: function (row) { console.log('deleted:', row); },
                    focused: function (row, column) { console.log('focused:', row, column); }
                },
                columns: [
                    {
                        field: 'name',
                        inputType: 'text',
                        required: true,
                        enabled: true
                    },
                    {
                        field: 'age',
                        inputType: 'number',
                        required: false,
                        enabled: true
                    },
                    {
                        field: 'sex',
                        inputType: 'select',
                        options: [{ value: 0, title: 'Male'}, { value: 1, title: 'Female'}],
                        required: false,
                        enabled: true
                    }
                ],
                rows: [ { name: 'joe', age: 1, sex: 1 },
                        { name: 'schmo', age: 100 }
                      ]
            };
            $scope.pretty = function (obj) { return JSON.stringify(obj, undefined, '    '); };
        });

}());
