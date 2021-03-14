export default interface ICreateDebitDTO {
  user_id: number;
  reason: string;
  date: Date;
  value: number;
}
