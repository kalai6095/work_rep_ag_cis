FROM  node:10
WORKDIR /app
COPY package.json /app/package.json
RUN npm i -g @angular/cli@7.2.3
RUN npm i
RUN npm audit fix
COPY . /app
EXPOSE 4200
CMD ng serve --host 0.0.0.0
