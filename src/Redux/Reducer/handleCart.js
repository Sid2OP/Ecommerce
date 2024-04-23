const cart = [];
const handleCart = (state=cart ,action)=>{

    const product= action.payload;
    switch (action.type){

        case "ADD_ITEM" :
        
        const exist=state.find((a)=>a.id === product.id);

        if(exist){
            return state.map((a)=>a.id===product.id ? {...a , qty:a.qty+1}:a );
        }
        else{
            const product=action.payload;
            return [
                ...state,{...product,qty:1,}
            ] 
        }
        break;

        case "DELETE_ITEM" :

        const exist1=state.find((a)=>a.id===product.id);
        if(exist1.qty===1){
            return state.filter((a)=>a.id!==exist1.id)

        }
        else{
            return state.map((x)=>
                x.id==product.id ? {...x,qty:x.qty-1}:x
            );
            
        }
            break;

            default : return state;

            break;

        
        
    }
    
}
export default handleCart;