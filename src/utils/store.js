const cache = new Map();
export default function store(id) {
    if (!cache.has(id)) {
        cache.set(id, new Map);
    }
    return function(name) {
        if (!cache.get(id).has(name)) {
            cache.get(id).set(name, []);
        }
        let store = cache.get(id).get(name);
        return {
            push(...objs) {
                store.push(...objs);
            },
            remove(...objs) {
                for (let obj of objs) {
                    const index = store.findIndex(o => o == obj);
                    (index !== -1) && store.splice(index, 1);
                }
            },
            getAll() {
                return store;
            },
            clear() {
                store.clear();
            }
        }
    }
};
store.remove = function(id) {
    cache.delete(id);
}