import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("owner")
class Owner {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  celular: string;

  @Column()
  isAdmin: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Owner };