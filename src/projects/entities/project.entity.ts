import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    project_id: number;

    @Column()
    description: string;

    @Column()
    name: string;

    @Column()
    start_date: string;

    @Column()
    end_date: string;

    @Column()
    created_at: string;

    @Column()
    update_at: string;

    @Column()
    state: string;

    @Column('uuid')
    enterprise_id: number;
}
