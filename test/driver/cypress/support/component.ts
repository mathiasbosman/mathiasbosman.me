// ***********************************************************
// https://on.cypress.io/configuration
// ***********************************************************

import './commands'
import '../plugins/tailwind.ts'

import { mount } from 'cypress/react18'

Cypress.Commands.add('mount', mount)
