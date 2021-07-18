const router = require('express').Router();
const {wrapAsync} = require('../../utils/utils');

const {
    insertForm,
    getForms
} = require('../controllers/forms');

router.route('/forms/insertForm')
    .post(wrapAsync(insertForm));

router.route('/forms/getForms')
    .get(wrapAsync(getForms));

module.exports = router;