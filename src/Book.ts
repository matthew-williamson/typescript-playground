interface BookProps {
  title: string;
  author: string;
}

class Book {
  private readonly title: string;
  private readonly author: string;
  private checkedOut: boolean;
  
  constructor({ title, author }: BookProps) {
    this.title = title;
    this.author = author;
    this.checkedOut = false;
  }

  getIsCheckedOut() {
    return this.checkedOut;
  }

  checkOut() {
    this.checkedOut = true;
  }

  checkIn() {
    this.checkedOut = false;
  }
}

export default Book;