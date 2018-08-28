import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        this.loginAnimation();    
    }

  
    loginAnimation() {
    let d = document,
    loginClass = d.getElementsByClassName('login'),
    login = loginClass[0],
    yA = d.getElementById('YourAction'),
    k = 0;

    yA.addEventListener('mouseover', () => {login.setAttribute('style', 'opacity: 1;');});
    yA.addEventListener('mouseout', () => {login.setAttribute('style', 'opacity: 0;');});

    yA.onclick = () => {
        if(k===0) {
            login.setAttribute("style", "opacity :1");
            yA.addEventListener('mouseover', () => {login.setAttribute('style', 'opacity:1;');});
            yA.addEventListener('mouseout', () => {login.setAttribute('style', 'opacity:1;');});
            k=1;
            return k;
    }   else {
            login.setAttribute('style', 'opacity:0');
            yA.addEventListener('mouseover', () => {login.setAttribute('style', 'opacity:1;')});
            yA.addEventListener('mouseout', () => {login.setAttribute('style', 'opacity:0;')});
            k=0;
            return k;

    }
}
    
  }
}