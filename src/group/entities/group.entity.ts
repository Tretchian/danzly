import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

  @ManyToOne(()=>User,(user)=>user.groups,{onDelete:'CASCADE'})
  owner: User;

  @Column({
    type:"varchar",
    length:63
    })
  name: string;

  @Column({
    type:"varchar",
    length:250
    })
  description: string;

  @Column({
    type:"int",
    nullable:false,
    default:10
    })
  max_people: number;

  @Column({
    type:"int",
    default:0
  })
  current_people: number;

  @Column({
    type:"bool",
    default:true
  })
  is_open: boolean;
}
