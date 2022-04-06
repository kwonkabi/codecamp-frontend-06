import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class createProduct extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;
}
