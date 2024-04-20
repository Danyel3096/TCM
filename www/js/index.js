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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

document.addEventListener('init', function(event) {

    var page = event.target;
  
    if (page.id === 'page1') {

    /* EL EJEMPLO DEL PROFESOR UTILIZA EL INDEX DEL TEMPLATE PARA QUE FUNCIONEN LOS BOTONES
     DENTRO DEL PUSHPAGE */
      page.querySelector('#push-button').onclick = function() {
        console.log("Click en el boton!!! con paso de parámetros..");
        document.querySelector('#myNavigator').pushPage('page2.html',
        {data: {title: 'Page 2', myData: JSON.stringify({"first":"dato de prueba"})}});
      };

      /* NOSOTROS DEBERIAMOS UTILIZAR LA RUTA Y EL NOMBRE DEL ARCHIVO HTML PARA QUE FUNCIONEN
       LOS BOTONES DE IDA A LA PAGINA HTML Y DE REGRESO AL INDEX */
       //PENSANDOLO BIEN ERA UN BOBADA LO DEL REQUEST POR GET -.- NO TIENE SENTIDO
       //LO QUE SE ESTABA HACIENDO ANTES NONONO -.-
       /* OTRA COSA LA ETIQUETA TITLE ES IMPORTANTE DENTRO DEL OBJETO DATA
        PORQUE AL FINAL DE ESTE INDEX.JS SE UTILIZA LA CLASE .CENTER PARA CENTRAR EL TITULO
        DE CADA PAGINA QUE COINCIDA CON LOS ID DE LOS ONS-PAGE EN LOS ARCHIVOS HTML*/
      page.querySelector('#first-component-button').onclick = function() {
          console.log("Click en el boton!!! con paso de parámetros..");
          document.querySelector('#myNavigator').pushPage('/views/component1.html',
          {data: {title: 'Página 3', myData: JSON.stringify({"first":"primer componente"})}});
      };

      page.querySelector('#second-component-button').onclick = function() {
          console.log("Click en el boton!!! con paso de parámetros..");
          document.querySelector('#myNavigator').pushPage('/views/component2.html',
          {data: {title: 'Página 4', myData: JSON.stringify({"first":"segundo componente"})}});
      };

      page.querySelector('#third-component-button').onclick = function() {
          console.log("Click en el boton!!! con paso de parámetros..");
          document.querySelector('#myNavigator').pushPage('/views/component3.html',
          {data: {title: 'Página 5', myData: JSON.stringify({"first":"tercer componente"})}});
      };

        page.querySelector('#fourth-component-button').onclick = function() {
          console.log("Click en el boton!!! con paso de parámetros..");
          document.querySelector('#myNavigator').pushPage('/views/component4.html',
          {data: {title: 'Página 6', myData: JSON.stringify({"first":"cuarto componente"})}});
        };

        page.querySelector('#fifth-component-button').onclick = function() {
          console.log("Click en el boton!!! con paso de parámetros..");
          document.querySelector('#myNavigator').pushPage('/views/component5.html',
          {data: {title: 'Página 7', myData: JSON.stringify({"first":"quinto componente"})}});
        };

        page.querySelector('#sixth-component-button').onclick = function() {
          console.log("Click en el boton!!! con paso de parámetros..");
          document.querySelector('#myNavigator').pushPage('/views/component6.html',
          {data: {title: 'Página 8', myData: JSON.stringify({"first":"sexto componente"})}});
        };

        page.querySelector('#seventh-component-button').onclick = function() {
          console.log("Click en el boton!!! con paso de parámetros..");
          document.querySelector('#myNavigator').pushPage('/views/component7.html',
          {data: {title: 'Página 9', myData: JSON.stringify({"first":"septimo componente"})}});
        };

        page.querySelector('#eighth-component-button').onclick = function() {
          console.log("Click en el boton!!! con paso de parámetros..");
          document.querySelector('#myNavigator').pushPage('/views/component8.html',
          {data: {title: 'Página 10', myData: JSON.stringify({"first":"octavo componente"})}});
        };

        page.querySelector('#nineth-component-button').onclick = function() {
          console.log("Click en el boton!!! con paso de parámetros..");
          document.querySelector('#myNavigator').pushPage('/views/component9.html',
          {data: {title: 'Página 11', myData: JSON.stringify({"first":"noveno componente"})}});
        };

        page.querySelector('#tenth-component-button').onclick = function() {
          console.log("Click en el boton!!! con paso de parámetros..");
          document.querySelector('#myNavigator').pushPage('/views/component10.html',
          {data: {title: 'Página 12', myData: JSON.stringify({"first":"decimo componente"})}});
        };
    }
    else if (page.id === 'page2') {
      console.log(page.data);
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
    else if (page.id === 'page3') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    } else if (page.id === 'page4') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    } else if (page.id === 'page5') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    } else if (page.id === 'page6') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    } else if (page.id === 'page7') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }  else if (page.id === 'page8') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }  else if (page.id === 'page9') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }  else if (page.id === 'page10') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }  else if (page.id === 'page11') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }  else if (page.id === 'page12') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});
