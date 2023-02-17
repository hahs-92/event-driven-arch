import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column({ default: 0 })
  likes: number;
}
