import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cadastro } from './pages/cadastro/cadastro';
import { Cardapio } from './pages/cardapio/cardapio';
import { Confirmacao } from './pages/confirmacao/confirmacao';
import { Pagamento } from './pages/pagamento/pagamento';
import { Reserva } from './pages/reserva/reserva';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "cadastro", component: Cadastro},
    {path: "cardapio", component: Cardapio},
    {path: "confirmacao", component: Confirmacao},
    {path: "pagamento", component: Pagamento},
    {path: "reserva", component: Reserva},
    {path: "footer", component: Footer},
    {path: "header", component: Header},
];
