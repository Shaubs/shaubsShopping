

module.exports = function (req) {
    try {
        // console.log('isAuthenticated Session ID' , req.sessionID);
        // console.log('global session ' , userSessionObject)
        const requestSessionID = req.sessionID; // request Session Id
        for (let storedSessionId in userSessionObject) {
            if (storedSessionId === requestSessionID) { // if request and stored session id matches then hes valid user
                console.log(storedSessionId)
                return true// if session id is not in our store then he is not considered as authenticated
            }
        }

    }
    catch (error) {

        console.log('EXCEPTION - InitializeServer JS - isAuthenticated :', error);
    }
};

