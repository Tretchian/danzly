import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "src/role/entities/role.entity";
import { User } from "./user.entity";


@Entity('user_role')
export class UserRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    roleId:number;

    @ManyToOne(()=>User,(user)=>user.userRoles)
    @JoinColumn({ name: 'userId' }) 
    user: User;

    @ManyToOne(()=>Role,(role)=>role.userRoles)
    @JoinColumn({ name: 'roleId' }) 
    role: Role;
    
}