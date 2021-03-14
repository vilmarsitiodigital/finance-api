export default interface IUpdateDebitDTO {
  id: string;
  user_id: number;
  reason: string;
  date: Date;
  value: number;
}
