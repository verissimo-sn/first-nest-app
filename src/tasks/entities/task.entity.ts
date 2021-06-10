import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  description: string;

  @Column({default: false})
  completed: boolean;
  
}