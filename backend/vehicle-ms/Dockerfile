FROM openjdk:latest
VOLUME /tmp

ARG JAR_FILE="build/libs/vehicle-ms-0.0.1-SNAPSHOT.jar"
ADD ${JAR_FILE} app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","/app.jar"]
