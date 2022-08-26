import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("payment_infos")
class PaymentInfo {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 16 })
  number: string;

  @Column({ type: "date" })
  dueData: Date;

  @Column({ length: 3 })
  code: string;
}

export default PaymentInfo;
