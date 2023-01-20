import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });
  it("Should be able to list all available cars", async () => {

    await carsRepositoryInMemory.create({


      "name": "Audi A4",
      "license_plate": "ABC-1212",
      "description": "Carro bonito",
      "brand": "Audi",

      "daily_rate": 140.00,
      "fine_amount": 100,
      "category_id": "123",
    })

    const cars = await listCarsUseCase.execute();
    console.log(cars)

  })
})