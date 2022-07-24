import { configureStore } from '@reduxjs/toolkit'
import { exampleReducer } from './reducers'

export default configureStore({
  reducer: {exampleReducer},
  devTools: process.env.REACT_APP_DEV_TOOLS === 'true'
})
