import { StatusCodes } from "http-status-codes";
import { _TEST_APP } from "../../jest.setup";

describe("Update - Products", () => {
    it("Update product register", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Manga",
            quantity: 6,
            expirationDate: "09/09/2025"
        });

        expect(result.statusCode).toEqual(StatusCodes.CREATED);
        
        const result2 = await _TEST_APP.put("/products").send({
            name: "Maçã",
            quantity: 4,
            expirationDate: "02/01/2026"
        });

        expect(result2.statusCode).toEqual(StatusCodes.NO_CONTENT)
    });

    it("Update product register by ID with invalid ID", async () => {
        const result = await _TEST_APP.put("/products/99999").send();

        expect(result.statusCode).toEqual(StatusCodes.NOT_FOUND);
        expect(result.body).toHaveProperty('errors.default');
    });

    it("Update product register with shorter name", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Suco",
            quantity: 2,
            expirationDate: "21/10/2027"
        });

        expect(result.statusCode).toEqual(StatusCodes.CREATED);
        expect(result.body).toHaveProperty("id");

        const result2 = await _TEST_APP.put(`/products/${result.body.id}`).send({
            name: "S",
            quantity: 2,
            expirationDate: "21/10/2027"
        });

        expect(result2.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result2.body).toHaveProperty("errors.body.name");
    });

    it("Update product register with quantity equal 0", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Batata",
            quantity: 15,
            expirationDate: "10/10/2025"
        });

        expect(result.statusCode).toEqual(StatusCodes.CREATED);
        expect(result.body).toHaveProperty("id");

        const result2 = await _TEST_APP.put(`/products/${result.body.id}`).send({
            name: "Farinha de Trigo",
            quantity: 0,
            expirationDate: "10/03/2026"
        });

        expect(result2.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toHaveProperty("errors.body.quantity");
    });

    it("Update product register with invalid date", async () => {
        const result = await _TEST_APP.post("/products").send({
            name: "Pacote de Milho de Pipoca",
            quantity: 23,
            expirationDate: "19/08/2029"
        });

        expect(result.statusCode).toEqual(StatusCodes.CREATED);

        const result2 = await _TEST_APP.put(`/products/${result.body.id}`).send({
            name: "Pacode de Tempero com Alho",
            quantity: 2,
            expirationDate: "00/00/00"
        });
        
        expect(result2.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result2.body).toHaveProperty('errors.body.expirationDate');
    });
});