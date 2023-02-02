import app from "index";
import supertest from "supertest";
import { FruitInput } from "services/fruits-service";

describe("fruit tests", ()=> {
    it("should create a fruit", async()=> {
        const body: FruitInput = {name: "Apple", price: 5 }
        const result = await supertest(app).post("/fruits").send(body);
        const status = result.status

        expect(status).toBe(201);
    });

    it("should get all fruits", async()=> {
        const result = await supertest(app).get("/fruits");
        const status = result.status

        expect(status).toBe(200);
    });

    it("should get an specific fruit", async()=> {
        const result = await supertest(app).get("/fruits/1");
        const status = result.status

        expect(status).toBe(200);
    });
})