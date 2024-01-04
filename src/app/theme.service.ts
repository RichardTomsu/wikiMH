import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ThemeService{
    private darkMode: boolean = false;

    setDarkMode(isDarkMode: boolean){
        this.darkMode = isDarkMode;
        document.body.classList.toggle('dark-theme', this.darkMode);
    }
    isDarkMode(){
        return this.darkMode;
    }
}