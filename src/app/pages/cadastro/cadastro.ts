import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
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
  formCadastro = new FormGroup({
    nome: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    numero: new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(15)]),
    senha: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confiraSenha: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });

  constructor(private router: Router) {}

  submitForm(): void {
  
    if (this.formCadastro.valid) {
      console.log(this.formCadastro);
      this.formCadastro.reset();
      this.router.navigate(['/'])
    } else {
      this.formCadastro.markAllAsTouched();
    }
  }

  mostrarBotao(formCadastro : Form): boolean {
    return Object.values(formCadastro.getControl)
      .every(valor => String(valor ?? '').trim() !== '');
  }
}
