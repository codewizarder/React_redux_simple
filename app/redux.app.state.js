const counter = (state = 0, action) => {
    if(typeof state === 'undefined'){
        return 0;
    }
    
    switch(action.type){            
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default: 
            return state;            
    }
};

const {createStore} = Redux;

const store = createStore(counter);

document.addEventListener("click", function(){
    store.dispatch({type: 'INCREMENT'})
});

store.subscribe(function(){
    render();
}); // dispatcher calls subscribe when some action dispatched

const render = () => {
    document.body.innerText = store.getState();
    boradcastToAllComponents();
}

const boradcastToAllComponents = () => {
    console.info('All components updated')
}