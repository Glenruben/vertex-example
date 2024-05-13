# Minimal example of problem

Based on [starter-vanilla](https://github.com/enonic/starter-vanilla)

Java code in [this java file](src/main/java/no/ssb/example/vertex/Search.java)  
Service implementing it in [this javascript service](src/main/resources/services/vertexSearch/vertexSearch.js)

Example of problem with the GCP library for Discovery Engine, and Vertex Search. This example should yield some sort of authentication error, but instead I only ever get `com.google.common.util.concurrent.ExecutionError: java.lang.NoSuchMethodError: 'com.google.common.collect.ImmutableMap com.google.common.collect.ImmutableMap$Builder.buildKeepingLast()'` - I am probably making some mistake in building this or importing the relevant Java libraries but I fail to find it.

Access on http://localhost:8080/_/service/vertex/vertexSearch after running the code in any XP sandbox.

I have used this example to create the service in this project: https://cloud.google.com/generative-ai-app-builder/docs/libraries#use