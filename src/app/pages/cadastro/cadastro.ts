import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})


export class Cadastro 
{
  submitted = false;

  formCadastro = new FormGroup({
    nome: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    numero: new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(15)]),
    senha: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confiraSenha: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });

  submitForm(): void {
    console.log(this.formCadastro)
    if (this.formCadastro.valid) {
      this.submitted = true;
      this.formCadastro.reset();
    } else {
      this.formCadastro.markAllAsTouched();
    }
  }

  mostrarBotao(formCadastro : Form): boolean {
    return Object.values(formCadastro.getControl)
      .every(valor => String(valor ?? '').trim() !== '');
  }
}
