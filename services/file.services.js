const fs = require('fs/promises');
const path = require('path');

module.exports = {
    reader: async () => {
        const buffer = await fs.readFile(path.join(__dirname, 'dataBase', 'users.json'));
        return JSON.parse(buffer.toString());
    },

    writer: async (users) => {
        await fs.writeFile(path.join(__dirname, 'dataBase', 'users.json'), JSON.stringify(users));
    }
};

// або
//
// const reader = async () => {
//     const buffer = await fs.readFile(path.join(__dirname, 'dataBase', 'users.json'));
//     return JSON.parse(buffer.toString());
// };
//
// const writer = async (users) => {
//     await fs.writeFile(path.join(__dirname, 'dataBase', 'users.json'), JSON.stringify(users));
// };
//
// module.exports = {
//     reader,
//     writer
// }
