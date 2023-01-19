import { getRepository, Repository } from "typeorm";

import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";

import { Car } from "../entities/Cars";



class CarsRepository implements ICarsRepository {

  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name
    });  // referencia 

    await this.repository.save(car); // salva

    return car
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({
      license_plate
    }) // busca
    return car;
  }
}
export { CarsRepository }