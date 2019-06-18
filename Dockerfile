FROM  node:10
WORKDIR /app
COPY package.json /app/package.json
RUN npm i
RUN npm i -g @angular/cli
COPY . /app
EXPOSE 4200
CMD ng serve --host 0.0.0.0
