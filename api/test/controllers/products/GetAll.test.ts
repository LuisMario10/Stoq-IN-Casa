import { StatusCodes } from "http-status-codes";
import { _TEST_APP } from "../../jest.setup";

describe("Get all - Products", () => {
    it("Get all products registers", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Peixe",
            quantity: 4,
            expirationDate: "13/10/2025"
        });

        expect(result.statusCode).toEqual(StatusCodes.OK);
        expect(result.body).toHaveProperty("id");
        
        const result2 = await _TEST_APP.get("/products").send();

        expect(result2.statusCode).toEqual(StatusCodes.OK);
        expect(Number(result2.header['x-total-count'])).toBeGreaterThan(0);
         expect(result2.body.length).toBeGreaterThan(0)
    });
});