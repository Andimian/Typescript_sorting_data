import {Sorter} from "./Sorter";


/* В данном классе будет два поля: число и ссылка на след узел */
class Node {
    next: Node | null = null; //ссылка либо на след узел либо null если это последний узел или единственный

    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    // добавляет в конец новый узел
    add(data: number): void {
        const node = new Node(data);

        //если лист еще пустой (не имеет head)
        if (!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }

    //Чтобы получать доступ к элементу
    at(index: number): Node {
        if (!this.head) {
            throw new Error('Index is out of bounds');
        }

        let counter = 0; // для индекса
        let node: Node | null = this.head;
        while(node) {   //итерируем чере список и когда counter равен передаваемому индексу - это нужный элемент
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        throw new Error('Index is out of bounds'); // если захотят получить элемент по индексу, которого нет
    }

    compare(leftIndex: number, rightIndex: number) {
        if (!this.head) {
            throw new Error('List is empty')
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode =  this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if (!this.head) {
            return;
        }
        let node: Node | null  = this.head;
        while(node) {
            console.log(node.data);
            node = node.next;
        }
    }
}