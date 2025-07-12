import { useEffect, useState } from "react";
import { ExpensesCard, Modal } from "../components";

type ExpenseTypes = {
  Date: string;
  Category: string;
  Amount: number;
};

const Expenses = () => {
  const [Expenses, setExpenses] = useState<ExpenseTypes[]>([]);
  const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    setExpenses(storedExpenses);
  }, []);

  const handleAddExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newExpense = {
      Date: formData.get("date") as string,
      Category: formData.get("category") as string,
      Amount: parseFloat(formData.get("amount") as string),
    };
    if(!newExpense.Date || !newExpense.Category || isNaN(newExpense.Amount)) {
      return;
    }
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    Expenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(Expenses));
  };

  return (
    <div>
      <div className="flex">
        <ExpensesCard>
          <p className="text-xl mb-4">Total Expensis</p>
          <h2 className="text-2xl font-medium">
            ${Expenses.reduce((sum, expense) => sum + expense.Amount, 0)}
          </h2>
        </ExpensesCard>
        <ExpensesCard>
          <p className="text-xl mb-4">Budget</p>
          <h2 className="text-2xl text-green-500 font-medium">$600.00</h2>
        </ExpensesCard>
      </div>
      <div>
        <div className="flex w-2/3 justify-between">
          <h2 className="m-3 text-md font-medium">Recent Expenses</h2>
          <button
            className="bg-blue-500 text-white m-0"
            onClick={() => setOpen(true)}
          >
            Add Expenses
          </button>
          <Modal open={open} setOpen={setOpen}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Add your expense
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Fill in the details of your expense below.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddExpense(e);
                  setOpen(false);
                }}
              >
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter category"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <input
                    type="number"
                    name="amount"
                    className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="mt-6 flex justify-end items-center">
                  <button
                    type="button"
                    className="bg-gray-300 mr-2 h-12"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button className="bg-blue-500 text-white my-3" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
        <div className="flex justify-between w-2/3 bg-white p-4 m-3">
          <p className="w-1/3 font-medium">Date</p>
          <p className="w-1/3 font-medium">Category</p>
          <p className="w-1/3 font-medium">Amount</p>
        </div>
        {Expenses.map((i) => (
          <div className="flex justify-between w-2/3 bg-white p-4 mx-3 my-1">
            <p className="w-1/3">{i.Date}</p>
            <p className="w-1/3">{i.Category}</p>
            <p className="w-1/3">${i.Amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
