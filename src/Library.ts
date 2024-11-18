import Book from "./Book";
import Member from "./Member";

interface LibraryProps {
  members: Member[];
  books: Book[]
}

class Library {
  private members: Member[];
  private availableBooks: Book[];
  private unavailableBooks: Book[];

  constructor({ members, books }: LibraryProps) {
    this.members = members;
    this.availableBooks = books;
    this.unavailableBooks = [];
  }

  // TODO
  // Add members
  // Check out books to members
  // Check in books from members
}

export default Library;