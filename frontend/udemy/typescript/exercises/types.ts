export default class Moto {
  public nome: string;
  public velocidade: number = 0;

  constructor(nome: string){
    this.nome = nome;
  }

  public buzinar(): void {
    console.log('Toooooooooot!');
  }

  public acelerar(delta: number): void {
    this.velocidade = this.velocidade + delta;
  }
}

const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// Exercício 2 - 

export abstract class Objeto2D {
  public base: number = 0;
  public altura: number = 0;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  abstract area() :number;
}

export class Retangulo extends Objeto2D {
  
  public area(): number {
    return this.altura * this.base;
  }
}
const retangulo = new Retangulo(5, 7);

retangulo.area = function() {
  return this.base * this.altura;
};
console.log(retangulo.area());

// Exercício 3 - Getters & Setters
export class Pessoa {
  
  public _primeiroNome: string = "";

  public get primeiroNome() {
    return this._primeiroNome;
  } 
  
  public set primeiroNome(nome: string) {
    this._primeiroNome = '';
    if(nome.length >= 3) {
      this._primeiroNome = nome;
    }
  }
} 
const estagiario = new Pessoa();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Le";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Leonardo";
console.log(estagiario.primeiroNome);
