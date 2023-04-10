const {smallRecord, largeRecord} = require('../config/mongoCollection.js')
const { ObjectId } = require("mongodb");

const createSm = async (catId, desc, status) => {
    const collection = await smallRecord();
    const addData = {
        CategoryID: catId,
        Description: desc,
        Active: status
    }
    const insertInfo = await collection.insertOne(addData);
    if(!insertInfo) throw "Internal server error. Try again later..."
    return "Data added successfully"
}

const updateSm = async (id, catId, desc, status) => {
    const collection = await smallRecord();
    let updateData = {};
    if(catId.length != 0) updateData['CategoryID'] = catId
    if(desc.length != 0) updateData['Description'] = desc
    if(status.length != 0) updateData['Active'] = status
    let updateInfo = await collection.updateMany(
        {_id: new ObjectId(id)},
        {$set: updateData}
    )
    if(!updateInfo) throw "Internal server error. Try again later..."
    return "Data update successfully"
}

const getAllSm = async () => {
    const collection = await smallRecord();
    const data = await collection.find({}).toArray();
    return data;
}

const createLa = async (codeId, catId, sdesc, ldesc, status) => {
    const collection = await largeRecord();
    const addData = {
        CodeID: codeId,
        CategoryID: catId,
        ShortDescription: sdesc,
        LongDescription: ldesc,
        Active: status
    }
    const insertInfo = await collection.insertOne(addData);

    if(!insertInfo) throw "Internal server error. Try again later..."
    return "Data added successfully"
}

const updateLa = async (id, codeId, catId, sdesc, ldesc, status) => {
    const collection = await largeRecord();
    const updateData = {};

    if(codeId.length != 0) updateData['CodeID'] = codeId
    if(catId.length != 0) updateData['CategoryID'] = catId
    if(sdesc.length != 0) updateData['ShortDescription'] = sdesc
    if(ldesc.length != 0) updateData['LargeDescription'] = ldesc
    if(status.length != 0) updateData['Active'] = status
    let updateInfo = await collection.updateMany(
        {_id: new ObjectId(id)},
        {$set: updateData}
    )
    if(!updateInfo) throw "Internal server error. Try again later..."
    return "Data update successfully"
}

const getAllLa = async () => {
    const collection = await largeRecord();
    const data = await collection.find({}).toArray();
    return data
}

module.exports = {
    createSm, 
    updateSm,
    getAllSm,
    createLa,
    updateLa,
    getAllLa
};