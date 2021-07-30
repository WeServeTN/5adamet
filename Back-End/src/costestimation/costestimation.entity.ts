
import { SpResponse } from 'src/spresponse/spresponse.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../auth/user.entity'
import { CostEstimationStatus } from './costestimation.enum';
@Entity()
export class CostEstimation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  service: string;

  @Column()
  status: CostEstimationStatus; 

  @ManyToOne(() => User, (user) => user.costEstimations, { eager: true }) 
  user: User;

  @OneToMany( () => SpResponse, spResponse => spResponse.costEstimation, { eager: true }) 
spResponse : SpResponse[]

}