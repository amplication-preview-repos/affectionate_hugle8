import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ExpenseList } from "./expense/ExpenseList";
import { ExpenseCreate } from "./expense/ExpenseCreate";
import { ExpenseEdit } from "./expense/ExpenseEdit";
import { ExpenseShow } from "./expense/ExpenseShow";
import { BudgetList } from "./budget/BudgetList";
import { BudgetCreate } from "./budget/BudgetCreate";
import { BudgetEdit } from "./budget/BudgetEdit";
import { BudgetShow } from "./budget/BudgetShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"CoinKeeperClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Expense"
          list={ExpenseList}
          edit={ExpenseEdit}
          create={ExpenseCreate}
          show={ExpenseShow}
        />
        <Resource
          name="Budget"
          list={BudgetList}
          edit={BudgetEdit}
          create={BudgetCreate}
          show={BudgetShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
