import { configureStore, createSlice } from '@reduxjs/toolkit';

const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'food',
        description: 'Product description goes here.',
        imageUrl: 'https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 2,
        name: "food",
        description: 'Product description goes here.',
        imageUrl: 'https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 3,
        name: "food",
        description: 'Product description goes here.',
        imageUrl: 'https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 4,
        name: "food",
        description: 'Product description goes here.',
        imageUrl: 'https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 5,
        name: "food",
        description: 'Product description goes here.',
        imageUrl: 'https://www.freepik.com/free-photo/close-up-volunteer-food-box_20551547.htm#query=food%20donation&position=1&from_view=keyword&track=ais',
      },
      {
        id: 6,
        name: "food",
        description: 'Product description goes here.',
        imageUrl: 'https://www.freepik.com/free-photo/close-up-volunteer-food-box_20551547.htm#query=food%20donation&position=1&from_view=keyword&track=ais',
      },
    ],
  },
  reducers: {},
});
const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsSlice.reducer,
  },
});

export default store;