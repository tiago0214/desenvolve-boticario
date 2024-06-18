# Node.js REST API with Role-Based Access Control (RBAC)

This API provides a comprehensive solution for managing users, roles, permissions, products, and security within an application. It includes endpoints for user authentication, CRUD operations for users, roles, permissions, and products, and advanced security features such as role-based access control and permissions management. Built with Node.js and Express, it utilizes JWT for secure authentication and authorization.

## Features

- User Authentication (Login)
- Role-Based Access Control (RBAC)
- Permission Management
- Product Management
- Middleware for Authentication and Authorization

# Structure

## Controllers
- `authController.js`
- `permissaoController.js`
- `produtoController.js`
- `roleController.js`
- `segurancaController.js`
- `usuarioController.js`

## Middleware
- `autenticado.js`
- `permissoes.js`
- `roles.js`

## Routes
- `authRoute.js`
- `permissaoRoute.js`
- `produtoRoute.js`
- `roleRoute.js`
- `segurancaRoute.js`
- `usuariosRoute.js`

## Services
- `authService.js`
- `permissaoService.js`
- `produtoService.js`
- `roleService.js`
- `segurancaService.js`

## Config
- `jsonSecret.js`

## Root Files
- `index.js`
- `package.json`

