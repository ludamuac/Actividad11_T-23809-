import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  variable = 'hola';

  letrasNueva(elemento: HTMLInputElement){
   console.log(elemento.value);
   if(elemento.value === ''){
    alert("Ingresa un valor")
  }
  else{
    this.variable = elemento.value;
  }
  }
}
