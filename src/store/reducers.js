import {createReducer, createAction} from '@reduxjs/toolkit'

const exampleState = {
    exampleField: true
}

export const exampleAction = createAction("ExampleActionName")

export const exampleReducer = createReducer(exampleState, (builder) => {
    builder.addCase(exampleAction, (state, action) => {
        state.exampleField = !!action.payload || false
    })
})

// export default exampleReducer
