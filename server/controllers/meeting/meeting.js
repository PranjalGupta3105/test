const MeetingHistory = require('../../model/schema/meeting')
const mongoose = require('mongoose');

const add = async (req, res) => {
   
}

const index = async (req, res) => {
    try {
      const query = { ...req.query, deleted: false };

      let meetings = await MeetingHistory.find(query)
      res.status(200).json({ meetings });
    } catch (error) {
      res.status(500).json({ error });
    }
}

const view = async (req, res) => {
    
}

const deleteData = async (req, res) => {
  
}

const deleteMany = async (req, res) => {
    
}

module.exports = { add, index, view, deleteData, deleteMany }