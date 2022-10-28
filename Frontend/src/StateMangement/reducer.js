import  admin from '../Data/adminData'
export const initialState = {
  basket: admin,
};
function adminData(state,action){
  switch (action.type) {
    case "Remove":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product id ${action.id} as it is not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      case 'DECREMENT':return state;
      default:
          return state=admin;
  }
}

export default adminData