import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  key;
  leftNumber;
  rightNumber;
  score = ''; 

  constructor(){
    this.generateNumbers();
  }

  generateNumbers(){
    this.leftNumber = this.generateRandomNumber();
    this.rightNumber = this.generateRandomNumber();
    if (this.leftNumber == this.rightNumber){
      this.rightNumber = this.generateRandomNumber();
    }
  }

  generateRandomNumber(){
    const maxNumber = 50;
    const randomDecimal = Math.random() * maxNumber;
    const randomNumber = Math.round(randomDecimal);
    return randomNumber;
  }

  @HostListener('document:keyup', ['$event']) 
    handleKeyboardEvent(event: KeyboardEvent) { 
      this.key = event.which;
      console.log(this.key);
      if ( this.key == 37 ){
        this.isGreater(this.leftNumber,this.rightNumber);
      }
      else if ( this.key == 39 ) {
        this.isGreater(this.rightNumber,this.leftNumber);
      }
    } 

  isGreater(firstNumber , secondNumber){
    if (firstNumber > secondNumber){
      this.score = this.score + '😄';
    }
    else{
      this.score = this.score + '😥';
    }
    this.generateNumbers();
  }
}

