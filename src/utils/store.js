let store = {};
export Store = function(name) {
    if (!store[name]) {
        store[name] = [];
    }
    return {
        push(obj) {
            store[name].push(obj);
        }
        remove(obj) {
            const index = store[name].findIndex(o => o == obj);
            (index !== -1) && store[name].splice(index, 1);
        },
        getAll() {
            return store[name];
        }
    }
};