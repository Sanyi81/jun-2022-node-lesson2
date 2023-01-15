const {CronJob} = require("cron");
const dayjs = require("dayjs");
const OldPassword = require('../dataBase/OldPassword')

const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

module.exports = new CronJob(
    '*/20 * * * * *',
    async function () {
        try {
            console.log('Start removing passwords');
            const yearAgo = dayjs().utc().subtract(1, 'year');

            await OldPassword.deleteMany({ createdAt: { $lte: yearAgo } });
            console.log('End removing passwords');

        } catch (e) {
            console.error(e);
        }
    }
);