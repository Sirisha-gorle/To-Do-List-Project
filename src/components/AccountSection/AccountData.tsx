import React from "react";
import LayoutMenus from "../Utilities/LayoutMenus";
import DarkMode from "./DarkMode";
import DeleteTasks from "./DeleteTasks";
import TasksDone from "./TasksDone";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";

const AccountData: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);
  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };

  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="top-0 right-0 "
    >
      <section className="p-5 flex flex-col h-full">
        <span className="flex items-center mx-auto">
          <span className="font-medium">Hi, User!</span>
          <img  className="w-10 rounded-full ml-4" />
        </span>

        <DarkMode />

        <TasksDone />
        <DeleteTasks />
        <a
          className="mt-4 bg-blue-100 p-2 rounded-md text-blue-600 text-center transition hover:bg-blue-200 dark:bg-slate-700/[.3] dark:text-slate-200"
        >
          Projected by Sirisha
        </a>
      </section>
    </LayoutMenus>
  );
};

export default AccountData;
