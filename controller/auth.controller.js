module.exports = {
    login: async (req, res, next) => {
        try {

            res.json('ok');
        } catch (e) {
            next(e);
        }
    }
}