package com.example.codeengine.expense.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.codeengine.expense.model.Book;
import com.example.codeengine.expense.repository.BookRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BookController {

	@Autowired
	private BookRepository bookRepository;

	public BookController(BookRepository bookRepository) {
		super();
		this.bookRepository = bookRepository;
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(method=RequestMethod.GET, value="/books")
	public List<Book> getAllBooks() {
		return (List<Book>) bookRepository.findAll();
	/*	List<Book> books = new ArrayList<>();
		bookRepository.findAll().forEach(books::add); 
		return books; 
		//select * from books; */
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/get/{id}")
	public Book getBook(@PathVariable Integer id) {
		System.out.println(id);
		return bookRepository.findById(id).orElse(null);
	} 
	
	@CrossOrigin(origins = "*")
	@RequestMapping(method=RequestMethod.POST, value="/add",consumes = MediaType.APPLICATION_JSON_VALUE)
	public Book addBook(@RequestBody Book book) {
		bookRepository.save(book);
		String temp = book.getAuthor();
		return book;
	}
	
	
	@RequestMapping(method=RequestMethod.DELETE, value="/delete/{id}")
	public void deleteBook (@PathVariable Integer id) {
		bookRepository.deleteById(id);
	}
	
	
}
