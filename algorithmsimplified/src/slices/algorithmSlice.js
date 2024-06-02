import { createSlice } from "@reduxjs/toolkit";

const algorithmSlice=createSlice({
    name:"Algorithm",
    initialState:{
        loading:false
    },
    reducers:{
        //generate all posts
        algorithmsRequest(state,action)
        {
            return{
                loading:true
            }
        },
        algorithmsSuccess(state,action)
        {
            return {
                loading:false,
                algorithm:action.payload.algorithm
            }
        },
        algorithmsFailed(state,action)
        {
            return{
                loading:false,
                error:action.payload
            }
        },
        addAlgorithmRequest(state,action)
            {
                return{
                    ...state,
                    loading:true,
                    isAdded:false
                }
            },
            addAlgorithmSuccess(state,action)
            {
                return{
                    loading:false,
                    algorithm: action.payload.algorithm,
                    isAdded:true
                }
            },
            addAlgorithmFail(state,action)
            {
                return{
                    ...state,
                    loading:false,
                    error: action.payload
                }
            },
            //update algorithm slices
            updateAlgorithmRequest(state,action)
            {
                return{
                    ...state,
                    loading:true,
                    isUpdated:false
                }
            },
            updateAlgorithmSuccess(state,action)
            {
                return{
                    ...state,
                    updatedAlgorithm:action.payload.verifyAlgorithmExist,
                    isUpdated:true
                }
            },
            updateAlgorithmFailed(state,action)
            {
                return{
                    ...state,
                    loading:false,
                    error:action.payload

                }
            },
            algorithmRequest(state,action)
            {
                return{
                    loading:true
                }
            },
            algorithmSuccess(state,action)
            {
                return {
                    loading:false,
                    algorithm:action.payload.algorithm
                }
            },
            algorithmFailed(state,action)
            {
                return{
                    loading:false,
                    error:action.payload
                }
            },


            useralgorithmsRequest(state,action)
            {
                return{
                    loading:true
                }
            },
            useralgorithmsSuccess(state,action)
            {
                return {
                    loading:false,
                    algorithm:action.payload.specificusersPosts
                }
            },
            useralgorithmsFailed(state,action)
            {
                return{
                    loading:false,
                    error:action.payload
                }
            },
            deletealgorithmrequest(state,action)
            {
                return{
                    loading:true,

                }
            },
            deletealgorithmsuccess(state,action)
            {
                return{
                    ...state,
                    loading:false,
                    message:action.payload.message,
                    isDeleted:true
                }
            },
            deletealgorithmfailed(state,action)
            {
                return{
                    ...state,
                    laoding:false,
                    error:action.payload
                }
            }
    }
});

const {actions,reducer}=algorithmSlice;

export const {algorithmsSuccess,
              algorithmsFailed,
              algorithmsRequest,
              addAlgorithmFail,
              addAlgorithmRequest,
              addAlgorithmSuccess,
              algorithmFailed,
              algorithmRequest,
              algorithmSuccess,
              useralgorithmsFailed,
              useralgorithmsRequest,
              useralgorithmsSuccess,
              updateAlgorithmFailed,
              updateAlgorithmRequest,
              updateAlgorithmSuccess,
              deletealgorithmfailed,
              deletealgorithmrequest,
              deletealgorithmsuccess}=actions
export default reducer;
