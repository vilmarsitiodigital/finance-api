import { Entity, ObjectID, Column, ObjectIdColumn } from 'typeorm';

@Entity('debits')
class Debit {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  user_id: number;

  @Column()
  reason: string;

  @Column()
  value: number;

  @Column()
  date: Date;
}

export default Debit;
