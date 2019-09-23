import api from '../services/api';
import { toast } from 'react-toastify';

class CadastroProfessor {
  store(matricula, nome, sobrenome, disciplinaSelected, disciplinas) {
    let disciplinaIds = [];
    disciplinaSelected.forEach(disc1 => {
      disciplinas.forEach(disc2 => {
        if (disc1 === disc2.nome) {
          disciplinaIds.push(disc2.id);
        }
      });
    });

    api
      .post('/usuarios', {
        matricula: matricula,
        nome: `${nome} ${sobrenome}`,
        password_hash: '123123',
        status: true
      })
      .then(resultsUsu => {
        api
          .post('/professores', {
            id_usuario: resultsUsu.data.id
          })
          .then(resultsProf => {
            if (resultsProf.status === 200)
              toast.success('Professor adicionado com sucesso');
            if (disciplinaSelected.length > 0) {
              disciplinaIds.forEach(disciplinaId => {
                api
                  .post('/professordisciplina', {
                    id_usuario: resultsUsu.data.id,
                    id_disciplina: disciplinaId
                  })
                  .then(resultProfDisc => {
                    if (resultProfDisc.status === 200)
                      toast.success('Disciplina(s) adicionada(s) com sucesso');
                  });
              });
            }
          });
      });
  }
}

export default new CadastroProfessor();
