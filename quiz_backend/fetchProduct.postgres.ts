import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class fetchProduct extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;
}
