import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Exclude } from "class-transformer";

@Entity("payment_infos")
class PaymentInfo {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 16 })
  @Exclude()
  number: string;

  @Column({ type: "date" })
  @Exclude()
  dueDate: Date;

  @Column({ length: 3 })
  @Exclude()
  code: string;
}

export default PaymentInfo;
