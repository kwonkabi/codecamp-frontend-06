import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FetchProducts {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  price!: number;

  @Column({ type: "text" })
  createdAt!: Date;
}
