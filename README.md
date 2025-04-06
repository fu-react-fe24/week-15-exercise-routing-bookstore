# Vecka 15: Book Store del 3 - Veckans Code Review-uppgift

Om ni inte lyckades hela vgen in i mål med förra veckans uppgift, eller om ni vill testa på att kasta er in i en kodbas som inte är er egen så får ni gärna använda er av mitt lösningsförslag på förra veckans uppgift. Ni hittar den i mappen [startkod](./startkod). Denna vecka skall vi ta vår Book Store ytterligare ett steg genom att applicera routing och api-anrop.

## Steg 1

Istället för att läsa in datan från filen *books.json* så gör ni istället ett api-anrop mot url:en nedan:

```
GET https://santosnr6.github.io/Data/books.json
```

Använd en kombination av useEffect och useState för att uppnå bästa resultat.

## Steg 2

Vid klick på en bok så skall man komma till *BookPage.jsx*. Här skall ni visa specifik information om just den boken som användaren klickade på. Lägg även till så att ett klick på loggan i *Header* tar användaren tillbaks till startsidan.

## Steg 3 - Levelup!

Dina respektive räknare för vare bok skall fortsatt bara räkna upp eller ner. Din cart (om ni använder min kod hittar ni den i cartBalance, rad 10 i *App.jsx*) däremot behöver göras om. Nu skall den inte längre bestå av ett nummer för antalet föremål i kundvagnen, utan snarare ett objekt per bok som ligger i kundvagnen. Låt oss säga att jag lägger till mitt första exemplar av "1984" i kundvagnen. Då skapar ni ett cartItem-objekt som ni lägger till i er cart. cartItem kan exempelvis se ut såhär: 

```
  title: "1984",
  id : 4,
  qty: 1
```

Finns boken redan i er cart så ökar ni på *qty* med 1. Siffran som visas i er *cartindikator* behöver ni på något sätt räkna ut i er *Cart*-komponent.

## Steg 4

Skapa även *CartPage.jsx*, samt lägg till den i din routing. Vid klick på din *cartindikator* i headern så skall användaren komma till din nya *CartPage* där hen får en sammanfattning av vilka böcker, samt hur många av varje bok, som ligger i kundvagnen just nu.
