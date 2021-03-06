import { Analysis } from './../analysis';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  formAnalysis: FormGroup = this.fb.group({
    silt: ['', [Validators.required]],
    datapubli: ['', [Validators.required]],
    databusca: ['', [Validators.required]],
    orgao: ['', [Validators.required]],
    uf: ['', [Validators.required]],
    numerolicit: ['', [Validators.required]],
    syslic: [''],
    uasg: ['', [Validators.required]],
    datahora: ['', [Validators.required]],
    objeto: this.fb.group({
      tipo: ['', [Validators.required]],
      descricao: ['']
    }),
    servicos: [''],
    cctcat: [''],
    valetransp: [''],
    iss: [''],
    combustivel: [''],
    veiculo: this.fb.array(['']),
    servico: this.fb.group({
      atividade: [''],
      qtd: ['']
    }),
    vistoria: ['', [Validators.required]],
    valoredital: ['', Validators.required],
    valororcado: [''],
    lance: [''],
    observacoes: ['']
  });

  veiculo = this.formAnalysis.get('veiculo') as FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formAnalysis.value);
  }

  addVeiculo() {
    this.veiculo.push(
      this.fb.group({
        item: [''],
        especificacao: [''],
        qtd: [''],
        valoruni: ['']
      })
    );
  }

}
