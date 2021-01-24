import {fromEvent as observableFromEvent} from 'rxjs';

import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExampleDatabase, ExampleDataSource, TABLE_HELPERS} from './helpers.data';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';

import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {UserService} from './userService';

@Component({
  selector: 'feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss']
})
export class FeatureTableComponent implements OnInit {

  displayedColumns = ['userId', 'userName', 'email', 'dateOfBirth', 'dateOfRegistration', 'gender', 'role', 'lastActivity'];
  exampleDatabase = new ExampleDatabase();
  selection = new SelectionModel<string>(true, []);
  dataSource: ExampleDataSource | null;
  allfeatures = TABLE_HELPERS;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild('filter', {static: false}) filter: ElementRef;
  users: User[];
  private online: string;
  pageSize: number;
  private usersUrl = 'https://travel-story-server.herokuapp.com/admin/getAllUsers/0/';  // URL to web api
  constructor(private http: HttpClient, private userService: UserService) {
  }

  ngOnInit() {
    this.pageSize = 20;
    this.getUsers(this.usersUrl + this.pageSize);
    console.log(this.users);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    observableFromEvent(this.filter.nativeElement, 'keyup').pipe(
      debounceTime(150),
      distinctUntilChanged(), )
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  isUserOnline(user): boolean {
    this.online = 'ONLINE';
    if (user === this.online) {
      return true;
    } else {
      return false;
    }
  }

  public updateData(pageSize: number): void {
    this.getUsers(this.usersUrl + pageSize);
  }

  public isUsersUnloaded(): boolean {
    if ((this.users.length < 1)) {
      return true;
    } else {
      return false;
    }
  }

  isAllSelected(): boolean {
    if (!this.dataSource) {
      return false;
    }
    if (this.selection.isEmpty()) {
      return false;
    }

    if (this.filter.nativeElement.value) {
      return this.selection.selected.length == this.dataSource.renderedData.length;
    } else {
      return this.selection.selected.length == this.exampleDatabase.data.length;
    }
  }

  masterToggle() {
    if (!this.dataSource) {
      return;
    }

    if (this.isAllSelected()) {
      this.selection.clear();
    } else if (this.filter.nativeElement.value) {
      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
    } else {
      this.exampleDatabase.data.forEach(data => this.selection.select(data.id));
    }
  }

  getUsers(serverUrl: string): void {
    this.userService.getUser(serverUrl)
      .subscribe(users => {
        console.log(users);
        return this.users = users;
      });
  }

}
