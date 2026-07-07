import { Component } from '@angular/core';
import { Form, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})


export class Cadastro 
{
  mostrarBotao(formCadastro : Form): boolean {
    return Object.values(formCadastro.getControl)
      .every(valor => String(valor ?? '').trim() !== '');
  }
}
