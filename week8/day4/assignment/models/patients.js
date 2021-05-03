"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {
    static associate(models) {}
  }
  Patients.init(
    {
      PatientID: DataTypes.INTEGER,
      Name: DataTypes.STRING,
      Email: DataTypes.STRING,
      DoctorID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Patients",
    }
  );
  return Patients;
};
