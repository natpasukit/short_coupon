// const logger = require('./moduleWinstonLogger');
class RestResponse {
    /**
     * @author natpa
     * @version 1.2.1
     * @description class to create Response object with header and body in human format
     * @class
     * @param {String} [optName=null] response operation name 
     * @param {Int|String} [code=500] response code according to http response code
     * @param {Object} [data=null] response body data 
     */
    constructor(optName = null, code = 500, data = null) {
        this.header = new RestHeader(code, optName);
        this.body = new RestBody(data);
    }

    returnHeader() {
        /**
         * @description return object header
         * @returns {Object}
         */
        return (this.header);
    }
    returnBody() {
        /**
         * @description return object body
         * @returns {Object}
         */
        return (this.body);
    }
    err(errCode, errDetail = null, errMsgType = "message", errMsg, optName) {
        /**
         * @description add error data into response object header
         * @param {String|Int} errCode error code according http response code
         * @param {String} optName operation name
         * @param {Error} [errDetail=null] error message for debugging       
         * @param {String} [errMsgType=message] error type of message
         * @param {String} [errMsg=string] custom error message for client   
         * @throws {Error} on undefined param
         */
        let errorMsgTable = {
            "400": "Bad Request",
            "401": "Unathorized",
            "402": "Payment Required",
            "403": "Forbidden",
            "404": "Not Found",
            "405": "Method Not Allowed",
            "500": "Internal Server Error"
        };
        if (typeof errCode != "undefined") {
            this.header.code = `${errCode}`;
            if (typeof errMsg != "undefined") {
                this.header.errMsg = errMsg;
            } else {
                if (typeof errorMsgTable[this.header.code] != "undefined") {
                    this.header.errMsg = errorMsgTable[this.header.code];
                } else {
                    throw new Error("ReferenceError: This \"errCode\" not exists you must defined errMsg");
                }
            }
            if (typeof optName != "undefined") {
                this.header.operationName = optName;
            }
            this.header.errMsgType = errMsgType;
            this.header.errDetail = `${errDetail}`;
        } else {
            throw new Error("ReferenceError: \"errCode\" is not defined");
        }
        if(typeof process.env.REST_ERROR_LOG != "undefined" && process.env.REST_ERROR_LOG == "TRUE"){
            // Proper log modules goes here
            console.log(this);
        }
    }

    success(successCode, body, optName) {
        /**
         * @description add success data into object header and body
         * @param {String|Int} sucCode success code of operation
         * @param {String} optName operation name
         * @param {*} [body=true] data result of operaion default true
         * @throws {Error} on undefined param
         */
        if (typeof successCode != "undefined") {
            this.header.code = `${successCode}`;
            this.body.result = body;
            if (typeof optName != "undefined") {
                this.header.operationName = optName;
            }
            if (body == null) {
                this.header.errDetail = "no result";
                this.header.errMsg = "no result";
            }
        } else {
            throw new Error("ReferenceError: \"successCode\" is not defined");
        }
        if(typeof process.env.REST_SUCCESS_LOG != "undefined" && process.env.REST_SUCCESS_LOG == "TRUE"){
            // Proper log modules goes here
            console.log(this);
        }
    }
}
class RestHeader {
    /**
     * @description class to create response header
     * @class
     * @param {Int} code 
     * @param {String} optName 
     */
    constructor(code, optName) {
        this.code = `${code}`;
        this.operationName = optName;
        this.errMsg = null;
        this.errMsgType = null;
        this.errDetail = null;
    }
}
class RestBody {
    /**
     * @description class to create response body
     * @class
     * @param {Object} data 
     */
    constructor(data) {
        this.result = data;
    }
}
module.exports.RestResponse = RestResponse;