import { configureStore, createSlice } from '@reduxjs/toolkit';

const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'food',
        description: 'Product description goes here.',
        imageUrl: 'https://media.istockphoto.com/id/1487056873/photo/biryani.jpg?s=1024x1024&w=is&k=20&c=VFno5KBd0CRfCWocP2r8-cB_-Jxtr1RVkgUIvLrzKI4=',
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
        imageUrl: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 5,
        name: "food",
        description: 'Product description goes here.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1z0d_Jke01v4ErGgNeyx8ROBp-v0TW3ZxBg&usqp=CAU',
      },
      {
        id: 6,
        name: "food",
        description: 'Product description goes here.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZ4hC2PHiOKXHuBRN7LSEP_LJ2l08vUBx8g&usqp=CAU',
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