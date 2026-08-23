/* SegunSamuel Ecosystem Relationship Layer v3.10 */
window.SegunSamuelEcosystem = (() => {
  const cache = new Map();
  async function load(url='/Thesegunsamuel/data/knowledge-graph.json') {
    if (cache.has(url)) return cache.get(url);
    const p = fetch(url, {cache:'no-store'}).then(r => {
      if (!r.ok) throw new Error('Knowledge Graph data unavailable');
      return r.json();
    });
    cache.set(url, p);
    return p;
  }
  function relationships(graph, id) {
    return (graph.relationships || []).filter(r => r.source === id || r.target === id);
  }
  function entity(graph, id) {
    return (graph.entities || []).find(e => e.id === id) || null;
  }
  function relatedEntities(graph, id) {
    const ids = new Set();
    relationships(graph, id).forEach(r => {
      if (r.source === id) ids.add(r.target);
      if (r.target === id) ids.add(r.source);
    });
    return [...ids].map(x => entity(graph, x)).filter(Boolean);
  }
  function byType(graph, id) {
    const result = {};
    relatedEntities(graph, id).forEach(e => {
      (result[e.type] ||= []).push(e);
    });
    return result;
  }
  return {load, relationships, entity, relatedEntities, byType};
})();
