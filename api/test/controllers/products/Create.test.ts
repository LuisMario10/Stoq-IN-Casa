import { StatusCodes } from "http-status-codes";
import { _TEST_APP } from "../../jest.setup";

describe("Create - Products", () => {
    it("Create product register", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Arroz",
            quantity: 12,
            expirationDate: "21/10/2025"
        });

        expect(result.statusCode).toEqual(StatusCodes.CREATED);
        expect(result.body).toHaveProperty('id');
        expect(typeof result.body).toEqual('number');
    });

    it("Create product register with shorter name", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Ar",
            quantity: 12,
            expirationDate: "21/10/2025"
        });

        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toHaveProperty('errors.body.name');
    });

    it("Create product register with quantity equal 0", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Frango",
            quantity: 0,
            expirationDate: "10/10/2025"
        });

        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toHaveProperty('errors.body.quantity');
    });

    it("Create product register with invalid date", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Feijão",
            quantity: 11,
            expirationDate: "00/00/00"
        });

        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toHaveProperty('errors.body.date');
    });
});