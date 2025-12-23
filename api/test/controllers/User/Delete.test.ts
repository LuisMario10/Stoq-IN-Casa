import { StatusCodes } from "http-status-codes";
import { _TEST_APP } from "../../jest.setup";

describe("Delete - Products", () =>{
    it("Delete product register", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Arroz",
            quantity: 12,
            expirationDate: "21/10/2025"
        });

        expect(result.statusCode).toEqual(StatusCodes.CREATED);
        expect(result.body).toHaveProperty("id");

        const result2 = await _TEST_APP.delete(`/products/${result.body.id}`).send();

        expect(result2.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it("Delete product register with invalid ID", async () => {
        const result2 = await _TEST_APP.delete("/products/99999").send();

        expect(result2.statusCode).toEqual(StatusCodes.NOT_FOUND);
        expect(result2.body).toHaveProperty("errors.default")
    });
});