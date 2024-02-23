import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav; 

  constructor(private router: Router) {}
  

  ngOnInit(): void {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
