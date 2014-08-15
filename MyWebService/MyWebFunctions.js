addHttpRequestHandler(
      '/GET',               // (string) regex used to filter the requests to be intercepted
      'requestHandlers.js',  // (string) name of the file where the request handler function is specified
      'test'         // (string) name of the request handler function
);
