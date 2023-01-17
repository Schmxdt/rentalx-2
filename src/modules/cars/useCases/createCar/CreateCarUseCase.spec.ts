import { CreateCarUseCase } from "./CreateCarUseCase"
import {CarsRepositoryInMemory}  from "../../repositories/in-memory/CarsRepositoryInMemory"

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("Create Car", () =>{
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it("should be able to create a new car", async ()=>{
    await createCarUseCase.execute({ 
      name: "Name Car",
      description:"Description Car",
      daily_rate: 100,
      license_plate:"ABC-1234",
      fine_amount:60,
      brand:"Brand",
      category_id:"category",
    });
  })
})