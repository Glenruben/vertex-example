const search = __.newBean('no.ssb.example.vertex.Search');

try {
  search.run();
} catch (e) {
  log.error(e);
}

function get() {
  return {
    body: JSON.stringify({ message: 'Hello from vertexSearch service' }),
    contentType: 'application/json',
    status: 200,
  };
}
