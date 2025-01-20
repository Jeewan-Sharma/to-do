import CircularProgress from "@/app/components/CircularProgressBar";
import { useLoading } from "@/app/context/LoaderContext";
import { getAllTodo } from "@/app/services/todo.services";
import { ITodo, ITodoResponse } from "@/app/types";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [ApiError, setApiError] = useState<string | null>(null);
  const { setIsLoading } = useLoading();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;
  const skip = (currentPage - 1) * limit;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const todoResponse: ITodoResponse = await getAllTodo(limit, skip);
        setTodos(todoResponse.todos);
        setTotalPages(Math.ceil(todoResponse.total / limit));
      } catch (error: unknown) {
        if (error instanceof Error) {
          setApiError(
            error.message || "Something went wrong. Please try again."
          );
        } else {
          setApiError("Something went wrong. Please try again.");
          console.error(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [currentPage, setIsLoading, ApiError, skip]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const generatePaginationButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    return buttons;
  };

  return (
    <div className="ps-6 p-4 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Todo List
        </h1>
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                todo.completed
                  ? "bg-green-100 border-green-400 text-green-700"
                  : "bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200 hover:shadow-md"
              }`}
            >
              <span
                className={`flex-1 text-sm ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.todo}
              </span>
              <button
                className={`${
                  todo.completed
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } px-3 py-1 text-xs font-semibold rounded-lg`}
              >
                {todo.completed ? "Completed" : "Pending"}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevPage}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-primary_color hover:text-white"
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <div className="hidden md:flex gap-2">
            {generatePaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${
                  currentPage === page
                    ? "bg-primary_color text-white"
                    : "bg-gray-200 text-gray-700"
                } px-3 py-1 rounded-lg`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-primary_color hover:text-white"
          >
            Next
          </button>
        </div>
        <div>
          <p className="text-end text-sm text-gray-700 mt-1">
            page: {currentPage} / {totalPages}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div className="p-4 bg-white rounded-lg shadow-2xl flex flex-col lg:flex-row gap-4 justify-between">
          <div className="flex flex-col items-center">
            <CircularProgress percentage={65} progressColor="green" />
            <p className="text-xl lg:text-sm text-[green] mt-1">Competed</p>
          </div>
          <div className="flex flex-col items-center">
            <CircularProgress percentage={25} progressColor="blue" />
            <p className="text-xl lg:text-sm text-[blue] mt-1">On Progress</p>
          </div>
          <div className="flex flex-col items-center">
            <CircularProgress percentage={10} progressColor="red" />
            <p className="text-xl lg:text-sm text-[red] mt-1">Not Completed</p>
          </div>
        </div>
        <div className="p-4 hidden md:block bg-white rounded-lg shadow-2xl">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Important Todo
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center justify-between p-3 rounded-lg transition-all bg-yellow-100 border-yellow-400 text-yellow-700">
              <span className="flex-1 text-sm truncate">
                Finish project documentation and prepare for the presentation
              </span>
            </li>
          </ul>
          <ul className="space-y-3 mt-3">
            <li className="flex items-center justify-between p-3 rounded-lg transition-all bg-yellow-100 border-yellow-400 text-yellow-700">
              <span className="flex-1 text-sm truncate">
                Implement code linting and formatting rules for the project
              </span>
            </li>
          </ul>
          <ul className="space-y-3 mt-3">
            <li className="flex items-center justify-between p-3 rounded-lg transition-all bg-yellow-100 border-yellow-400 text-yellow-700">
              <span className="flex-1 text-sm truncate">
                Optimize SQL queries for better performance
              </span>
            </li>
          </ul>
          <ul className="space-y-3 mt-3">
            <li className="flex items-center justify-between p-3 rounded-lg transition-all bg-yellow-100 border-yellow-400 text-yellow-700">
              <span className="flex-1 text-sm truncate">
                Review pull requests from the team and provide feedback
              </span>
            </li>
          </ul>
          <ul className="space-y-3 mt-3">
            <li className="flex items-center justify-between p-3 rounded-lg transition-all bg-yellow-100 border-yellow-400 text-yellow-700">
              <span className="flex-1 text-sm truncate">
                Write documentation for the newly created API endpoints
              </span>
            </li>
          </ul>
          <ul className="space-y-3 mt-3">
            <li className="flex items-center justify-between p-3 rounded-lg transition-all bg-yellow-100 border-yellow-400 text-yellow-700">
              <span className="flex-1 text-sm truncate">
                Set up continuous integration (CI) for the project
              </span>
            </li>
          </ul>
          <ul className="space-y-3 mt-3">
            <li className="flex items-center justify-between p-3 rounded-lg transition-all bg-yellow-100 border-yellow-400 text-yellow-700">
              <span className="flex-1 text-sm truncate">
                Refactor the user authentication flow to support two-factor
                authentication
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
