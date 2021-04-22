
const express = require('express');
global.userSessionObject = {};
var router = express.Router();

router.route('/').post(cors.cors, (req, res, next) => {
    console.log('User Session ID ==> %s created on %s ', req.sessionID, Date.now());
    res.cookie('sessionID', req.sessionID, {
        maxAge: 1 * 24 * 3600000,
        httpOnly: false
    });
    clearExpiredSessions();
    if (req.sessionID) {
        const temp_SessionId = req.sessionID;
        console.log('ADDING USER INFO TO SESSION OBJ : ', temp_SessionId);
        userSessionObject[temp_SessionId] = {
            createdTime: Date.now()
        };
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send({ success: true, info: null });

})


/**
 *This method will clear the session if expiry is
 * greater than 24 hours.
 * This is added to avoid growing the session object
 */
function clearExpiredSessions() {
    const currentTime = Date.now();
    for (let sessionId in userSessionObject) {
        const duration = currentTime - userSessionObject[sessionId].createdTime;
        if (duration > 1000 * 60 * 60 * 8) {
            delete userSessionObject[sessionId];
        } else {
            break;
        }
    }
}

module.exports = router;
