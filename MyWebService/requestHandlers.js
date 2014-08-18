function test(request, response) {
	//console.log("here");
	//console.log(request.rawURL);
	//console.log(request.body);
	//console.log(request.contentType);
	//console.log(request.host);
	//console.log(request.method);
	//console.log(request.line);
	var return_var = 'OK';
	response.contentType = 'text/plain';
	//if (request.rawURL === "/Ping") {
	//  return_var = "OK";
	//}
	//if (request.rawURL === "/Get") {
	//  return_var = "OK";
    //	}
    return return_var;
}
