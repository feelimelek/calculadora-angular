import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-angular';
  resultado = 0;
  operando1: string = "";
  operando2: string = "";
  antesOperador = true;
  antesOperando2 = false;
  operador = '';
  display: string = "0";
  operando: string = '';

  limpar () {
    this.resultado = 0;
    this.operando1 = "";
    this.operando2 = "";
    this.antesOperador = true;
    this.antesOperando2 = false;
    this.operador = '';
    this.display = "0";
    this.operando = '';
  }

  setOperando(numero: number) {
    this.operando = numero.toString()
    console.log('Numero: ' + this.operando);
    if(this.antesOperador == true) {
      this.operando1 += this.operando;
      console.log('Operando 1:' + this.operando1);
      this.display = this.operando1;
    } else {
      this.operando2 += this.operando;
      console.log('Operando 2:' + this.operando2);
      this.antesOperando2 = false;
      this.display = this.operando2;
    }
  }
  setOperador(operadorBotao: string) {
    this.operador = operadorBotao;
    if(operadorBotao == "C") {
      this.limpar();
    } else {
      this.display = operadorBotao;
      console.log(operadorBotao);
      this.antesOperador = false;
      this.antesOperando2 = true;
    }
  }

 

  setResultado() {

    if((this.antesOperador == true) && (this.antesOperando2 == false)) {
      return;
    }
    if((this.operando1 == '') || this.operando2 == '') {
      return;
    }

    switch(this.operador) {
      case "+": 
        this.resultado = (+this.operando1) + (+this.operando2);
        break;
      case "-": 
        this.resultado = (+this.operando1) - (+this.operando2);
        break;
      case "*": 
        this.resultado = (+this.operando1) * (+this.operando2);
        break;
      case "/": 
        this.resultado = (+this.operando1) / (+this.operando2);
        break;
      case "C": 
        break;
      default : 
        break;
    }

    console.log(this.resultado);
    this.display = this.resultado.toString();
      
  }

}
