# Sobre
sm-orcl é uma alternativa simples de obter logs de forma dinamica.

# Dependências
* É necessário ter o pacote **node-datetime**.

#Instalação
* Execute o comando **npm i sm-loggerx** para obter o pacote.

# Usando
Todos os logs serão gerados na pasta **logs/** caso não houver a pasta ele irá criar automaticamente.
* Em seu arquivo que queira extrir logs use o exemplo abaixo.

```javascript
  const loggerx = require('sm-loggerx')
  ...
  if(alguma_coisa = alguma_coisa){
    execute_algo().then(data => {
      loggerx.info(data)
      ...
    }).catch(err => {
      loggerx.err(err)
      ...
    })
  } else {
    loggerx.warning('Não aconteceu como experado.')
  }
  ...
```