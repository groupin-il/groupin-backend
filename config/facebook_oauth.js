module.exports = {
    development: {
        client_id : '896021850846067',
        client_secret : '68a51cdd4996f09291caa74df18468e0',
        callback_url : 'http://localhost:4000/users/auth/facebook/callback',
    },


    test: {
        client_id : '896021850846067',
        client_secret : '68a51cdd4996f09291caa74df18468e0',
        callback_url : 'http://localhost:4000/users/auth/facebook/callback',
    },

    production: {
        client_id : process.env.FACEBOOK_CLIENT_ID,
        client_secret : process.env.FACEBOOK_CLIENT_SECRET,
        callback_url : process.env.FACEBOOK_CALLBACL_URL,
    }
};
