function test(request, response) {
	var return_var = '';
	response.contentType = 'text/plain';
	if (request.rawURL === "/Ping") {
	  return_var = "OK";
	}
	if (request.rawURL === "/Get") {
	  return_var = "OK";
	}
    return return_var;
}
