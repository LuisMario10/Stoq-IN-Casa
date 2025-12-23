import { z } from "zod";


export const ProductControllerValidator = {
    params: z.object({
        id: z.number().optional(),
    }),
    
    body: z.object({
        name: z.string(),
        quantity: z.number(),
        expirationDate: z.string()
    }),

    query: z.object({
        limit: z.number(),
        page: z.number()
    })
}