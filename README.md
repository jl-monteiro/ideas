# Local Dev

1. To install dependencies:
```sh
cd ideas-backend
npm install

cd ../ideas-frontend
npm install
```

2. Copie o arquivo `.env.example` para seu proprio `.env`
e coloque suas variaveis

3. Para criar o banco de dados
```sh
npm run db:up
npm run db:migrate
```

4. To run:
```sh
npm run dev
```

open http://localhost:3000
