
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from '../service/carrinho.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public carrinhoService: CarrinhoService) {}
}

