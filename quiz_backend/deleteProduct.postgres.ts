import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class deleteProduct extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;
  deletedAt: Date | undefined;
}
