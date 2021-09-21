/* eslint-disable no-console */
import { createContext, ReactNode, useContext } from 'react';

import { PacientInterface } from '../interfaces/pacient';
import { colors } from '../styles/theme';

import { getMemedURL } from '../utils/getMemedUrl';

interface MemedContextProps {
  logOut: () => void;
  open: () => void;
  initMemed: (token: string) => void;
  definePacient: (pacient: PacientInterface) => Promise<any>;
}

interface Props {
  children: ReactNode;
}

const MemedContext = createContext({} as MemedContextProps);

function MemedProvider({ children }: Props) {
  const logOut = () => {
    // Parar os event listeners da Memed
    MdHub.server.unbindEvents();

    // Remover o objeto principal da Memed
    // @ts-expect-error
    delete window.MdHub;
  };

  const definePacient = (pacient: PacientInterface): Promise<any> => {
    return new Promise((resolve, reject): void => {
      try {
        MdHub.command
          .send('plataforma.prescricao', 'setPaciente', {
            idExterno: pacient?.idExterno,
            nome: pacient?.nome,
            nome_social: pacient?.nome_social,
            endereco: pacient?.endereco,
            cidade: pacient?.cidade,
            telefone: pacient?.telefone,
            peso: pacient?.peso,
            altura: pacient?.altura,
            nome_mae: pacient?.nome_mae,
            dificuldade_locomocao: pacient?.dificuldade_locomocao,
          })
          .then(
            (response: any) => {
              resolve('');
            },
            error => {
              reject(error);
            }
          );
      } catch (err: any) {
        console.error(err);
      }
    });
  };

  const initEventsMemed = () => {
    try {
      MdSinapsePrescricao.event.add('core:moduleHide', (modulo: { moduleName: string }) => {
        if (modulo.moduleName === 'plataforma.prescricao') {
          console.info('====== Módulos da Memed encerrados ======');
        }
      });

      MdSinapsePrescricao.event.add('core:moduleInit', function setFeatureToggle() {
        MdHub.command.send('plataforma.prescricao', 'setFeatureToggle', {
          // Desativa a opção de excluir um paciente
          deletePatient: false,
          // Desabilita a opção de remover/trocar o paciente
          removePatient: false,
          // Esconde o formulário de confirmação dos dados do paciente para receituário de controle especial
          // caso a cidade e o endereço tenham sido definidos com o comando `setPaciente`
          editPatient: false,
        });
      });
    } catch (err: any) {
      console.error(err);
    }
  };

  const initMemed = (token: string) => {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('data-color', colors.primary[80]);
    script.setAttribute('data-token', token);
    script.src = `https://${getMemedURL()}/modulos/plataforma.sinapse-prescricao/build/sinapse-prescricao.min.js`;
    script.onload = () => {
      initEventsMemed();
    };
    document.body.appendChild(script);
  };

  const open = (module = 'plataforma.prescricao') => {
    MdHub.module.show(module);
  };

  return <MemedContext.Provider value={{ logOut, open, initMemed, definePacient }}>{children}</MemedContext.Provider>;
}

const useMemed = (): MemedContextProps => {
  const context = useContext(MemedContext);

  if (!context) {
    throw new Error('useMemed must be used within an MemedProvider');
  }

  return context;
};

export { useMemed, MemedProvider };
