
const initialState = {
   smurfs: [
        {
          name: "Brainey",
          age: 200,
          height: "5cm",
          id: 0
        },
        {
            name: "paulos",
            age: 100,
            height: "8cm",
            id: 1
          }
      ]
};


export const reducer = (state = initialState, action) => {
    console.log("this is payload", state)
    switch (action.type) {
       default: return state;
            
        

    }
}