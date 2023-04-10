const connection = require('./config/mongoConnection');
const records = require('./data/data.js')


const main = async () => {
    const db = await connection.dbConnection();

    try {
        const result = await records.createSm("25", "Weekdays", "1");
        console.log(result);
    } catch (e) {
        console.log(e);
    }

    // try {
    //     const result = await records.updateSm("64291502a243a2c3fe34d16d", "", "", "0");
    //     console.log(result);
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const result = await records.getAllSm();
    //     console.log(result);
    // } catch (e) {
    //     console.log(e);
    // }

    try {
        const result = await records.createLa("1", "2", "Mon", "Monday", "1");
        console.log(result);
    } catch (e) {
        console.log(e);
    }

    // try {
    //     const result = await records.updateLa("", "1", "2", "Tue", "Tuesday", "1");
    //     console.log(result);
    // } catch (e) {
    //     console.log(e);
    // }

    // try {
    //     const result = await records.getAllLa();
    //     console.log(result);
    // } catch (e) {
    //     console.log(e);
    // }

    connection.closeConnection();
}

main();
