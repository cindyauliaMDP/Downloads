const mongoose = require('mongoose');

const ukuranSchema = new mongoose.Schema({
  lebar: String,
  tinggi: String,
}, { _id: false });

const OrderCetakSchema = new mongoose.Schema({
  noOrder: { type: String, required: [true, 'nomor order wajib diisi'], unique: true, trim: true },
  namaPemesan: { type: String, required: [true, 'nama pemesan wajib diisi'], trim: true },
  jumlahEkseplar: { type: String, required: [true, 'jumlah eksemplar wajib diisi'], min: [1, 'jumlah eksemplar minimal 1'] },
  jenisCetak: { type: String, required: [true, 'jenis cetak wajib diisi'], trim: true },
  ukuran: ukuranSchema,
  mesinId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mesin' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('OrderCetak', OrderCetakSchema);