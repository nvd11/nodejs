var http = require('http');
var fs = require('fs');
var url = require('url');


// 创建服务器
http.createServer( function (request, response) {
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;

   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");

   // 从文件系统中读取请求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{
         //get suffix name
         var i=pathname.lastIndexOf('.');
         var suffix=pathname.substr(i+1,pathname.length);
         console.log("suffix is: " + suffix);
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         var baseType = 'text';
         if (suffix == 'png'){
            baseType = 'image';
         }

         console.log("base Type is: " + baseType);

         response.writeHead(200, {'Content-Type': baseType + '/' + suffix});
         //response.writeHead(200, {'Content-Type': data.type});

         // 响应文件内容
         if (baseType == 'text'){
           response.write(data.toString());
         }else{
           response.write(data,"binary");
         }
      }
      //  发送响应数据
      response.end();
   });
}).listen(8081);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');
