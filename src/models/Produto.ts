
import Categoria from './Categoria';

interface Produto {
  id: number;
  nome: string;
  preco: string;
  categoria?: Categoria | null;

}

