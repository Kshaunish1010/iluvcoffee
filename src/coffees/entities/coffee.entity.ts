import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //sql table === 'coffee';
export class Coffee {
  @PrimaryGeneratedColumn()//auto generate unique incremented nos.
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @Column('json', { nullable: true }) //not nullable column and its type is json.
  flavors: string[];
  // @JoinTable() //not nullable column and its type is json.
  // @ManyToMany(type => Flavor, (flavor) => flavor.coffee)
  // flavors: string[];
}
