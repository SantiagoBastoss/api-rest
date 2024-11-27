import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Enterprise {

    @PrimaryGeneratedColumn('uuid')
    enterprise_id: number;

    @Column()
    name: string;

    @Column()
    created_at: string;

    @Column()
    update_at: string;
}
