# wiki-discord.js-selfbot-tool
## piccolo selfbot tool scritto in discord.js con tante funzioni. 
### è il mio primo selfbot quindi non aspettarti chissà cosa :/
**RICHIEDE YOUTUBE API KEY**
> se non sapete procurarvela guardate un tutorial di 2 minuti su youtube grazie, tanto per un selfbot non avrete mai bisogno di 10K+richieste al giorno

## da fare prima di far partire il tool
- magari scaricare node.js se non ce lo avete già
- magari non fare npm install. se lo fate dallo zip originale tirate fuori la cartella node modules e sostituitela a quella già presente
- IMPORTANTE: il token quando lo inserite non deve avere "" all'inizio e alla fine. prima o poi trovo la voglia di toglierle in automatico

## info generali
- prefisso: **w!!**
- lista comandi: **w!!help**
- lista comandi musica: **w!!musichelp**

ipoteticamente non avrete bisogno di toccare nulla. basta avviare il file bat. al primo accesso vi chiederà di inserire la youtube api key e un token per accedere al vostro account
successivamente non sarà più richiesto.
#### se volete cambiare le credenziali:
- w!!swaptoken
- w!!swapkey

## comandi pericolosi
i comandi nella cartella pericolosi rischiano di farvi disattivare l'account, non usateli grazie, a meno che non avete 100 token+ ma a sto punto non usate questo tool ma roba in grado di gestire più account contemporaneamente. è a uso personale e didattico e non deve essere usato per raidare anche perchè dopo 300 ban discord ti disattiva l'account e dopo 10 dm ti chiede di inserire un numero di telefono.

## comandi musica
i comandi della musica richiedono l'amministratore per funzionare al 100% e serve come bot della musica personale in alternativa ai classici bot.
come usare:
entrare in un canale vocale con due account e selezionare il brano da riprodurre. l'acount selfottato verrà disonnesso dalla vocale per lasciare spazio al client del bot. così potrete ascoltare la musica col secondo account connesso alla vocale


prima di far partire il bot sarebbe meglio fare npm install
ho omesso dalle dependecies discord-music-system per evitare che durante npm install andasse a sovrascrivere diverse cose che ho editato.
