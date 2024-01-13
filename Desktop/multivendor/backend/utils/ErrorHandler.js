function ErrorHandler(message, statusCode) {
    const error = new Error(message);
    error.statusCode = statusCode;
    Error.captureStackTrace(error, ErrorHandler);
    return error;
}

module.exports = ErrorHandler;
