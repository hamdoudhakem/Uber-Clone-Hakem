import { configureStore } from '@reduxjs/toolkit'
import navReducer from './slices/navSlice'

export const store = configureStore({
  reducer: {
    nav: navReducer
  },
})

// Infer the `RootStateType` and `AppDispatchType` types from the store itself
export type RootStateType = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatchType = typeof store.dispatch