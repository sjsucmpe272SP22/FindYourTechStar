/* eslint-disable linebreak-style */
/* eslint-disable indent */
const Matches = require('../models/matchModel');

exports.createMatch = (req, res) => {
    const match = req.body;
    // match.matchTimeStamp = new Date();
    Matches.create(match, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
};

exports.getMatchesByUserId = (req, res) => {
    const { userId } = req.params;
    Matches.find({ $or: [{ user1Id: userId }, { user2Id: userId }] }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};