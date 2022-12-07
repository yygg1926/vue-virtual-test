<template>
  <div>
    regist page
    <div>
        <!-- {{ target.root.item[0].title }} -->
        {{ target }}
        
    </div>
    <br/>
    <div v-for="item in target2" :key="item">
        {{ item.title[0]._text }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import xml2js from 'xml2js';
// const { xml2js } = require('xml2js');
// const fs = require('fs');
var jsonParser = require("xmltojson");


export default {
    data() {
        return {
            target: [],
            target2: {},
        }
    },
    created () {
        axios.get('http://127.0.0.1:5500/src/data/NtfData.xml')
        .then(response => {
            console.log(response);
            // fs.readFile('@/data/NtfData.xml', 'utf-8', (err, data) => {
            //     if(err){
            //         throw err;
            //     }
            //     xml2js.parseString(data, (err, result) => {
            //         if(err){
            //             throw err
            //         }

            //         console.log(JSON.stringify(result, null, 4));
            //     });
            // });   

            // xml2js.parseString(response.data, (err, result) => {
            //     if(err){
            //         throw err;
            //     }
            //     console.log(result);
            //     // const json = JSON.stringify(result, null, 4);
                
            // });
            // var xhttp = new XMLHttpRequest();
            // xhttp.onreadystatechange = function(){
            //     if(xhttp.readyState == 4 && xhttp.status == 200){
            //         var xmlDoc = xhttp.responseXML;
            //     }
            // }

            const importCase = jsonParser.parseString(response.data);
            var element = response.data.getElementsByTagName("root");
            element[0].appendChild("<item></item>")
            var resp = JSON.stringify(importCase, undefined, 2);
            this.target2 = JSON.parse(resp).root[0].item;

            // var parser = new DOMParser();
            // var json = parser.parseFromString(response.data, "text/xml");
            // // console.log(json.childNodes.length);
            // // console.log(json.getElementsByTagName("root")[0].children[0].children[0].innerHTML);
            // var res = JSON.stringify(this.xmlToJson(json));
            // this.target = JSON.parse(res);
            console.log(this.target);
            console.log(this.target2);
            console.log(response.data);
        });
    },
    methods: {
        xmlToJson(xml) {
   
   // Create the return object
   var obj = {};

   if (xml.nodeType == 1) { // element
       // do attributes
       if (xml.attributes.length > 0) {
       obj["@attributes"] = {};
           for (var j = 0; j < xml.attributes.length; j++) {
               var attribute = xml.attributes.item(j);
               obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
           }
       }
   } else if (xml.nodeType == 3) { // text
       obj = xml.nodeValue;
   }

   // do children
   if (xml.hasChildNodes()) {
       for(var i = 0; i < xml.childNodes.length; i++) {
           var item = xml.childNodes.item(i);
           var nodeName = item.nodeName;
           if (typeof(obj[nodeName]) == "undefined") {
               obj[nodeName] = this.xmlToJson(item);
           } else {
               if (typeof(obj[nodeName].push) == "undefined") {
                   var old = obj[nodeName];
                   obj[nodeName] = [];
                   obj[nodeName].push(old);
               }
               obj[nodeName].push(this.xmlToJson(item));
           }
       }
   }
   return {obj};
}
    }
}
</script>

<style>

</style>