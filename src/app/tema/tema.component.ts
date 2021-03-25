import { TemaService } from './../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTema: Tema[]

  constructor(
    private router: Router,
    private TemaService: TemaService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
      }

     this.findAllTemas()
  }

  findAllTemas(){
    this.TemaService.getAlltema().subscribe((resp: Tema[])=> {
      this.listaTema = resp
    })
  }

  cadastrar(){
    this.TemaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })
  }
}
