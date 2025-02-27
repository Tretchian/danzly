import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
       
        @PrimaryGeneratedColumn()
        userId: number
        
        @Column()
        email: string
        
        @ApiProperty({ description: "Note content", nullable: true })
        content: string
}
