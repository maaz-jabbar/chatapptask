const INITIAL_STATES = {
  user:null,wishlist:[],cartItems:[],recentSearches:[],firstTime:true
};

export default function (state = INITIAL_STATES, action) {
  switch (action.type) {

    case "EMPTY_CART":
      return {
        ...state,
        cartItems:[]
      };
    case "NOT_FIRST_NOW":
      return {
        ...state,
        firstTime:false
      };
    case "SIGNUP":
      return {
        ...state,
        user:action.payload
      };
    case "ADD_TO_RECENT_SEARCH":
      return {
        ...state,
        recentSearches:[action.payload,...state.recentSearches]
      };
    case "REMOVE_FROM_RECENT_SEARCH":
      const filteredSearches = state.recentSearches.filter((item)=>item !== action.payload)
      return {
        ...state,
        recentSearches:filteredSearches
      };
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        wishlist:[action.payload,...state.wishlist]
      };
    case "REMOVE_FAVOURITE":
      const filteredFavourites = state.wishlist.filter((item)=>item.id !== action.payload.id)
      return {
        ...state,
        wishlist:filteredFavourites
      };
    case "DECREASE_FROM_CART":
      const product1 = action.payload;
      const inCart1 = state.cartItems.filter((item)=>item.id === product1.id)
      const allProducts1 = state.cartItems.filter((item)=>item.id !== product1.id)
      if(inCart1[0].quantity > 1){
        const mainItem1 = inCart1[0]
        mainItem1.quantity = mainItem1.quantity-1
        return {...state,cartItems:[mainItem1,...allProducts1]}
      } 
      return {
        ...state,
        cartItems:allProducts1
      };
    case "ADD_TO_CART":
      const product = action.payload;
      const inCart = state.cartItems.filter((item)=>item.id === product.id)
      if(inCart.length){
        const allProducts = state.cartItems.filter((item)=>item.id !== product.id)
        const mainItem = inCart[0]
        mainItem.quantity = mainItem.quantity+1
        return {...state,cartItems:[mainItem,...allProducts]}
      } 
      product.quantity = 1
      return {
        ...state,
        cartItems:[product,...state.cartItems]
      };
    
    case "LOGOUT":
      return {
        ...INITIAL_STATES
      };
    
    default:
      return state;
  }
}
