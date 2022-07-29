import {Sorter} from './Sorter';
import {NumberCollection} from "./NumberCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numbersCollection = new NumberCollection([4, 5, 234, 1]);
numbersCollection.sort();
console.log(numbersCollection);

const charactersCollection = new CharactersCollection('asdfajJEfwef');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkList = new LinkedList();
linkList.add(12);
linkList.add(-4);
linkList.add(324);
linkList.add(0);
linkList.sort();
linkList.print();