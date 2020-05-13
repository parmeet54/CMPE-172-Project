package com.example.codeengine.expense.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@Table(name="book")
public class Book {

	@Id
	@GeneratedValue
	private Integer id;
	private String name;
	private String author;
	private int count;
	
	
	
	public Book() {
		super();
	}

	public Book(Integer id, String name, String author, int count) {
		super();
		this.id = id;
		this.name = name;
		this.author = author;
		this.count = count;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public void incrementCount() {
		count++;
	}
	
	public void decrementCount() {
		if ( count == 0) {
			return;
		} else {
			count--;
		}
	}
	
	
}
