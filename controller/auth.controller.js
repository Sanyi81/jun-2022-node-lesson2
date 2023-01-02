const oauthService = require("../service/oauth.service");

module.exports = {
    login: async (req, res, next) => {
        try {
            const { user, body} = req;

            await oauthService.comparePasswords(user.password, body.password)

            res.json('ok');
        } catch (e) {
            next(e);
        }
    }
}