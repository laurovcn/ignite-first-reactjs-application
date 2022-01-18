import { useState } from 'react';
import { TransactionsProvider } from '../../hooks/useTransactions';
import { Header } from '../../components/Header';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionTable";
import { Container } from "./styles";

export function Dashboard() {   
  
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
      <Container>     
        <Summary />
        <TransactionsTable/>   
      </Container>
    </TransactionsProvider>   
  );
}