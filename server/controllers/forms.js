const Forms = require('../models/forms');

const insertForm = async (req, res) => {
    const body = req.body;
    const form = {
        name: body.name,
        email: body.email,
        phone: body.phone,
        others: body.others
    }
    const formId = await Forms.insertForm(form);
    res.status(200).json({data: {formId: formId}});
}

const getForms = async (req, res) => {
    const forms = await Forms.getForms();
    res.status(200).json({data: forms});
}


module.exports = {
    insertForm,
    getForms
};