# my-collection-webserver
Web server to manage my collections of ...


# Procés de desenvolupament:

1. Creem el nou repositori a GitHub amb .gitignore, readme i llicencia
2. Clonem el projecte en local
3. Creem una branca de desenvolupament a partir de la master
```
$ git checkout -b development
```
4. Creem l'esquelet del projecte amb express i baixar les llibreries
```
$ express -e
$ npm install
```
5. Servidor https
    1. Actualitzem el projecte amb servidor https
    ```
    $ npm install --save https
    $ npm install --save fs
    ```
    2. Actualitzem el /bin/www per crear el sevidor https enlloc del http
    3. Creem els certificats ssl a la carpeta /ssl
    ```
    $ openssl genrsa -out key.pem \2048
    $ openssl req -new -key key.pem -out csr.pem -subj "/C=<coutry code>/ST=<state>/L=<city>/O=<organization name>/OU=<organization unit> demo/CN=localhost"
    $ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.crt
    $ cp cert.crt /ssl
    $ cp key.pem /ssl
    ```
    4. Afegim en els tests de frisby la següent línia perquè es pugui testejar tot i els certificats
    ```
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    ```
6. Autenticació bàsica
    1. Actualitzem el projecte amb autenticació bàsica
    ```
    $ npm install --save http-auth
    ```
    2. Creem el fitxer ./config/users.htpassd amb els usuaris i les contrassenyes per l'autenticació
    3. Editem el fitxer el fitxer ./app.js per afegir l'autenticació bàsica
