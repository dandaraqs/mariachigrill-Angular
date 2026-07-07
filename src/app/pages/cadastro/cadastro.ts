import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from "@angular/forms";

const senhasIguaisValidator: ValidatorFn = (
  form: AbstractControl
): ValidationErrors | null => {

  const senha = form.get('senha')?.value;
  const confiraSenha = form.get('confiraSenha')?.value;

  if (senha === confiraSenha) {
    return null;
  }

  return {
    senhasDiferentes: true
  };
};

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
