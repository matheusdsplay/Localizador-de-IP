## Rastreador de IP

Este é um projeto simples que permite rastrear informações de um endereço de IP, incluindo país, região, cidade, latitude, longitude e exibir essas informações em um mapa interativo. Utiliza a API [ipstack](https://ipstack.com/) para buscar dados de localização baseados no IP fornecido.

⚠️ Para visualizar e editar o projeto corretamente, é recomendado abrir a pasta inteira no Visual Studio Code.
Assim, você consegue ver todos os arquivos organizados e trabalhar de forma mais fácil.

⚠️ Nota: Este projeto utiliza a API do ipstack na versão gratuita, que possui limite de requisições. Para garantir a demonstração, inclui um modo mock que simula a resposta da API após o limite ser atingido.

## Funcionalidades

Busca de IP: Insira um endereço de IP e obtenha informações como o país, região, cidade e coordenadas geográficas (latitude e longitude).
Mapa Interativo: As informações de localização são exibidas em um mapa interativo usando a biblioteca [Leaflet.js](https://leafletjs.com/).

## Tecnologias Utilizadas
HTML5: Estrutura da página.
CSS3: Estilização da interface.
JavaScript: Lógica de requisição à API e manipulação dos dados.
Leaflet.js: Biblioteca para exibição do mapa interativo.
ipstack API: API para rastrear a localização do IP.



