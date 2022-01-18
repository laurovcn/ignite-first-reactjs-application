import { useState } from 'react';
import { Dashboard } from '../components/Dashboard';
import { Header } from '../components/Header';
import { NewTransactionModal } from '../components/NewTransactionModal';
import { TransactionsProvider } from '../hooks/useTransactions';
import { GlobalStyle } from '../styles/global';

export function Home() { 

const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

function handleCloseNewTransactionModal(){
  setIsNewTransactionModalOpen(false);
}
function handleOpenNewTransactionModal(){
  setIsNewTransactionModalOpen(true);
}

  return (
    <TransactionsProvider>
      <NewTransactionModal 
        isOpen ={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}/>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 
      <Dashboard />
      <GlobalStyle />
   </TransactionsProvider>
  );
}

export default Home;
