class MyBook {
	constructor(title, author, ISBN, numberOfPages) {
		this.title = title;
		this.author = author;
		this.ISBN = ISBN;
		this.numberOfPages = numberOfPages;
		this.page = 1;
	}
	turnPage() {
		this.page += 1;
	}
	setPage(pageNum) {
		this.page = pageNum;
	}
}

export default MyBook;
