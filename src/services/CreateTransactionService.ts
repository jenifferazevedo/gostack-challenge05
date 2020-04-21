import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDOT {
  title: string;

  value: number;

  type: 'income' | 'outcome';
}
class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDOT): Transaction {
    if (type === 'outcome') {
      const balance = this.transactionsRepository.getBalance();
      if (value > balance.total) {
        throw Error('Insufficient funds!');
      } else {
        return this.transactionsRepository.create({ title, value, type });
      }
    } else {
      return this.transactionsRepository.create({ title, value, type });
    }
  }
}

export default CreateTransactionService;
