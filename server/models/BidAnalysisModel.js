const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BidAnalysisSchema = new Schema({

  silt: Number,
  datapubli: Date,
  databusca: Date,
  orgao: String,
  uf: String,
  numerolicit: String,
  syslic: Number,
  uasg: Number,
  datahora: Date,
  objeto: {
    tipo: String,
    descricao: String
  },
  servicos: String,
  cctcat: String,
  valetransp: Number,
  iss: Number,
  combustivel: Number,
  veiculo: {
    item: String,
    especificacao: String,
    qtd: Number,
    valoruni: Number
  },
  servico: {
    atividade: String,
    qtd: Number
  },
  vistoria: Boolean,
  valoredital: Number,
  valororcado: Number,
  lance: Number,
  observacoes: String,
  status: String

});

module.exports = mongoose.model('BidAnalysis', BidAnalysisSchema);
