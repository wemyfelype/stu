FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
ADD target/stu_usuario-0.0.1-SNAPSHOT.jar usuario.jar 
ENV HOST=104.198.227.13
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Dmaven.test.skip=true","-jar","usuario.jar"]