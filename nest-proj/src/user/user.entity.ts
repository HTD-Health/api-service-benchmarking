import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 40 })
    name: string;

    @Column({ length: 40 })
    surname: string;

    @Column()
    sex: boolean;

    @Column('int')
    age: number;

    @Column({ length: 20 })
    login: string;

    @Column({ length: 30 })
    email: string;
}
