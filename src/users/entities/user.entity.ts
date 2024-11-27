import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    user_id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    profesional_headline: string;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;

    @Column('uuid')
    project_id: number;

    @Column('uuid')
    enterprise_id: number;
}
