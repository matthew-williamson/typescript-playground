import Book from "./Book";

interface MemberProps {
  name: string;
  id: number;
}

class Member {
  private borrowedBooks: Book[]
  private readonly id: number;
  private readonly name: string;

  constructor({ name, id }: MemberProps) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }

  borrowBook(book: Book) {
    // TODO
  }

  returnBook(book: Book) {
    // TODO
  }
}

export default Member