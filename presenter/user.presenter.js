    const normalize = (user) => {
    user = user.toJSON();

        const arr = [
            'password',
            '__v',
            '_id'
        ];

        arr.forEach(field => {
            delete user[field];
        })

        return user;
    };

    const normalizeMany = (users) => {
        return users.map(user => normalize(user));
    };

    module.exports = {
        normalize,
        normalizeMany
    };
