const { data } = require("../models/data");

class Data {
  async getAllData(req, res, next) {
    try {
      const data = await data.findAll({});

      return res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: ["Failed to get all data"] });
    }
  }

  async getDataById(req, res, next) {
    try {
      const data = await data.findOne({
        where: { id: req.params.id },
      });

      return res.status(200).json({ data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: ["Failed to get detail data"] });
    }
  }

  async updateData(req, res, next) {
    try {
      let { name } = req.body;

      //update data
      await data.update({
        name,
      });

      //get data updated
      const dataUpdated = await data.findOne({
        attributes: ["name"],
      });

      return res.status(201).json({ dataUpdated });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: ["Failed to update data"] });
    }
  }

  async deleteData(req, res, next) {
    try {
      const dataId = await data.findOne({
        where: { id: req.params.id },
      });

      const delData = await data.destroy({
        where: { id: req.params.id },
      });

      return res.json({ message: ["Success delete"] });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: ["Failed deleted data"] });
    }
  }
}

module.exports = Data;
