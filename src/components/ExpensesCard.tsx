import { type ReactNode } from "react";

type ExpensesCardProps = {
  children?: ReactNode;
};

const ExpensesCard = ({ children }: ExpensesCardProps) => {
  return <div className="w-1/3 bg-white p-5 rounded-lg m-3 shadow-sm">{children}</div>;
};

export default ExpensesCard;
