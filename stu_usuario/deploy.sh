#! /bin/bash

echo -e '\n\n'
echo -e '\033[1;32m ========== GERANDO PACKAGE ========== \033[0m' 
echo -e '\n\n'

./mvnw package -DSkipTests=true

echo -e '\n\n'
echo -e '\033[1;32m ========== REMOVENDO wemy/stu_usuario ========== \033[0m' 
echo -e '\n\n'

sudo docker rmi wemy/stu_usuario

echo -e '\n\n'
echo -e '\033[1;32m ========== CRIANDO BUILD wemy/stu_usuario ========== \033[0m' 
echo -e '\n\n'

sudo docker build -t stu_usuario .

echo -e '\n\n'
echo -e '\033[1;32m ========== CRIANDO tag wemy/stu_usuario ========== \033[0m' 
echo -e '\n\n'

sudo docker tag stu_usuario wemy/stu_usuario

echo -e '\n\n'
echo -e '\033[1;32m ========== PUSH PARA DOCKER HUB ========== \033[0m' 
echo -e '\n\n'

sudo docker push wemy/stu_usuario
