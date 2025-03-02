import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { UserRole } from "./user_role.entity";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(()=>UserRole,(user_role)=> user_role.userId)
  userRoles: UserRole[];
}
