export gameObjectStore = function() {
    let store = [];
    return {
        push(obj) {
            store.push(obj);
        }
        remove(obj) {
            const index = store.findIndex(o => o == obj);
            store.splice(index, 1);
        },
        getAll() {
        	return store;
        }
    }
};