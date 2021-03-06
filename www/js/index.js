/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        alert= function (message) {

            //TODO 这里调用的是官方提供的对话框
            navigator.notification.alert(
                message==null?"这里是提示信息":message,  // message
                null,         // callback
                '对话框',            // title
                '确认'                  // buttonName
            );
        };

        plugtest=function(){ //吐丝插件
            window.plugins.ShowToast("自定义吐丝插件",1);
        };

        plugtest2=function(){ //吐丝插件
            echo.echo("测试","插件","信息");

        };

        //TODO 打开进度框
        showprogress_dialog=function(){

            xiangbalao.showdalog("正在加载数据...");

        };
        //TODO 关闭进度框
        close_dalog=function(){
             alert('test');
            xiangbalao.closedalog();

        };
        //TODO 调用
        start_activity=function(classname){
            xiangbalao.startActivity(classname);

        };

        start_APP=function(classname){
            xiangbalao.startApp(classname);

        };

    },
    // deviceready Event Handl
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();