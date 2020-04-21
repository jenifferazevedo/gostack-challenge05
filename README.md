# 🚀Challenge 05 - GoStack!

## Node challenge about Transactions!

The goal was to develop a Node.js backend. with TypeScript and the 'account transactions' theme. The most important was the structure, the organization of the code and the architecture of the software.

- [x] Develop Model;
- [x] Develop Repositories;
- [x] Develop Services;
- [x] Develop Routes;
- [x] Pass Routes test;

### Functionalities:

- GET: List all transactions and a balance with the sum of incomes, outcomes and the account total

- POST: It creates transactions with a UUID. Requesting title, amount and type (income or result) and not allowing to create any income transaction if the account total is insufficient.

![](https://github.com/jenifferazevedo/gostack-challenge05/blob/master/docs/challenge05.JPG)

### Tests

- [x] Should be able to create a new transaction;
- [x] Should be able to list the transactions;
- [x] Should not be able to create outcome transaction without a valid balance;

![](https://github.com/jenifferazevedo/gostack-challenge05/blob/master/docs/challenge05-tests.JPG)
