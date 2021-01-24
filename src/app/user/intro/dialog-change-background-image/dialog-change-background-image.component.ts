import {Component, OnInit} from '@angular/core';
import {FileService} from '../../../service/file.service';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {UserPicDTO} from '../../../models/UserPicDTO';
import {TokenService} from '../../../service/token.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-change-background-image',
  templateUrl: './dialog-change-background-image.component.html',
  styleUrls: ['./dialog-change-background-image.component.scss']
})

export class DialogChangeBackgroundImageComponent implements OnInit {
  public dto: UserPicDTO;
  public percentage: Observable<number>;
  public isHovering: boolean;
  private task: AngularFireUploadTask;
  private snapshot: Observable<any>;

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore,
              private fileService: FileService,
              private tokenService: TokenService,
              private dialogRef: MatDialogRef<DialogChangeBackgroundImageComponent>
  ) {
  }

  ngOnInit() {
    this.dto = new UserPicDTO();
  }

  public resetBackground() {
    this.fileService.resetBackgroundPic(this.tokenService.getUserId())
      .subscribe((response) => {
        console.log(response);
      });
  }

  public toggleHover(event: boolean) {
    this.isHovering = event;
  }

  public startUpload(event: FileList) {
    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported  file type :( ');
    }

    const path = `backgr/${this.tokenService.getUserId()}_${new Date().getTime()}_${file.name}`;
    const customMetadata = {app: 'travelstory resource'};
    this.task = this.storage.upload(path, file, {customMetadata});
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.snapshot.subscribe(() => {
    }, error1 => {
      console.error(error1);
    }, () => {
      this.storage.ref(path)
        .getDownloadURL()
        .subscribe(value => {
            this.dto.pictureUrl = value;
            this.dto.id = this.tokenService.getUserId();
            this.fileService.uploadBackgroundPic(this.dto)
              .subscribe(() => {
              });
          }, (error1) => {
            console.error(error1);
          }, () => location.reload(true)
        )
      ;
    });
  }

  public close(): void {
    this.dialogRef.close();
  }
}
