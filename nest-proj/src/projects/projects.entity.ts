import {Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany} from 'typeorm';
import {Programs} from "../programs/programs.entity";

@Entity()
export class Projects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 40 })
    name: string;

    @Column({ length: 40 })
    description: string;

    @ManyToMany(type => Programs, programs => programs.projects)
    @JoinTable()
    programs: Programs[];
}
