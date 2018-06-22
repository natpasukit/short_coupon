const RestResponse = require("../modules/moduleResponseClass").RestResponse;
module.exports.getRedirect = (req, res) => {
    /**
     * @author natpa
     * @version 1.0
     * @description controller to redirect any incoming route with error response
     */
    let response = new RestResponse();
    try {
        response.err(404);
        res.status(404).send(response);
    } catch (err) {
        response.err(500);
        res.status(500).send(response);
    }
};