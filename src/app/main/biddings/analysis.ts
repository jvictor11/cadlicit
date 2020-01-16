export interface Analysis {

  silt: number;
  datapubli: Date;
  databusca: Date;
  orgao: string;
  uf: string;
  numerolicit: string;
  syslic: number;
  uasg: number;
  datahora: Date;
  objeto: {
    tipo: string,
    descricao: string
  };
  servicos: string;
  cctcat: string;
  valetransp: number;
  iss: number;
  combustivel: number;
  veiculo?: {
    item: string,
    especificacao: string,
    qtd: number,
    valoruni: number
  };
  servico?: {
    atividade: string,
    qtd: number
  };
  vistoria: boolean;
  valoredital: number;
  valororcado: number;
  lance: number;
  observacoes: string;
  status: string;
  _id?: string;

}
