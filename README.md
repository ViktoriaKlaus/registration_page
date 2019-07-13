# registrationpage

1.1 System requriements:
- Node.js 
- Express.js (framework)

1.2 Run system:
1. install node.js
- curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"

2. install node.js packages 

- npm install

3. run server 

- node app.js

