import { ICategoriesRepository, ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";
import { getRepository, Repository } from "typeorm";

import { Category } from "../entities/Category";


// DTO => Data Transfer Object

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  // public static getInstance(): CategoriesRepository {
  //   if(!CategoriesRepository.INSTANCE){
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }
  //   return CategoriesRepository.INSTANCE;
  // }

  async create({
    description,
    name,
  }: ICreateCategoryDTO): Promise<void> /* tipo do retorno */ {
    const category = this.repository.create({
      description,
      name,
    });

    /*
  Object.assign(OBJETO,{
    ATRIBUTO,
    ATRIBUTO2,
    ATRIBUTO3,
  }) */

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
  async findByName(name: string): Promise<Category> {
    // Select * from categories where name = "name" limit 1
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
