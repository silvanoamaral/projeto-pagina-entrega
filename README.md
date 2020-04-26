#projeto-pagina-entrega

published on the Toolbox VM’s private IP address.

docker-machine ip will tell you. It is frequently 192.168.99.100

Criar um container
docker run -p 8081:3000 -d 69e9cd46aa0b


Criar um container
docker run -it -p 8081:3000 -h instance-hostname --rm --name projeto-pagina-entrega silvanoamaral/projeto-pagina-entrega:latest



jenkins na aws
http://ec2-3-21-103-36.us-east-2.compute.amazonaws.com:8080/
Building in workspace /var/lib/jenkins/workspace/projeto-pagina-entrega

Rodando o serviço de entrega no endpoint
http://ec2-3-21-103-36.us-east-2.compute.amazonaws.com:8081/

Estou rodando o serviço com o comando
pm2 start app/server/index.js

* O `PM2` é um gerenciador de processos de produção para aplicativos Node.js. com um balanceador de carga interno. Permite manter os aplicativos ativos para sempre, recarregá-los sem tempo de inatividade e facilitar tarefas comuns de administração do sistema

