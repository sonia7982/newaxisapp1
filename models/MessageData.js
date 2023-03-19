const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    message: String
})

const MessageModal = mongoose.model('MessageModal', MessageSchema);

module.exports = MessageModal;