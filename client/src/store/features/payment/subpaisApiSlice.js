import { apiSlice } from "../../baseApiSlice";

export const SubPaisaApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        tagType: ['subapisa-payment'],

        //Get encData and clientCode from subpaisa payment Integration
        getSubPaisaEncKey: builder.mutation({
            query:(data)=>({
                url:`/subpaisa/pay`,
                method: 'POST',
                body:data
            }),
            invalidatesTags: ['product'],
        }),

        paymentHandler: builder.mutation({
            query:(data)=>({
                url:`/ccavenue/payment-handler?encResp=${data.payLoad.encResp}&orderNo=${data.payLoad.orderNo}`,
                method: 'POST',
            }),
        }),
        

    })
});
export const {
    useGetSubPaisaEncKeyMutation,
    usePaymentHandlerMutation,
} = SubPaisaApiSlice