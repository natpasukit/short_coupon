class ShortID {
    /**
     * @author natpaphon sukitpaneenit
     * @version 1.1.0
     * @description class to unique id object from seed int or randomized
     * @class
     */
    constructor() {
        this.id = null;
    }

    random(length, encodeBase = 32) {
        /**
         * @description simple random generate id based on encodeBase
         * @param {Int} [length] id minimum length , if not defined will be default value
         * @param {Int} [encodeBase=32] encode base by string ( 2 ~ 32 )
         * @return {String}
         */
        this.id = Math.random().toString(encodeBase).substring(2) + (new Date()).getTime().toString(encodeBase);
        if (typeof length != "undefined" && !isNaN(length)) {
            this.id = this.id.substring(0, length);
        }
        return (this.id);
    }

    seed(seed, length, encodeBase = 32) {
        /**
         * @description simple random generate id based on encodeBase and seed
         * @param {Int} seed seed to generate ID from need to be positive number that > 0
         * @param {Int} [length] id minimum length , if not defined will be default value
         * @param {Int} [encodeBase=32] encode base by string ( 2 ~ 32 )
         * @return {String} string based on length * noted that length can't be lower than seed encodeHEX else will return minimal possible length
         * @throws {Error} If wrong seed or seed is undefined
         */
        if (typeof seed != "undefined") {
            if (!isNaN(seed) && +seed > 0) {
                this.id = seed.toString(encodeBase);
                if (typeof length != "undefined" && !isNaN(length) && this.id.length < length) {
                    this.id = (this.id + Math.random().toString(encodeBase).substring(2)).substring(0, length);
                }
                return (this.id);
            } else {
                throw new Error("Bad Param : seed need to be Int that > 0");
            }
        } else {
            throw new Error("Reference Error : seed is undefined");
        }
    }
}
module.exports.ShortID = ShortID;