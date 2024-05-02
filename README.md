# Minimal example of problem

Based on [Vanilla-starter](https://github.com/enonic/starter-vanilla)

Example of problem with the GCP library for Discovery Engine, and Vertex Search. This example should yield some sort of authentication error, but instead I only ever get `java.lang.NoClassDefFoundError: com/google/cloud/discoveryengine/v1/SearchServiceSettings` - I am probably making some mistake in building this or importing the relevant Java libraries but I fail to find it.

Access on [http://localhost:8080/_/service/vertex/vertexSearch]() after running the code in any XP sandbox.

I have used this example to create the service in this project: [https://cloud.google.com/generative-ai-app-builder/docs/libraries#use]()