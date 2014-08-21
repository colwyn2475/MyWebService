function test(request, response) {
	//console.log("here");
	//console.log(request.rawURL);
	//console.log(request.body);
	//console.log(request.contentType);
	//console.log(request.host);
	//console.log(request.method);
	//console.log(request.requestLine);
	console.log(request.url);
	
	response.contentType = 'text/plain';
	// Look for "Ping"
    var patt = /Ping/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return 'OK';
    }
    // Look for "What is your full name"
    var patt = /What is your full name/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return 'Thomas Kirk McFarland';
    }
    // Look for "What is your email address"
    var patt = /What is your email address/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return 'cirrusinfosys@gmail.com';
    }
    // Look for "Please provide a phone"
    var patt = /Please provide a phone/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return '208 447-7271';
    }
    // Look for "Which position"
    var patt = /Which position/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return 'Software / DB Developer';
    }
     // Look for "How many years"
    var patt = /How many years/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return '30';
    }
    // Look for "How did you hear"
    var patt = /How did you hear/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return 'Craigslist Boise';
    }
     // Look for "Please list"
    var patt = /Please list/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return 'B.S in Computer Information Systems from Arizona State University';
    }
    // Look for "resume and cover letter"
    var patt = /resume and cover letter/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return 'https://employer.dice.com';
    }	
    // Look for "source code"
    var patt = /source code/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return 'https://github.com/colwyn2475/MyWebService.git';
    }
    // Look for "proof of elig"
    var patt = /proof of elig/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return 'Yes';
    }
     // Look for "For the puzzle"
    var patt = /For the puzzle/g;
    var bResult = patt.test(request.url);
    if (bResult === true) {
    	return 'A=<>=  B<>=<  C>=<>  D=<>=';
    }
    //if (request.rawURL === "/Ping") {
	//  return_var = "OK";
	//}
	//if (request.rawURL === "/Get") {
	//  return_var = "OK";
    //	}
    //return return_var;
}
