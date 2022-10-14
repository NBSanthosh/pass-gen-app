import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pass-gen-app';
  passlen = 0;
  password = "";
  len = 0;
  pass = '';
  form: FormGroup;
  alphaUpper = false;
  alphaLower = false;
  numb = false;
  splChar = false;
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  constructor() {
    this.form = new FormGroup({
      numeric: new FormControl("", {
        validators: [Validators.required, Validators.pattern(this.numberRegEx)],
        updateOn: "change"
      })
    });
  }
  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }
  alphaUFunc() {
    this.alphaUpper = !this.alphaUpper;
  }
  alphaLFunc() {
    this.alphaLower = !this.alphaLower;
  }
  numbFunc() {
    this.numb = !this.numb;
  }
  splcharFunc() {
    this.splChar = !this.splChar;
  }
  onClick(passlen) {
    this.len = parseInt(passlen);
    var number = "1234567890";
    var alphaU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphaL = "abcdefghijklmnopqrstuvwxyz";
    var splC = "!#$%&()*+-/:;<=>?@[\]^{|}~";
    var passwordType = "";
    var count=0;
    if (this.alphaUpper) {
      passwordType += alphaU;
      count++;
    }
    if (this.alphaLower) {
      passwordType += alphaL;
      count++;
    }
    if (this.numb) {
      passwordType += number;
      count++;
    }
    if (this.splChar) {
      passwordType += splC;
      count++;
    }
    for (var i = 0; i < this.len; i++) {
      this.pass += passwordType.charAt(Math.floor(Math.random() * passwordType.length));
    }
    if (this.pass.length == this.len)
      this.password = this.pass;
    this.pass = "";
    if(count == 0)
    alert("Please Select any Checkbox..");
    //else if(count > 0 || this.len == 0)
    //alert("You have forgot to Enter the Number..");
    //this.form.reset();
  }
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.password="";
  }
}
