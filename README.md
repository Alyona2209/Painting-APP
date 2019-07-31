# Painting-APP
SPA, a kind of painter for children

The project based on Canvas technology, is written on Type Script with OOP-rules. 
I arranged an internal router in 2 variants: using Hashchange event (hash-links branch) or HTML5 History API (master) (in this case it needs http-server-spa from npm).
I also use Webpack, Sass, Indexed DB technologies.

Node.js version 10.16.0 is recommended. Also you need to install http-server-spa.

To start SPA run:

npm i

npm build

npm install http-server-spa -g

http-server-spa dist index.html 9090