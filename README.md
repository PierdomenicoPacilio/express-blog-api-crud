# 📝 Express Blog API CRUD

Un'applicazione backend sviluppata con Node.js ed Express che fornisce un'API RESTful per la gestione di un blog, consentendo operazioni CRUD (Create, Read, Update, Delete) sui post.

## ✨ Caratteristiche

- 🆕 **Creazione di Post**: Consente l'aggiunta di nuovi articoli al blog.
- 📖 **Lettura di Post**: Recupera e visualizza gli articoli esistenti.
- ✏️ **Aggiornamento di Post**: Modifica i contenuti degli articoli esistenti.
- 🗑️ **Eliminazione di Post**: Rimuove gli articoli non più necessari.
- 🔒 **Gestione Middleware**: Utilizza middleware personalizzati per la gestione delle richieste e delle risposte.

## 🛠️ Tecnologie Utilizzate

- 🟢 **Node.js**: Ambiente di runtime JavaScript per l'esecuzione del codice server-side.
- 🚀 **Express**: Framework web per Node.js che semplifica la creazione di applicazioni web e API.
- 🗄️ **File System**: Utilizzo del modulo `fs` di Node.js per la gestione dei dati dei post in file JSON.

## 📂 Struttura del Progetto

- **`controllers/`**: Contiene i controller che gestiscono la logica delle operazioni sui post.
- **`data/`**: Include i file JSON utilizzati come database per memorizzare i dati dei post.
- **`middlewares/`**: Comprende middleware personalizzati per la gestione delle richieste.
- **`public/`**: Cartella destinata a contenere file statici come immagini o altri asset pubblici.
- **`routers/`**: Definisce le rotte dell'applicazione e collega le richieste HTTP ai controller appropriati.
- **`app.js`**: File principale che configura l'applicazione Express e avvia il server.