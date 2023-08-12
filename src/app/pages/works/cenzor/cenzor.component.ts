import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  public bad : Array<string> =[];
  public words : string = '';
  public error = false;
  public bad_words : string= '';
  public userText :string = '';
 constructor(){}

ngOnInit (): void{

}

add() : void{
 if(this.words.length === 0){
   this.error = true;  
}  
else{
 this.error = false;  
 if(this.bad_words.length === 0){
   this.bad_words += this.words.toLowerCase();
   let w = this.bad.push(this.words.toLowerCase());
 }
 else{
   this.bad_words += ', ' + this.words.toLowerCase();
   let w = this.bad.push(this.words.toLowerCase());
 }
 this.words = ''
} 
}

reset() : void {
 this.bad_words = '';
 this.error = false;
 this.userText = '';
}

cenzor(): void {
if(this.userText.length === 0){
 this.error = true;
}
else{
 this.error = false;
 let text : Array<string> = [];
 text = this.userText.toLowerCase().split(/\s/);
         for(let i = 0; i < text.length; i++){
             for(let k = 0; k < this.bad.length; k++){
                 if(text[i] === this.bad[k]){
                     let letters : Array<string> = text[i].split('');
                     for(let l=0; l<letters.length; l++){
                         let delet = letters.splice(l,1,`*`);
                     }
                     let newLet = letters.join('');
                     let newText = text.splice(i,1, newLet);
                         this.userText = text.join(' ');
                 }
                
             }
         }  
}
}
}
