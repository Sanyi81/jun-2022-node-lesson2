const { Schema, model } = require('mongoose');
const oauthService = require("../service/oauth.service");

const userSchema = new Schema({
    name: {type: String, required: true, default: ''},
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    password: { type: String },
    avatar: String,         // якщо у нас тільки одф опція. Якщо більше, ставимо душки і т.д.
    phone: { type: String, required: true },
    age: {type: Number, default: 18}
}, {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

userSchema.virtual('fullName').get(function () {
    return `${this.name} Skyhar`
});

userSchema.statics = {          // for schema // this = MODEL
    testStatic() {
        console.log('I AM STATIC');
    },

    async createWithHashPassword(userObject = {}) {
        const hashPassword = await oauthService.hashPassword(userObject.password);

        return this.create({ ...userObject, password: hashPassword });
    }
}

userSchema.methods = {          // for single record   // this = RECORDS
    testMethod() {
        console.log('I AM METHOD');
    },

    async comparePasswords(password) {
        await oauthService.comparePasswords(this.password, password);
    }
}

module.exports = model('User', userSchema);
