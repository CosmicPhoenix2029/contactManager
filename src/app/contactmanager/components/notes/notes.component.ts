import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Notes } from '../../models/notes';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { filter } from 'rxjs';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit{

    @Input() notes!: Notes[];

    displayedColumns: string[] = ['id', 'Title', 'Date'];
    dataSource!: MatTableDataSource<Notes>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    
    ngOnInit(): void {
      this.dataSource = new MatTableDataSource<Notes>(this.notes);
    }
    
    /*applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }*/
}
