#  Aktiviteettilaskuri – Smart Form-projekti

Tämä projekti on toteutettu osana kurssia **Web-sovellusten kehittäminen JavaScriptillä**.  
Sovelluksen tarkoituksena on tarjota käyttäjälle yksinkertainen tapa pitää kirjaa viikon aikana tehdyistä tunneista, kuten treeneistä, opiskelusta tai työstä.  

## Kuvaus

Käyttäjä voi lisätä viikon aikana tehtyjä aktiviteetteja, määritellä niille kategorian (esim. *treeni*, *opiskelu*, *työ*) sekä syöttää käytetyt tunnit ja lyhyen kuvauksen.  
Sovellus laskee automaattisesti yhteen kokonaistunnit sekä näyttää prosenttijakauman eri kategorioiden välillä.

Kaikki syötetty tieto tallennetaan selaimen **LocalStorageen**, joten tiedot säilyvät, vaikka selain suljetaan tai sivu päivitetään.

## Ominaisuudet

- Lisää uusia kirjauksia viikonpäivän ja kategorian mukaan  
- Laskee kokonaistunnit automaattisesti  
- Näyttää tuntien jakautumisen kategorioittain prosentteina  
- Tallentaa tiedot pysyvästi selaimen **localStorageen**  
- Tarkistaa syötteet virheiden varalta (esim. negatiiviset tai tyhjät arvot)  
- Näyttää virheilmoituksen ja korostaa virheelliset kentät  
- Mahdollisuus tyhjentää kaikki tiedot helposti  
- Dynaaminen päivitys ilman sivun latausta  

## Rakenne

Sovellus on rakennettu kolmesta pääkomponentista:

| Tiedosto | Kuvaus |
|-----------|--------|
| `index.html` | Käyttöliittymä ja lomakerakenne |
| `style.css` | Tyylit ja visuaalinen ilme (kevyt muotoilu) |
| `script.js` | Sovelluksen toiminnallisuus, validointi ja LocalStorage-käsittely |

## Käytetyt teknologiat

- **HTML5** – rakenteeseen  
- **CSS3** – ulkoasun määrittelyyn  
- **Vanilla JavaScript (ES6)** – toiminnallisuuteen ja tallennukseen  

## Credits

- GitHub Copilot – Fixes & Recommendations
- ChatGPT - Recommendations
- WebDevSimplified Tutorials