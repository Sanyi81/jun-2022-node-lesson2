    const normalize = (user) => {
    // user = user.toJSON(); - it's use with 1-th variant


        // - 1-th variant, not very good -
        // const arr = [
        //     'password',
        //     '__v',
        //     '_id'
        // ];
        //
        // arr.forEach(field => {
        //     delete user[field];
        // })

        // - 2d variant, better than the 1-th, more correct -



        return {
            name: user.name,
            email: user.email,
            age: user.age,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
    };

    const normalizeMany = (users) => {
        return users.map(user => normalize(user));
    };

    module.exports = {
        normalize,
        normalizeMany
    };
