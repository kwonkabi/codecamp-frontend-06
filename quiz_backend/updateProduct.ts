import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class updateProduct extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  price!: number;
}
