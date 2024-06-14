const dataBase = require('../models');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret.js');

class AuthService {
  async login (dto){
    const usuario = await dataBase.usuarios.findOne({
      attributes : ['id','email','senha'],
      where:{
        email: dto.email
      }
    });

    if(!usuario){
      throw new Error('Usuario não cadastrado!');
    }
    const senhasIguais = await compare(dto.senha,usuario.senha);

    if(!senhasIguais){
      throw new Error('Email ou senha estão inválidos!');
    };

    const accessToken = sign({
      id: usuario.id,
      email: usuario.email
    },jsonSecret.secret,{
      expiresIn : 86400
    });

    return { accessToken };
  }
}

module.exports = AuthService;