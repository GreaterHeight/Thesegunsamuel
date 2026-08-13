/* SegunSamuel Knowledge Graph data helper v1.0
   Reads the canonical graph data layer. It intentionally does not invent relationships.
*/
window.SegunKnowledgeGraph = (() => {
  let cache = null;
  async function load() {
    if (cache) return cache;
    const r = await fetch("/Thesegunsamuel/data/knowledge-graph.json", {cache:"no-store"});
    if (!r.ok) throw new Error("Knowledge Graph data unavailable");
    cache = await r.json();
    return cache;
  }
  function entity(data, id) {
    return (data.entities || []).find(x => x.id === id) || null;
  }
  function related(data, id, type) {
    return (data.relationships || [])
      .filter(r => r.source_id === id && (!type || r.type === type))
      .map(r => ({relationship:r.type, entity:entity(data,r.target_id)}))
      .filter(x => x.entity);
  }
  return {load, entity, related};
})();
