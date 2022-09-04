import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Entity,
  OneToMany,
} from "typeorm";
import PaymentInfo from "./paymentinfo.entity";
import Palylist from "./playlist.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ unique: true, length: 60 })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => PaymentInfo)
  @JoinColumn()
  paymentInfo: PaymentInfo;

  @OneToMany(() => Palylist, (playlist) => playlist.user)
  playlist: Palylist[];
}

export default User;
