import { z } from "zod";

export const paramsValidator = z.object({
    id: z.number().optional(),
})

export const bodyProductValidator = z.object({
    name: z.string(),
    quantity: z.number(),
    expirationDate: z.string()
})