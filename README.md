# Inleiding
Deze installatiehandleiding is geschreven voor de Frontend van de eindopdracht voor de NOVI Full Stack Developer leerlijn. De frontend van deze applicatie biedt een platform dat het inzenden en beoordelen van muziekdemo’s stroomlijnt voor zowel artiest als het team van de DJ.

De kernfunctie voor deze applicatie zijn:
-	Het aanmaken van een account en daarmee kunnen inloggen
-	Inzendingen kunnen maken en deze terug kunnen zien op een dashboard
-	Alle inzendingen kunnen zien en hierop feedback kunnen geven
-	Inzendingen kunnen filteren op basis van tags of status


## Lijst van benodigdheden
Om deze applicatie goed te laten werken heb je het volgende nodig:
-	WebStorm v2024.3.4 of hoger
-	Node.js v18 of hoger

### Dependancies
| Dependancy       | Beschijving                                                                                                                                                 |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| React	           | Gebruikt om de applicatie mee te maken                                                                                                                      |
| React-dom        | Laat alle React components daadwerkelijk zien op de website                                                                                                 |
| React-dom-router | Zorgt voor de routing en het navigeren tussen pagina’s                                                                                                      |
| jwt-decode       | Word gebruikt om user info uit jwt-tokens te kunnen halen voor meerdere functies op de app                                                                  | 
| Axios            | 	Word gebruikt om API-aanvragen te kunnen maken                                                                                                             |
| QS               | Word gebruikt om de Status van submissions die binnen komen in de overview naar een String te converten om deze te kunnen matchen met de opties in de filter | 

## Applicatie installeren
### Stap 1
Open WebStorm en open het project via een gedownloaden versie door naar het menu linksboven te gaan en op **‘open’** te klikken. Je moet dan even zoeken naar waar je het project hebt opgeslagen

Je kan het project ook openen via version control door naar hetzelfde menu linksboven te gaan en op **‘New > Project from Version Control’**. In het vak **‘URL’** vul je deze link in:

https://github.com/DanielSeton/Fullstack-EindopdrachtFrontend-DanielSeton

### Stap 2
Als het project is geladen open de Terminal, die zich linksonder in het scherm bevindt, en type:

**‘npm i’**

Wacht tot deze helemaal klaar is.

### Stap 3
Om het project te runnen type je het volgende in de terminal:

**‘npm run dev’**

### Stap 4
Open nu je webbrowser en type in:

https://localhost:5173

Deze link verschijnt ook in je terminal en je kan er op klikken om deze gelijk in je browser te openen.

### Stap 5
De Frontend is nu opgezet. Open de Backend Installatiehandleiding om de Backend voor dit project op te zetten.

### Stap 6
Nadat je de Backend draaiend hebt, moet je je browser even refreshen om alle data goed in te laden.

# Inloggegevens
Om gebruik te kunnen maken van de applicatie worden er inloggegevens gebruikt van bestaande gebruikers. Deze gegevens zijn ook al verwerkt in de Postman collecties die bij dit project zijn inbegrepen.

| Gebruikersnaam | Wachtwoord      | Rol          |
|----------------|-----------------|--------------|
| testuser       | 	password       | 	ROLE_USER   |
| teststaff      | 	staffpassword  | 	ROLE_STAFF  |
| testadmin      | 	adminpassword  | 	ROLE_ADMIN  |

## Rollen en autorisatie

| Rol         | Toelichting                                                                                                                                                                                                                     |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ROLE_USER   | De USER rol kan maar bij een beperkt aantal endpoints. Ze hebben op sommige endpoints (zoals playlists) alleen toegang tot de GET-request. Wel hebben USERS een exclusief PUT en PATCH endpoint om hun submissions aan te passen. |
| ROLE_STAFF  | De STAFF rol heeft meer toegang tot de API dan de USER, maar kan niet bij alle endpoints komen. Zo kunnen STAFF geen users deleten, bijvoorbeeld.                                                                               |
| ROLE_ADMIN  | De ADMIN rol kan alle endpoints met bijbehorende requests bereiken.                                                                                                                                                             |