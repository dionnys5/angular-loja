import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  usuario: string;
  senha: string;
  erro = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

    entrar() {
        this.authService.authAdmin(this.usuario, this.senha)
            .subscribe(usuarios => {
                if (usuarios.length > 0) {
                    this.erro = null;
                    this.authService.set(usuarios[0]);
                    this.router.navigate(['admin/inicio']);
                } else {
                    this.erro = 'Login ou senha incorretos';
                }
            });
    }
}
