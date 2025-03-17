import { group } from "console";
import { Group } from "src/group/entities/group.entity";
import { Role } from "src/role/entities/role.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    type:"varchar",
    length:60})
  username: string;

  @ManyToOne(()=> Role,(role)=>role.id)
  role: Role;

  @OneToMany(()=> Group,(group)=>group.owner,{cascade:true})
  groups: Group[]

  @Column({
    type:"varchar",
    length:63})
  name: string;

  @Column({
    type:"varchar",
    length:63})
  surname: string;

  //TODO avatar image field for user

  @Column({
    type:"varchar",
    length:30})
  city: string;

  @Column({
    type:"varchar",
    length:60})
  telegram: string;

  @Column({
    type:"varchar",
    length:63})
  phone: string;

  //TODO add data validation for email
  
  @Column()
  email: string;

  @Column()
  password: string;
}
