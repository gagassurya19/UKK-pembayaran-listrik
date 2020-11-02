'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pembayaran.init({
    id_tagihan: DataTypes.INTEGER,
    tanggal_pembayaran: DataTypes.DATE,
    bulan_bayar: DataTypes.STRING,
    biaya_admin: DataTypes.INTEGER,
    total_bayar: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    bukti: DataTypes.STRING,
    id_admin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pembayaran',
  });
  return pembayaran;
};