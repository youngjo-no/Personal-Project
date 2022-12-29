package com.example.domain;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class DataTableVO<T> {
	
	private int draw;
	private long recordsTotal;
	private long recordsFiltered;
	
	private List<T> data = new ArrayList<>();
	
	public int getdraw() {
		return draw;
	}
	
	public void setDraw(int draw) {
		this.draw = draw;
	}
	
	public long recordsTotal() {
		return recordsTotal;
	}
	
	public void setRecordsTotal(long recordsTotal) {
		this.recordsTotal = recordsTotal;
	}
	
	public long recordsFiltered() {
		return recordsFiltered;
	}
	
	public void setRecordsFiltered(long recordsFiltered) {
		this.recordsFiltered = recordsFiltered;
	}

}
