# Rapid application development

Mulțumim publicului prezent la SpringIT pentru susținere și echipei Qualitance pentru că împreună am reușit 
să realizăm o aplicație funcțională în numai patru ore. Rezultatul este o aplicație "mobile ready", care poate fi
instalată pe telefoanele mobile cu sistem de operare IOS și Android și care deasemenea poate fi hostată online
ca un site [(live DEMO)](http://rapid.qualitance.com). 

# Cum puteți descărca compila și modifica aplicația

##Unelte necesare

 * un editor de text - sublime text, notepad++, atom, vim, etc.
 * git instalat - [instrucțiuni aici](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
 * node.js instalat - [instrucțiuni aici](http://howtonode.org/how-to-install-nodejs)
 * bash - git pentru windows instalează și git bash, sistemele de operare serioase au bash "built in" ☺

##Pregătirea mediului de lucru

Comenzile de mai jos trebuie executate in bash. Ele vor crea un director numit **springit** in directorul 
**$HOME** al utilizatorului curent ( scurtătura pentru **$HOME** este ~ ) în care va fi codul scris împreună
la prezentare.

```
cd ~
git clone https://github.com/qualitance/springit.git
```

Următoarea comandă va trebui executată o singură dată și va instala **grunt** și **ionic** necesare pentru 
compilarea proiectului.

```
npm install -g grunt ionic
```

Deasemenea după o modificare majoră a proiectului cât și la început trebuie rulate următoarele comenzi care vor descărca
librăriile javascript pentru programele utilitare și pentru client.

```
cd ~/springit
npm install
bower install
grunt build
```

##Adăugarea de noi funcționalități

În general editoarele bune oferă posibilitatea de a deshide un întreg director și de a afisa un meniu lateral cu 
toate fișierele prezente în directorul respectiv. Pentru a putea începe lucrul efectiv trebuie deschis directorul 
**~/springit** in editor.

Pentru modificările minore vom folosi funcția de *live reload* oferită de **grunt** cu următoarea comandă

```
cd ~/springit
grunt serve
```

Această comandă va porni un server local, va deschide o pagină cu aplicația și va reîncărca modificările curente 
la fiecare salvare

##Bine de știut

În general dezvoltatorii renunță la mediile de dezvoltare în favoarea shell-ul-lui - fereastra neagra 
cu scris verde sau alb ☺ - deoarece ofera mai mult control asupra taskurilor ce vor fi realizate.
Mai jos este un citat din [acest articol interesant](http://www.leancrew.com/all-this/2011/12/more-shell-less-egg/) despre apariția shell-ului
> What people remember about his review is that McIlroy wrote a six-command shell pipeline that was a complete (and bug-free) replacement for Knuth’s 10+ pages of Pascal.
