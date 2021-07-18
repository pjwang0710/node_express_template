const { pool } = require('./mysqlcon');

const insertForm = async (form) => {
    const result = await pool.query('INSERT INTO Forms SET ?', form);
    return result.insertId;
}

const getForms = async () => {
    const forms = await pool.query('SELECT * FROM forms', []);
    return forms;
}


module.exports = {
    insertForm,
    getForms
};