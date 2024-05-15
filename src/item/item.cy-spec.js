/// <reference types="cypress" />
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { mount } from 'cypress-react-unit-test';
import { Item } from './item';

describe('Item', () => {

  const item1 = {
    id : 10,
    completed:true,
     name : "Todo"
  };
  it('should display todo item', () => {
    mount(
      <section className="Item">
        <Item todo = {item1} />
      </section>
    );
    // component is running like a mini web app
    // we can interact with it using normal Cypress commands
    // https://on.cypress.io/api
    //cy.contains('Clear completed').click();
    //cy.get('@clear').should('have.been.calledOnce');
    cy.get('.view')
    .find('.toggle')
    .should('be.checked');
  });

  // it('should mark todo item as completed', () => {
  //   const todo = { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: true };
  //   const onUpdate = jest.fn();
  //   const onRemove = jest.fn();
  //   const { getByTestId } = render(<Item todo={todo} onUpdate={onUpdate} onRemove={onRemove} />);

  //   expect(getByTestId('todo-item')).toHaveClass('completed');
  // });

  // it('should notify about delete button', () => {
  //   const todo = { id: 'e2bb892a-844a-47fb-a2b3-47f491af9d88', name: 'Demo', completed: false };
  //   const onUpdate = jest.fn();
  //   const onRemove = jest.fn();
  //   const { getByTestId } = render(<Item todo={todo} onUpdate={onUpdate} onRemove={onRemove} />);

  //   fireEvent.click(getByTestId('todo-remove'));

  //   expect(onRemove).toHaveBeenCalledWith(todo.id);
  // });
});
