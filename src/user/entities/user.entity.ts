import { ApiProperty } from "@nestjs/swagger";
import { Entity } from "typeorm";
@Entity()
export class User {
       
        @ApiProperty({ description: "User identifier", nullable: false })
        userId: number;
        
        @ApiProperty({ description: "User email", nullable: true })
        email: string;
        
        @ApiProperty({ description: "Note content", nullable: true })
        content: string;
}
