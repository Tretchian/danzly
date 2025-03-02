import { UserRole } from 'src/user/entities/user_role.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(()=>UserRole,(userRole)=> userRole.roleId)
  userRoles: UserRole[];
}
