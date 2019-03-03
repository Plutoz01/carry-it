FROM openjdk:11-jre
VOLUME /tmp

ARG JAR_FILE="build/libs/order-ms-0.0.1-SNAPSHOT.jar"
ADD ${JAR_FILE} app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","/app.jar"]
