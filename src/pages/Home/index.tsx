import { useState } from 'react';
import { Dashboard } from '../../components/Dashboard';
import { Header } from '../../components/Header';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { TransactionsProvider } from '../../hooks/useTransactions';
import { GlobalStyle } from '../../styles/global';

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
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 
      <NewTransactionModal 
        isOpen ={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}/>        
      <Dashboard />
      <GlobalStyle />
   </TransactionsProvider>
  );
}

