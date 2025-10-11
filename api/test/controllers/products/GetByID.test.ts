import { StatusCodes } from "http-status-codes";
import { _TEST_APP } from "../../jest.setup";

describe("Get by ID - Products", () => {
    it("Get product register by ID", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Manteiga",
            quantity: 5,
            expirationDate: "05/01/2026"
        });

        expect(result.statusCode).toEqual(StatusCodes.CREATED);
        
        const result2 = await _TEST_APP.put(`/products/${result.body.id}`).send();

        expect(result2.statusCode).toEqual(StatusCodes.OK);
        expect(result2.body).toHaveProperty("name");
        expect(result2.body).toHaveProperty("quantity");
        expect(result2.body).toHaveProperty("priceAverangeInCents");
        expect(result2.body).toHaveProperty("expirationDate");
    });


    it("Get product register by ID with invalid ID", async () => {
        const result = await _TEST_APP.put("/products/99999").send();

        expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
        expect(result.body).toHaveProperty('errors.default');
    });

});