import { configureStore } from '@reduxjs/toolkit'
import  characterSlice from '../characterSlice/CharacterSlice'
export const store = configureStore({
  reducer: {
    character: characterSlice
    
  },
})