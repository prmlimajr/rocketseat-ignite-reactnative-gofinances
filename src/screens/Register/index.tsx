import React, { useState } from 'react';
import { Modal } from 'react-native';
import { CategorySelect } from '../CategorySelect';
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const handleTransactionTypeSelection = (type: 'up' | 'down') => {
    setTransactionType(type);
  };

  const handleOpenSelectCategoryModal = () => {
    setIsCategoryModalOpen(true);
  };

  const handleCloseSelectCategoryModal = () => {
    setIsCategoryModalOpen(false);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Preço' />

          <TransactionsTypes>
            <TransactionTypeButton
              type='up'
              title='Income'
              onPress={() => handleTransactionTypeSelection('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type='down'
              title='Outcome'
              onPress={() => handleTransactionTypeSelection('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>
        <Button title='Enviar' />
      </Form>

      <Modal visible={isCategoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
