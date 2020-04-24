import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld (request: Request, response: Response) {
  const user = createUser({
    name: 'Teste', 
    email: 'teste@teste.com',
    password: '123456',
    techs: [
      'nodejs', 
      'reactjs',
      { title: 'javascript', experience: 75 }
    ],
  });

  console.log(user.email);

  return response.json({message: "Hello World"});
}