import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import {Projects} from "../projects/projects.entity";

@Entity()
export class Programs {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 40 })
    name: string;

    @Column({ length: 40 })
    description: string;

    @ManyToMany(type => Projects, projects => projects.programs)
    projects: Projects[];
}
